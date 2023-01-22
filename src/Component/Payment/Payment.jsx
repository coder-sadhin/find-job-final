import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';
import SmallSpinner from '../Spinner/SmallSpinner';
import GooglePayButton from '@google-pay/button-react';
import { ServerApi } from '../../AllApi/MainApi';
import { useNavigate } from 'react-router-dom';

const Payment = ({ data }) => {

    const { name, email, amount, pakage, token, setRefreshToken } = data;
    const navigate = useNavigate();
    const stripe = useStripe();
    const element = useElements();
    const [cardError, setCardError] = useState();
    const [success, setSuccess] = useState();
    const [Prosessing, setProsessing] = useState(false);
    const [transitionId, setTransitionId] = useState();
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        setLoading(true)
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !element) {
            console.log(69);
            return;
        }
        const card = element.getElement(CardElement);

        if (card == null) {
            console.log(76);
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }
        setProsessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setSuccess('')
            setCardError(confirmError.message)
            return
        }
        if (paymentIntent.id) {
            handleToBuyToken(paymentIntent.id)
        };
        console.log(paymentIntent?.id)

    }

    const handleToBuyToken = (paymentId) => {
        const data = {
            name, email, amount, pakage, token, paymentId
        }
        fetch(`${ServerApi}/payment`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSuccess("Congratulation! Your Payment Successful")
                toast.success("Congratulation! Your Payment Successful")
                setTransitionId(paymentId.id)
                setLoading(false)
                setTimeout(function () {
                    toast('Good Job! Wait for Rediract', {
                        icon: '👏',
                    });
                }, 1000);
                setProsessing(false)
                setTimeout(function () {
                    setRefreshToken("refresh done")
                    navigate('/')
                }, 5000);
            })
    }

    useEffect(() => {
        fetch(`${ServerApi}/payment/intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount })
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
            });
    }, [amount])

    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='flex justify-center py-5'>
                    <button className='hover:text-orange-500  btn bg-gradient-to-r from-primary to-secondary text-white' type="submit" disabled={!stripe || !clientSecret || Prosessing}>
                        {
                            loading ? <SmallSpinner /> : "Confirm Payment"
                        }
                    </button>
                </div>
            </form>

            <div className='flex justify-center'>
                <GooglePayButton
                    className=' '
                    buttonSizeMode='fill'
                    environment="TEST"
                    paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                            {
                                type: 'CARD',
                                parameters: {
                                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                },
                                tokenizationSpecification: {
                                    type: 'PAYMENT_GATEWAY',
                                    parameters: {
                                        gateway: 'example',
                                        gatewayMerchantId: 'exampleGatewayMerchantId',
                                    },
                                },
                            },
                        ],
                        merchantInfo: {
                            merchantId: '12345678901234567890',
                            merchantName: 'Demo Merchant',
                        },
                        transactionInfo: {
                            totalPriceStatus: 'FINAL',
                            totalPriceLabel: 'Total',
                            totalPrice: amount,
                            currencyCode: 'USD',
                            countryCode: 'US',
                        },
                    }}
                    onLoadPaymentData={paymentRequest => {
                        console.log('load payment data', paymentRequest);
                    }}
                />
            </div>





            <p className="text-red-500 py-8">{cardError}</p>
            {
                success && <div className='py-5'>
                    <p className="text-green-500">{success}</p>
                    <p> Your Transition Id: <span className='font-bold text-red-500'>{transitionId}</span></p>
                </div>
            }
        </div>
    );
};

export default Payment;