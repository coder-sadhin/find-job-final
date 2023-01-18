import React from 'react';
import { FaPen } from 'react-icons/fa';
import { IoIosAdd } from "react-icons/io";

const Skill = () => {
    return (
        <div className='p-8 mt-3 bg-base-content'>
            <div className='flex justify-between'>
                <h1 className='text-3xl '>Skills</h1>
                <div className='flex'>
                    {/* <button className='btn ml-2 mt-2 border-blue-400 rounded-2xl text-white btn-outline'>demonstrate skill</button> */}
                    <label htmlFor="skillModal" className='text-4xl ml-4 mt-2'><IoIosAdd /></label>
                    <label className='text-2xl ml-4 mt-2'><FaPen /></label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="skillModal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl bg-base-content">
                            <h3 className="font-bold text-lg">Add Skill</h3>
                            <div className="modal-action">
                                <label htmlFor="skillModal" className="btn btn-sm btn-circle absolute right-2 mt-3 top-2 mr-2">✕</label>
                            </div>
                            <div>
                                <p className='ml-2 mt-2 mb-2'>Skills*</p>
                                <input type="text" placeholder="Type here" className="input input-bordered bg-black text-white w-full " />
                            </div>
                            <div className='mt-2 bg-base-content'>
                                <div>
                                    <button className="btn ml-2 mt-2 border-white w-[150px] rounded-3xl text-white dark:bg-gray-900">Html</button>
                                    <button className="btn ml-2 mt-2 border-white w-[150px] rounded-3xl text-white dark:bg-gray-900">css</button>
                                    <button className="btn ml-2 mt-2 border-white w-[150px] rounded-3xl text-white dark:bg-gray-900">html5</button>
                                    <button className="btn ml-2 mt-2 border-white w-[150px] rounded-3xl text-white dark:bg-gray-900">css3</button>
                                    <button className="btn ml-2 mt-2 border-white w-[150px] rounded-3xl text-white dark:bg-gray-900">bootstrap</button>
                                    <button className="btn ml-2 mt-2 border-white w-[150px] rounded-3xl text-white dark:bg-gray-900">tailwind</button>
                                    <button className="btn ml-2 mt-2 border-white w-[150px] rounded-3xl text-white dark:bg-gray-900">javascript</button>
                                    <button className="btn ml-2 mt-2 border-white w-[150px] rounded-3xl text-white dark:bg-gray-900">typescript</button>
                                    <button className="btn ml-2 mt-2 border-white w-[150px] rounded-3xl text-white dark:bg-gray-900">nodejs</button>
                                    <button className="btn ml-2 mt-2 border-white w-[150px] rounded-3xl text-white dark:bg-gray-900">Express</button>
                                    <button className="btn ml-2 mt-2 border-white w-[150px] rounded-3xl text-white dark:bg-gray-900">express</button>
                                    <button className="btn ml-2 mt-2 border-white w-[150px] rounded-3xl text-white dark:bg-gray-900">Mongodb</button>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div>
                <div>
                    <p className='text-xl mt-3'>Css</p>
                    <p className='my-3'>NextJS with MySQL at Ntech Global Solutions</p>
                    <button className='btn  border-blue-400 rounded-2xl text-white btn-outline'>Endorse</button>
                </div>
                <div>
                    <p className='text-xl mt-3'>JavaScript</p>
                    <p className='my-3'> 2 experiences across LetsGrowMore and 1 other company</p>
                    <button className='btn  border-blue-400 rounded-2xl text-white btn-outline'>Endorse</button>
                </div>
                <div>
                    <p className='text-xl mt-3'>ReactJS</p>
                    <p className='my-3'>Full stack web developer at Hydrogenworlds</p>
                    <button className='btn  border-blue-400 rounded-2xl text-white btn-outline'>Endorse</button>
                </div>
            </div>
        </div>
    );
};

export default Skill;