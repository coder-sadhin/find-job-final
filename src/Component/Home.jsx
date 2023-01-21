import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import CartOption from './CartOption';
import Contact from './Contact/Contact';
import HiringCompany from './HiringCompany';
import JobCategory from './JobCategory';
import Other from './Other';
import PricingPlan from './PricingPlan/PricingPlan';

const Home = () => {
    return (
        <div>
            {/* this is banner */}
            <Banner />

            <Other></Other>

            <CartOption></CartOption>
            {/* this is job category */}
            <JobCategory />
            {/* this is company category */}
            <HiringCompany />

            {/* Pricing Plan */}
            <PricingPlan />
            {/* Learn sections  */}
            <div
                style={{
                    backgroundColor: '#16a085',
                }}
                className='my-16 p-16'>
                <div>
                    <h1 className='text-center text-white text-3xl font-bold'>Your Dream jobs Are Waiting</h1>
                    <p className='text-center text-white my-5 font-bold'>over 1 million interactions, 50,000 success stories Make yours now.</p>
                    <div className='flex justify-center'>
                        <button className="btn btn-outline btn-warning mr-5">Search Job</button>
                        <button className="btn btn-outline bg-white">Apply job Now</button>

                    </div>
                </div>
            </div>
            {/* this is contact */}
            <Contact />
        </div>
    );
};

export default Home;