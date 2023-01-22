import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../asset/Screenshot.png';

const Other = () => {
    return (
        <div className='hero min-h-screen'>
            <div className='flex justify-center'>
                <div className='mt-16'>
                    <div className='text-center'>
                        <h2 className='text-3xl font-semibold'>Welcome Plan Absolutely Free for the new Employers</h2>
                        <p className='my-6'>Enter the coupon code mentioned below during the checkout to get 100% off on the Welcome Plan worth Rs.1499/-</p>
                    </div>
                    <div className='flex p-12'>
                        <div className='ml-2 bg-slate-300 p-16'>
                            <h1 className='text-7xl font-semibold'>Vlaunchu 100off</h1>
                            <p className='text-3xl font-semibold'>Limited time offer,user the code too
                                <br /> post 100 jobs for free with the
                                <br /> Welcome Plan
                            </p>
                            <div className="divider"></div>
                            <Link className='flex mt-4 ' to={'/login'}>
                                <button className="btn text-white btn-outline w-[200px] bg-green-600 rounded-lg">Sign-Up Now</button>
                            </Link>
                        </div>
                        <div
                            style={{
                                backgroundColor: '#16a085',
                                transform: 'rotate(270deg)'
                            }}
                            className='w-[405px] text-white p-6 rotate-text'>
                            <h1 className='text-5xl text-center font-bold'>VOUCHER</h1>
                            <h1 className='text-5xl text-center font-bold'>100 JOBS</h1>
                            <h1 className='text-5xl text-center font-bold'>FOR FREE</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Other;