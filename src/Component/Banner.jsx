import React, { useContext } from 'react';
import img from '../asset/HomeImage/banner-img.png';
import { AuthContext } from '../ContextApi/AuthProvider/AuthProvider';
import './Banner.css'
import Login from './Login/Login';

const Banner = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="hero container mx-auto p-16 bannerBg  text-white">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                {
                    user?.email ? <img src={img} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                        :
                        <>
                            <div className='rounded-lg text-white lg:w-1/2 shadow-2xl'>
                                <Login />
                            </div>
                        </>
                }

                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">VlaunChu Jobs !</h1>
                    <p className="py-6 text-xl">We are looking for mission-oriented candidates who are passionate about global health. Looking for skilled professionals to help advance our life-saving mission. Trusted information. Fact-based content. Highlights: Donation Option Available, Newsletter Available.</p>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Job title,keywords..." className="input input-bordered text-black" />
                            <button className="btn btn-square ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;