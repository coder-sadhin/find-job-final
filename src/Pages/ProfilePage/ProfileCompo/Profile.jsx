import { BiCrop, BiPencil } from 'react-icons/bi';
import { BsArrowRepeat } from 'react-icons/bs';
import { HiPlus } from 'react-icons/hi';
import { TbMinus } from "react-icons/tb";
import { CgFilters } from "react-icons/cg";
import { HiAdjustments } from "react-icons/hi";


import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ProfileM = () => {
    return (
        <div>
            <div className="flex w-full flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                <div className='flex mb-3 justify-end'>

                    <label htmlFor="my-modal-5" className='text-4xl ml-4 mt-2'><BiPencil /></label>

                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal ">
                        <div className="modal-box w-11/12 max-w-5xl dark:bg-gray-900 dark:text-gray-100">
                            <h3 className="font-bold text-lg">Background Color</h3>
                            <div className="divider"></div>
                            <div>
                                <TransformWrapper
                                    initialScale={1}
                                    initialPositionX={200}
                                    initialPositionY={100}
                                >
                                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                        <React.Fragment>
                                            <TransformComponent>
                                                <img className=' h-[350px] rounded-xl' src="https://media.licdn.com/dms/image/D5616AQFjgp01aXzyqg/profile-displaybackgroundimage-shrink_350_1400/0/1673033329766?e=1679529600&v=beta&t=KG2YJAV1QYBS-8jBjaFkWRo3S6jn2YT7HRRnZIYPevM" alt="" />
                                            </TransformComponent>
                                            <div className="tools flex justify-around">
                                                {/* <button onClick={() => zoomOut()}>-</button> */}
                                                <button onClick={() => resetTransform()}><TbMinus className='text-3xl' /></button>
                                                <button onClick={() => zoomIn()}><HiPlus className='text-3xl' /></button>
                                            </div>
                                        </React.Fragment>
                                    )}
                                </TransformWrapper>
                            </div>

                            <div className='flex justify-end my-6'>
                                <p className='text-3xl mr-2'><BsArrowRepeat /></p>
                                <p className='text-3xl '><BsArrowRepeat /></p>
                            </div>

                            <div className='flex justify-evenly'>
                                <div>
                                    <p className='text-xl'>Zoom</p>
                                    <div className='flex'>
                                        <p className='text-3xl'><TbMinus /></p>
                                        <fieldset className="space-y-1 ml-2 mt-1 sm:w-60 dark:text-gray-100">
                                            <input type="range" className="w-full accent-violet-400" min="0" max="100" />
                                        </fieldset>
                                        <p className='text-3xl'><HiPlus /></p>
                                    </div>
                                    <div className='flex'>
                                        <div className='mr-6'>
                                            <p>Crop</p>
                                            <p className='text-xl'><BiCrop /></p>
                                        </div>
                                        <div className='mr-6'>
                                            <p>Filter</p>
                                            <p className='text-xl'><CgFilters /></p>
                                        </div>
                                        <div className='mr-6'>
                                            <p>Adjust</p>
                                            <p className='text-xl'><HiAdjustments /></p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className='text-xl'> Straighten</p>
                                        <div className='flex'>
                                            <p className='text-3xl'><TbMinus /></p>
                                            <fieldset className="space-y-1 ml-2 mt-1 sm:w-60 dark:text-gray-100">
                                                <input type="range" className="w-full accent-violet-400" min="1" max="5" />
                                            </fieldset>
                                            <p className='text-3xl'><HiPlus /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className='font-bold text-2xl mt-2'>Delete Photo</h2>
                                </div>
                                <div>
                                    <button className="btn  bg-blue-400 rounded-2xl hover:text-white text-black">Change Photo </button>
                                    <button className="btn ml-2 border-blue-400 rounded-2xl text-white btn-outline">Apply</button>
                                </div>
                            </div>

                            <div className="modal-action">
                                <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 mt-3 top-2">✕</label>
                            </div>
                        </div>
                    </div>


                </div>
                <img className=' h-[350px] rounded-xl' src="https://media.licdn.com/dms/image/D5616AQFjgp01aXzyqg/profile-displaybackgroundimage-shrink_350_1400/0/1673033329766?e=1679529600&v=beta&t=KG2YJAV1QYBS-8jBjaFkWRo3S6jn2YT7HRRnZIYPevM" alt="" />
                <div className='-mt-10'>
                    <img src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=1380&t=st=1673855900~exp=1673856500~hmac=4409761ee3d146bbe92f687597b186d3db168396d25824412a999d39e2f52e62" alt="" className="w-36 h-36  rounded-full dark:bg-gray-500 aspect-square" />
                </div>
                <div className="space-y-4  divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-3xl font-semibold">Tom Crus</h2>
                        <p className="text-xl">Front End Developer</p>
                        <p>Talks about #react, #nodejs, #firebase, #javascript, and #tailwindcss</p>
                        <p>Manikganj Sadar Upazila, Dhaka, Bangladesh <span className='text-blue-400'> Contact info</span></p>
                        <p className='text-blue-400'>https://storied-panda-805346.netlify.app/</p>
                        <p className='text-blue-400'>243 followers <span>243 connections</span> </p>
                    </div>
                    <div className='mt-3'>
                        <button className="btn  bg-blue-400 rounded-2xl hover:text-white text-black">open to</button>
                        <button className="btn ml-2 border-blue-400 rounded-2xl text-white btn-outline">add profile section</button>
                        <button className="btn ml-2 text-white dark:bg-gray-900">more</button>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProfileM;