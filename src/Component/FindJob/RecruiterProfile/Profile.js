import { BiCrop, BiPencil } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { TbMinus } from "react-icons/tb";
import { CgFilters } from "react-icons/cg";
import { HiAdjustments } from "react-icons/hi";
import React, { Component, useState } from "react";
import { TagsInput } from 'react-tag-input-component';
import { useContext } from 'react';
import { AuthContext } from '../../../ContextApi/AuthProvider/AuthProvider';
import { ServerApi } from '../../../AllApi/MainApi';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

<<<<<<< HEAD
import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { FaExclamationCircle } from "react-icons/fa";
import ReportJob from "../ReportJob/ReportJob";
import { useState } from "react";
import { useEffect } from "react";
import { ServerApi } from "../../../AllApi/MainApi";
import ReportRecruiterModal from "../../../DashBoard/AdminPage/Reported/ReportRecruiterModal";

const Profile = () => {
  const [isreport, setisReported] = useState("notreported");

  const [closeMOdal, setCloseModal] = useState(true);

  return (
    <div>
      <div className="flex w-full flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex mb-3 justify-end">
          <label htmlFor="my-modal-5" className="text-4xl ml-4 mt-2">
            <BiPencil />
          </label>

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
                        <img
                          className=" h-[350px] rounded-xl"
                          src="https://media.licdn.com/dms/image/D5616AQFjgp01aXzyqg/profile-displaybackgroundimage-shrink_350_1400/0/1673033329766?e=1679529600&v=beta&t=KG2YJAV1QYBS-8jBjaFkWRo3S6jn2YT7HRRnZIYPevM"
                          alt=""
                        />
                      </TransformComponent>
                      <div className="tools flex justify-around">
                        {/* <button onClick={() => zoomOut()}>-</button> */}
                        <button onClick={() => resetTransform()}>
                          <TbMinus className="text-3xl" />
                        </button>
                        <button onClick={() => zoomIn()}>
                          <HiPlus className="text-3xl" />
                        </button>
                      </div>
                    </React.Fragment>
                  )}
                </TransformWrapper>
              </div>

              <div className="flex justify-end my-6">
                <p className="text-3xl mr-2">
                  <BsArrowRepeat />
                </p>
                <p className="text-3xl ">
                  <BsArrowRepeat />
                </p>
              </div>

              <div className="flex justify-evenly">
                <div>
                  <p className="text-xl">Zoom</p>
                  <div className="flex">
                    <p className="text-3xl">
                      <TbMinus />
                    </p>
                    <fieldset className="space-y-1 ml-2 mt-1 sm:w-60 dark:text-gray-100">
                      <input
                        type="range"
                        className="w-full accent-violet-400"
                        min="0"
                        max="100"
                      />
                    </fieldset>
                    <p className="text-3xl">
                      <HiPlus />
                    </p>
                  </div>
                  <div className="flex">
                    <div className="mr-6">
                      <p>Crop</p>
                      <p className="text-xl">
                        <BiCrop />
                      </p>
                    </div>
                    <div className="mr-6">
                      <p>Filter</p>
                      <p className="text-xl">
                        <CgFilters />
                      </p>
=======


