import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsArrowLeftShort } from 'react-icons/bs';
import { HiOutlinePencil } from 'react-icons/hi';
import { MdDeleteOutline } from 'react-icons/md';
import { TbArrowsSort } from 'react-icons/tb';

const FeatureIn = () => {
    return (
        <div className=' dark:bg-gray-900 dark:text-gray-100 p-10' >
            < div className='bg-base-content p-6' >
                <div className='flex justify-between'>
                    <div className='flex'>
                        <p><BsArrowLeftShort className='text-4xl' /></p>
                        <h1 className='text-3xl font-semibold ml-4'>Feature</h1>
                    </div>
                    <div className='flex'>
                        <p><TbArrowsSort className='text-4xl' /></p>
                        <p><AiOutlinePlus className='text-4xl ml-4' /></p>
                    </div>
                </div>
            </ div>

            <div className=' bg-base-content p-6 mt-2'>
                <div className='flex'>
                    <div>
                        <img src="https://media.licdn.com/dms/image/sync/C5627AQFCXdZpVV28aw/articleshare-shrink_480/0/1673340940751?e=1674460800&v=beta&t=sDDmUrHOhfdHULAyyVkIdadFdaGmEfwSR1075FiOgPw" alt="Shoes" className="rounded-xl w-[700px] h-[250px]" />
                        <div className='flex mt-2'>
                            <div>
                                <button className="btn ml-2 border-white w-[150px] text-white rounded-3xl dark:bg-gray-900">edit</button>
                            </div>
                            <div>
                                <button className="btn ml-2 border-white w-[150px] rounded-3xl text-white dark:bg-gray-900">delete</button>
                            </div>
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h3 className='text-2xl '>Rifat-front-end-resume.pdf</h3>
                        <p >Google Docs</p>
                    </div>
                </div>
                <div className='flex mt-5'>
                    <div>
                        <img src="https://img.freepik.com/premium-psd/website-mockup_68185-1126.jpg?size=626&ext=jpg&uid=R83218281&ga=GA1.1.1908891225.1665030381&semt=ais" alt="Shoes" className="rounded-xl w-[700px] h-[250px]" />
                        <div className='flex mt-2'>
                            <div>
                                <button className="btn ml-2 border-white w-[150px] text-white rounded-3xl dark:bg-gray-900">edit</button>
                            </div>
                            <div>
                                <button className="btn ml-2 border-white w-[150px] rounded-3xl text-white dark:bg-gray-900">delete</button>
                            </div>
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h3 className='text-2xl'>MY-PORTFOLIOMY-PORTFOLIO</h3>
                        <p > storied-panda-805346.netlify.app</p>
                    </div>
                </div>
                <div className='flex mt-5'>
                    <div>
                        <img src="https://avatars.githubusercontent.com/u/53802153?v=4" alt="Shoes" className="rounded-xl w-[700px] h-[250px]" />
                        <div className='flex mt-2'>
                            <div>
                                <button className="btn ml-2 border-white w-[150px] text-white rounded-3xl dark:bg-gray-900">edit</button>
                            </div>
                            <div>
                                <button className="btn ml-2 border-white w-[150px] rounded-3xl text-white dark:bg-gray-900">delete</button>
                            </div>
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h3 className='text-2xl'> tom1-Overviewtanvirrifat1-Overview
                        </h3>
                        <p> GitHub</p>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default FeatureIn;