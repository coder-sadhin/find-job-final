import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCheck, FaLightbulb, FaRecordVinyl } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { MdWork } from 'react-icons/md';
import { BsFillCalculatorFill, BsFillSaveFill, BsLinkedin } from 'react-icons/bs';

const JobsDetails = () => {
    const data = useLoaderData();
    // static data for checking modal
    const modalData = {
      name: "Full Stack Developer",
      que1: "How many years of experience do you have on full stack?",
      que2: "Do you have any project on Full Stack?",
      que3: "Do you have experience on TypeScrpt and Nextjs?"
    }

    const {job_description,job_details,job_post_time}=data;


    return (
      <>
        <div className=' p-6'>
         <div>
         <div className="flex flex-col justify-center p-6 shadow-md w-full rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	      {/* <img src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&uid=R83218281&ga=GA1.1.1908891225.1665030381&semt=sph" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" /> */}
	       <div className="space-y-4 text-center divide-y divide-gray-700">
		     <div className='text-start mt-3'>
            <h1 className='text-3xl'>{job_details?.job?.job_title}</h1>
            <p className='text-xl'>JobType :  {job_details?.job?.jobType}</p>
            <p>IDEA Foundation Panchkula  Panchkula, Haryana, India On-site 1 month</p>
            <p>ago {job_post_time}</p>
            <div className='py-5'>
              <p className='flex'><MdWork className=' mr-2 text-xl '/>Full-time</p>
              <p className='flex'><BsFillCalculatorFill className=' mr-2 text-xl '/>11-50 employees</p>
           
            <div className="avatar flex mt-2">
             <div className="w-8 rounded">
                <img src="https://placeimg.com/192/192/people"alt='' />
             </div>
              <p className='ml-2 mt-1'>Shalini Malviya is hiring for this job</p>
            </div>
             <p className='flex mt-2'><FaLightbulb className=' mr-2 text-xl'/> See how you compare to 59 applicants. Try Premium for free</p>
             <p className='flex mt-2'><FaRecordVinyl className=' mr-2 text-xl'/> Actively recruiting</p>
           
            </div>
          <div className="rating py-2">
         <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
         <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
         <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
         <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
           </div>
         </div>
         <div className='flex gap-2 pt-2'>
            <button className='btn btn-outline bg-blue-800 rounded-2xl text-white'><BsLinkedin className='mr-2'/>Apply</button>
            
            <label htmlFor="my-modal-6" className="btn btn-outline bg-blue-800 rounded-2xl text-white">Easy Apply</label>
            <button className='btn btn-outline bg-blue-800 rounded-2xl text-white'><BsFillSaveFill className='mr-2 text-xl'/>Save</button>
            <button className='btn btn-outline bg-blue-800 rounded-2xl text-white'><CiCircleMore className='mr-2 text-xl'/>More</button>
         </div>
         <div className='text-start pt-4 bg-slate-600 rounded-xl p-6 text-white'>
          <h1 className='text-2xl mb-2'>Meet the hiring team</h1>
            <div className='flex justify-between'>
            <div className='flex '>
                <div className="avatar flex mt-2">
                  <div className="w-14 rounded">
                  <img src="https://placeimg.com/192/192/people" alt='' />
                </div>
              </div>
             <div className='ml-4'>
             <p>Ansu Hanna Biji </p>
              <p>Human Resources Executive at Internet Mango Solutions </p>
              <p>Job poster · LinkedIn member since 2018</p>
             </div>
             </div>
             <div>
              <button className='btn btn-outline btn-sm text-white mt-2 justify-end'>Msessage</button>
             </div>
            </div>
         </div>
         <div className='text-start pt-4 bg-slate-600 rounded-xl p-6 text-white'>
            <p>{job_description}</p>
            <div className="divider text-white"></div>
         </div>
         <div className='text-start pt-4 bg-slate-600 rounded-xl p-6 text-white'>
          <h1 className='text-2xl mb-2'>About the company </h1>
            <div className='flex justify-between'>
            <div className='flex '>
                <div className="avatar flex mt-2">
                  <div className="w-16 rounded">
                  <img src="https://img.freepik.com/premium-photo/composite-image-businessman-pointing-these-fingers-camera_1134-37846.jpg?size=626&ext=jpg&uid=R83218281&ga=GA1.1.1908891225.1665030381&semt=ais" alt='' />
                </div>
              </div>
             <div className='ml-4'>
             <p>OptimHire </p>
              <p>231,528 followers </p>
             </div>
             </div>
             <div>
            <Link className='text-blue-400 btn rounded-2xl mb-2 hover:text-purple-400' href=""><FaCheck className='mr-2 text-xl'/> Following</Link> 
             </div>
            </div>
           <p className='mt-2'>{job_details?.job?.job_title}  11-50 employees  43 on LinkedIn</p>
           <p className='mt-5'>At Linearloop we provide the best web & mobile app development service for small to large scale businesses. Our efficient development process helps you to only focus on results instead of process overhead.</p>
           </div>
	       </div>
         </div>
         </div>
        </div>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
    <div className="modal modal-bottom sm:modal-middle">
      <form className="modal-box">
        <h3 className="font-bold text-lg">{modalData.name}</h3>
        <div>
          <label htmlFor="que1">{modalData.que1}</label>
          <input type="text" className='block w-full border px-2'/>
        </div>
        <div className='mt-2'>
          <label htmlFor="que1">{modalData.que2}</label>
          <input type="text" className='block w-full border px-2'/>
        </div>
        <div className='mt-2'>
          <label htmlFor="que1" className='block'>{modalData.que3}</label>
          <input type="text" className='block w-full border px-2'/>
        </div>
        <div className="modal-action flex justify-between">
          <label htmlFor="my-modal-6" className="btn">Cancel</label>
          <label htmlFor="my-modal-6" className="btn btn-primary">Submit Application</label>
        </div>
      </form>
    </div>
      </>
    );
};

export default JobsDetails;