const Profile = ({ useData }) => {
    const [selected, setSelected] = useState([]);
    const [users, setUsers] = useState({})
    const { job_category, name, profile_image, cover_image, followers, connections, linkedin_profile, talk_about, address } = useData

    const { user } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const Headline = form.Headline.value;
        // const skills = form.skills.value
        const Country = form.Country.value
        const City = form.City.value;
        const link = form.link.value

        const allInfo = {
            name,
            Headline,
            skills: selected,
            Country,
            City,
            link,
            email: user?.email
        }

        fetch(`${ServerApi}/addProfile`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    form.reset()
                    toast.success('Confirmed')
                }
            })

    }

    useEffect(() => {
        fetch(`${ServerApi}/profileData/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [user?.email])

    return (
        <div>
            <div className="flex w-full flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                <div className='flex mb-3 justify-end'>

                    <label htmlFor="modalWithCover" className='text-4xl ml-4 mt-2'><BiPencil /></label>

                    <input type="checkbox" id="modalWithCover" className="modal-toggle" />
                    <div className="modal ">
                        <div className="modal-box w-11/12 max-w-5xl dark:bg-gray-900 dark:text-gray-100">
                            <h3 className="font-bold text-lg">Background Color</h3>
                            <div className="divider"></div>
                            <img className=' h-[600px] rounded-xl' src={cover_image} alt="" />
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
                                    <input type="file" className='btn h-[15px] -mb-5 bg-blue-400 rounded-2xl hover:text-white text-black' />
                                    <button className="btn ml-2 border-blue-400 rounded-2xl text-white btn-outline">Apply</button>
                                </div>
                            </div>

                            <div className="modal-action">
                                <label htmlFor="modalWithCover" className="btn btn-sm btn-circle absolute right-2 mt-3 top-2">✕</label>
                            </div>
                        </div>
                    </div>
                </div>
                <img className=' h-[350px] rounded-xl' src={cover_image} alt="" />
                <div className='-mt-10'>
                    <label htmlFor="changeProfile"> <img src={profile_image} alt="" className="w-36 h-36  rounded-full dark:bg-gray-500 aspect-square" /></label>

                    {/* change profile */}
                    <input type="checkbox" id="changeProfile" className="modal-toggle" />
                    <div className="modal ">
                        <div className="modal-box relative bg-base-content text-white">
                            <label htmlFor="changeProfile" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <div>
                                <div className="avatar flex justify-center">
                                    <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" alt='' />
                                    </div>
                                </div>
                                <div className='flex justify-between my-4'>
                                    <button className='btn ml-2 border-blue-400 rounded-2xl text-white btn-outline'>Delete</button>
                                    {/* <button type='file' className='btn ml-2 border-blue-400 rounded-2xl text-white btn-outline'>add photo</button> */}
                                    <input type="file" className='btn ml-2 border-blue-400 rounded-2xl text-white btn-outline' name='add photo' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="space-y-4  divide-y divide-gray-700">
                    <div>
                        <div className="my-2 space-y-1">
                            <div className='flex justify-between'>
                                <h2 className="text-3xl font-semibold">{users.name}</h2>
                                <label htmlFor="modalWithProInfo" className='text-3xl text-end'><BiPencil /></label>
                                {/* profile info */}
                            </div>

                            <form onSubmit={handleSubmit}>
                                <input type="checkbox" id="modalWithProInfo" className="modal-toggle" />
                                <div className="modal ">
                                    <div className="modal-box w-11/12 max-w-5xl bg-base-content text-white">
                                        <h3 className="font-bold text-lg">Edit intro</h3>
                                        <div className='my-4'>

                                            <div>
                                                <label for="name" className="block mb-1 ml-1">Name</label>
                                                <input name="name" type="text" placeholder="Your name" required="" className="w-full p-2 rounded  focus:outline-none border border-white dark:bg-gray-800" />
                                            </div>
                                            <div>
                                                <label for="name" className="block mb-1 ml-1">Headline</label>
                                                <input name="Headline" type="text" placeholder="YourHeadline " required="" className="w-full p-2 rounded focus:outline-none border border-white dark:bg-gray-800" />
                                            </div>
                                            <p className='text-xl my-4'>skill</p>
                                            <div className="text-black w-full md:w-6/12 lg:w-6/12">
                                                <label for="name" className="block text-white mb-1 ml-1">Require skill</label>

                                                <TagsInput
                                                    className=' w-full p-2 rounded  focus:outline-none border dark:bg-gray-800'
                                                    value={selected}
                                                    onChange={setSelected}
                                                    name="skills"
                                                    placeHolder="Inter Required Skills"
                                                />

                                            </div>

                                            <p className='text-xl my-4'>Location</p>
                                            <div>
                                                <label for="name" className="block mb-1 ml-1">Country</label>
                                                <input name="Country" type="text" placeholder="Country " required="" className="w-full p-2 rounded focus:outline-none border border-white dark:bg-gray-800" />
                                            </div>
                                            <div>
                                                <label for="name" className="block mb-1 ml-1">City</label>
                                                <input name="City" type="text" placeholder="City " required="" className="w-full p-2  rounded focus:outline-none border border-white dark:bg-gray-800" />
                                            </div>
                                            <p className='text-xl my-4'>Website</p>
                                            <div>
                                                <label for="name" className="block mb-1 ml-1">Link</label>
                                                <input name="link" type="text" placeholder="link " required="" className="w-full p-2 rounded focus:outline-none border border-white dark:bg-gray-800" />
                                            </div>
                                        </div>
                                        <div className="modal-action">
                                            <label htmlFor="modalWithProInfo" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        </div>
                                        <div className='flex justify-end'>
                                            <input type='submit' value='save' className='btn rounded-2xl bg-blue-400 text-white outline' />
                                        </div>
                                    </div>
                                </div>
                            </form>


                            <p className="text-xl">{users?.Headline}</p>
                            <p>Talks about {users?.skills?.map(skill => <span className='mx-1'>{skill}</span>)}</p>
                            <p>{users?.City} <span className='text-blue-400'> Contact info</span></p>
                            <a href={users?.link} target='_blank' className='text-blue-400'>{linkedin_profile}</a>

                            <p className='text-blue-400'>followers {followers} <span>connections {connections}</span> </p>
                        </div>

>>>>>>> 3c7d26379a45a19a91f526acb8cea0632aeea3da
                    </div>
                    <div className="mr-6">
                      <p>Adjust</p>
                      <p className="text-xl">
                        <HiAdjustments />
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="text-xl"> Straighten</p>
                    <div className="flex">
                      <p className="text-3xl">
                        <TbMinus />
                      </p>
                      <fieldset className="space-y-1 ml-2 mt-1 sm:w-60 dark:text-gray-100">
                        <input
                          type="range"
                          className="w-full accent-violet-400"
                          min="1"
                          max="5"
                        />
                      </fieldset>
                      <p className="text-3xl">
                        <HiPlus />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-2xl mt-2">Delete Photo</h2>
                </div>
                <div>
                  <button className="btn  bg-blue-400 rounded-2xl hover:text-white text-black">
                    Change Photo
                  </button>
                  <button className="btn ml-2 border-blue-400 rounded-2xl text-white btn-outline">
                    Apply
                  </button>
                </div>
              </div>

              <div className="modal-action">
                <label
                  htmlFor="my-modal-5"
                  className="btn btn-sm btn-circle absolute right-2 mt-3 top-2"
                >
                  ✕
                </label>
              </div>
            </div>
          </div>
        </div>
        <img
          className=" h-[350px] rounded-xl"
          src="https://media.licdn.com/dms/image/D5616AQFjgp01aXzyqg/profile-displaybackgroundimage-shrink_350_1400/0/1673033329766?e=1679529600&v=beta&t=KG2YJAV1QYBS-8jBjaFkWRo3S6jn2YT7HRRnZIYPevM"
          alt=""
        />
        <div className="-mt-10">
          <img
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=1380&t=st=1673855900~exp=1673856500~hmac=4409761ee3d146bbe92f687597b186d3db168396d25824412a999d39e2f52e62"
            alt=""
            className="w-36 h-36  rounded-full dark:bg-gray-500 aspect-square"
          />
        </div>
        <div className="space-y-4  divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-3xl font-semibold">Tom Crus</h2>
            <p className="text-xl">Front End Developer</p>
            <p>
              Talks about #react, #nodejs, #firebase, #javascript, and
              #tailwindcss
            </p>
            <p>
              Manikganj Sadar Upazila, Dhaka, Bangladesh
              <span className="text-blue-400"> Contact info</span>
            </p>
            <p className="text-blue-400">
              https://storied-panda-805346.netlify.app/
            </p>
            <p className="text-blue-400">
              243 followers <span>243 connections</span>
            </p>
          </div>
          <div className="mt-3">
            <button className="btn  bg-blue-400 rounded-2xl hover:text-white text-black">
              open to
            </button>
            <button className="btn ml-2 border-blue-400 rounded-2xl text-white btn-outline">
              add profile section
            </button>
            <button className="btn ml-2 text-white dark:bg-gray-900">
              more
            </button>
            {/* Report the job */}

            {isreport === "reported" ? (
              <label className="btn btn-error rounded-2xl btn-sm   text-white">
         <FaExclamationCircle className="mr-2" />
                Reported
              </label>
            ) : (
              <label
                htmlFor={"report-modal"}
                className="btn ml-2 border-red-400 rounded-2xl text-white btn-outline"
              >
                <FaExclamationCircle className="mr-2" />
                Report Recruiter
              </label>
            )}
            {/* modal  */}
            {closeMOdal && (
              <ReportRecruiterModal
                setisReported={setisReported}
                setCloseModal={setCloseModal}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
