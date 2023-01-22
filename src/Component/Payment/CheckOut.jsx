import React, { useContext, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Spinner from '../Spinner/Spinner';
import Payment from './Payment';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';



const CheckOut = () => {
    const [data, setData] = useState({})
    const { user, setRefreshToken } = useContext(AuthContext);
    const location = useLocation();
    const buyPack = (location?.state?.buyPack) || [];
    const [formNum, setFormNum] = useState(0);

    const stripePromise = loadStripe('pk_test_51M6TOhLZ8s0yewmCgFfm6EfzRiWSuPTc6OF3FkESiwmjMsoPJ2PZa0Prfbt9QaiyMsGQTm1QmElc2TwZFUK7J7o800vEyqku9W');


    const handleSubmit1 = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const pakage = form.package.value;
        // const  = f_name + " " + l_name;
        const email = form.email.value;
        const amount = form.amount.value;
        const token = form.token.value;

        const data = {
            name, email, amount, pakage, token, setRefreshToken
        }
        setData(data)
        setFormNum(1)
    }

    return (
        <div className='py-10 flex justify-center'>
            <div className='py-10 '>
                {formNum === 0 ?
                    <form onSubmit={handleSubmit1} id="payment_form" method="Post" className=" bg-slate-400 p-10 rounded-md max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Name
                                </label>
                                <input
                                    defaultValue={user?.displayName}
                                    readOnly
                                    className="appearance-none block w-full 
                        bg-gray-200 text-gray-700 border border-red-500 
                        rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
                        focus:bg-white" id="grid-first-name" type="text"
                                    placeholder="Jane" name='name' />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Package Name
                                </label>
                                <input
                                    defaultValue={buyPack?.pack}
                                    readOnly
                                    className="appearance-none block w-full
                            bg-gray-200 text-gray-700 border
                            border-gray-200 rounded py-3 px-4 
                            leading-tight focus:outline-none focus:bg-white
                           focus:border-gray-500" id="grid-last-name" type="text"
                                    placeholder="Doe" name='package' />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Email
                                </label>
                                <input
                                    defaultValue={user?.email}
                                    readOnly
                                    className="appearance-none block w-full
                             bg-gray-200 text-gray-700 border
                             border-gray-200 rounded py-3 px-4 mb-3 
                              leading-tight focus:outline-none focus:bg-white
                             focus:border-gray-500" type="email"
                                    name='email' />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Amount
                                </label>
                                <input
                                    defaultValue={buyPack?.amonunt}
                                    readOnly
                                    className="appearance-none block w-full
                             bg-gray-200 text-gray-700 border
                             border-gray-200 rounded py-3 px-4 mb-3 
                              leading-tight focus:outline-none focus:bg-white
                             focus:border-gray-500" type="number"
                                    name='amount' />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Get Token
                                </label>
                                <input
                                    defaultValue={"100"}
                                    readOnly
                                    className="appearance-none block w-full
                             bg-gray-200 text-gray-700 border
                             border-gray-200 rounded py-3 px-4 mb-3 
                              leading-tight focus:outline-none focus:bg-white
                             focus:border-gray-500" type="number"
                                    name='token' />
                            </div>
                        </div>
                        <div className='flex justify-center  w-full'>
                            <input style={{
                                backgroundColor: '#16a085',
                            }}
                                className='btn text-white' type="submit" value="Pay Now" />
                        </div>
                    </form>
                    :
                    <div className='bg-slate-400 px-10 py-5 text-white rounded-md max-w-lg'>
                        {
                            formNum === 1 ? <>
                                <div>
                                    <h3 className="text-3xl text-center text-white font-bold pt-5">Payment</h3>
                                    <p className='text-xl text-center text-white mt-3 mb-7'>Please Pay <strong>${data.amount}</strong></p>
                                    {
                                        <Elements stripe={stripePromise}>
                                            <Payment data={data} />
                                        </Elements>
                                    }
                                </div>
                            </> :
                                <div>
                                    <Spinner />
                                </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default CheckOut;
