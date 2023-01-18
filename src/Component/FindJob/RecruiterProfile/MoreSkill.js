import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import { BsFillPeopleFill, BsThreeDots } from 'react-icons/bs';
import { TbFileArrowRight } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const MoreSkill = () => {

    const navigate = useNavigate()

    return (
        <div >
            <div className='bg-base-content text-white p-6'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <div onClick={() => navigate(-1)}>
                            <p className='text-3xl mt-3 ml-3'><AiOutlineArrowLeft /></p>
                        </div>
                        <h1 className='text-3xl mt-2 ml-3'>skills</h1>
                    </div>
                    <div className='flex'>
                        <button className='btn ml-2 mt-2 border-blue-400 rounded-2xl text-white btn-outline'>demonstrate skill</button>
                        <p><BsThreeDots className='text-3xl mt-3 ml-6' /></p>
                        <p className='text-3xl mt-3 ml-3'><BiPencil /></p>
                    </div>
                </div>
            </div>

            <div className='bg-base-content text-white p-6'>
                <div className='flex justify-between'>
                    <p className='text-xl'>Cascading Style Sheets (CSS)</p>
                    <p className='text-3xl mt-3 ml-3'><BiPencil /></p>
                </div>
                <div >
                    <div className='flex'>
                        <p className='text-3xl  ml-3'><TbFileArrowRight /></p>
                        <p className='text-xl mt-1 ml-4'> Passed LinkedIn Skill AssessmentPassed LinkedIn Skill Assessment </p>
                    </div>
                    <div className='flex mt-4'>
                        <p className='text-3xl  ml-3'><BsFillPeopleFill /></p>
                        <p className='text-xl mt-1 ml-4'>1 endorsement</p>
                    </div>
                </div>
            </div>
            <div className='bg-base-content text-white p-6'>
                <div className='flex justify-between'>
                    <p className='text-xl'>Cascading Style Sheets (CSS)</p>
                    <p className='text-3xl mt-3 ml-3'><BiPencil /></p>
                </div>
                <div >
                    <div className='flex'>
                        <p className='text-3xl  ml-3'><TbFileArrowRight /></p>
                        <p className='text-xl mt-1 ml-4'> Passed LinkedIn Skill AssessmentPassed LinkedIn Skill Assessment </p>
                    </div>
                    <div className='flex mt-4'>
                        <p className='text-3xl  ml-3'><BsFillPeopleFill /></p>
                        <p className='text-xl mt-1 ml-4'>1 endorsement</p>
                    </div>
                </div>
            </div>
            <div className='bg-base-content text-white p-6'>
                <div className='flex justify-between'>
                    <p className='text-xl'>Cascading Style Sheets (CSS)</p>
                    <p className='text-3xl mt-3 ml-3'><BiPencil /></p>
                </div>
                <div >
                    <div className='flex'>
                        <p className='text-3xl  ml-3'><TbFileArrowRight /></p>
                        <p className='text-xl mt-1 ml-4'> Passed LinkedIn Skill AssessmentPassed LinkedIn Skill Assessment </p>
                    </div>
                    <div className='flex mt-4'>
                        <p className='text-3xl  ml-3'><BsFillPeopleFill /></p>
                        <p className='text-xl mt-1 ml-4'>1 endorsement</p>
                    </div>
                </div>
            </div>
            <div className='bg-base-content text-white p-6'>
                <div className='flex justify-between'>
                    <p className='text-xl'>Cascading Style Sheets (CSS)</p>
                    <p className='text-3xl mt-3 ml-3'><BiPencil /></p>
                </div>
                <div >
                    <div className='flex'>
                        <p className='text-3xl  ml-3'><TbFileArrowRight /></p>
                        <p className='text-xl mt-1 ml-4'> Passed LinkedIn Skill AssessmentPassed LinkedIn Skill Assessment </p>
                    </div>
                    <div className='flex mt-4'>
                        <p className='text-3xl  ml-3'><BsFillPeopleFill /></p>
                        <p className='text-xl mt-1 ml-4'>1 endorsement</p>
                    </div>
                </div>
            </div>

            <div className='bg-base-content text-white p-14'>
                <div className='flex justify-between my-4'>
                    <p className='text-xl font-bold'>ECMAScript</p>
                    <p className='text-3xl mt-3 ml-3'><BiPencil /></p>
                </div>
                <div className='flex justify-between my-4'>
                    <p className='text-xl font-bold'>ECMAScript</p>
                    <p className='text-3xl mt-3 ml-3'><BiPencil /></p>
                </div>
                <div className='flex justify-between my-4'>
                    <p className='text-xl font-bold'>ECMAScript</p>
                    <p className='text-3xl mt-3 ml-3'><BiPencil /></p>
                </div>
                <div className='flex justify-between my-4'>
                    <p className='text-xl font-bold'>ECMAScript</p>
                    <p className='text-3xl mt-3 ml-3'><BiPencil /></p>
                </div>
                <div className='flex justify-between my-4'>
                    <p className='text-xl font-bold'>ECMAScript</p>
                    <p className='text-3xl mt-3 ml-3'><BiPencil /></p>
                </div>
                <div className='flex justify-between my-4'>
                    <p className='text-xl font-bold'>ECMAScript</p>
                    <p className='text-3xl mt-3 ml-3'><BiPencil /></p>
                </div>
            </div>

        </div>
    );
};

export default MoreSkill;