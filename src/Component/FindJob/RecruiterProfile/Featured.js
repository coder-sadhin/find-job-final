import React from 'react';
import { BiLink, BiPencil } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';
import { HiPlus } from 'react-icons/hi';
import { ImNewspaper } from 'react-icons/im';
import { MdOutlineArticle, MdOutlinePermMedia } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <div >
            <div className='flex justify-between mr-6'>
                <h1 className='text-3xl font-semibold my-4 ml-10'>Featured</h1>
                <div className='flex'>
                    <div className="dropdown dropdown-bottom dropdown-end ">
                        <label tabIndex={0} className="  text-4xl "><HiPlus /></label>
                        <ul tabIndex={0} className="dropdown-content menu  shadow rounded-box w-52 p-5 bg-base-content">
                            <div >
                                <div>
                                    <div className='flex  font-bold'>
                                        <p className='text-xl'><BsPencilSquare /></p>
                                        <p className="ml-3">Add a post</p>
                                    </div>
                                    <div className='flex my-4 font-bold'>
                                        <p className='text-xl'><ImNewspaper /></p>
                                        <p className="ml-3">Add a newsletter</p>
                                    </div>
                                    <div className='flex my-4 font-bold'>
                                        <p className='text-xl'><MdOutlineArticle /></p>
                                        <p className="ml-3">Add a article</p>
                                    </div>
                                    <div className='flex my-4 font-bold'>
                                        <p className='text-xl'><BiLink /></p>
                                        <p className="ml-3">Add a link</p>
                                    </div>
                                    <div className='flex my-4 font-bold'>
                                        <p className='text-xl'><MdOutlinePermMedia /></p>
                                        <p className="ml-3">Add a media</p>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <Link to='/feature'>
                        <p className='text-4xl ml-6'><BiPencil /></p>
                    </Link>

                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <div className="card w-full bg-base-content shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://media.licdn.com/dms/image/sync/C5627AQFCXdZpVV28aw/articleshare-shrink_480/0/1673340940751?e=1674460800&v=beta&t=sDDmUrHOhfdHULAyyVkIdadFdaGmEfwSR1075FiOgPw" alt="Shoes" className="rounded-xl h-[250px]" />
                    </figure>
                    <div className=" text-center">
                        <p className='my-2'> Tom-front-end-resume.pdf</p>
                        <p className='text-xs my-2'>Google Docs</p>
                    </div>
                </div>
                <div className="card w-full bg-base-content shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/premium-psd/website-mockup_68185-1126.jpg?size=626&ext=jpg&uid=R83218281&ga=GA1.1.1908891225.1665030381&semt=ais" alt="Shoes" className="rounded-xl h-[250px]" />
                    </figure>
                    <div className=" text-center">
                        <p className='my-2'>MY-PORTFOLIO</p>
                        <p className='text-xs my-2'>storied-panda-805346.netlify.app</p>
                    </div>
                </div>
                <div className="card w-full bg-base-content shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://avatars.githubusercontent.com/u/53802153?v=4" alt="Shoes" className="rounded-xl h-[250px]" />
                    </figure>
                    <div className=" text-center">
                        <p className='my-2'>tanvirrifat1 - Overview</p>
                        <p className='text-xs my-2'>Git-Hub</p>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Featured;