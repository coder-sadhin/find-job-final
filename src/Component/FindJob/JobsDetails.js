import React, { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  FaCheck,
  FaExclamationCircle,
  FaLightbulb,
  FaRecordVinyl,
  FaCheckCircle,
} from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { MdWork } from "react-icons/md";
import {
  BsFillCalculatorFill,
  BsFillSaveFill,
  BsLinkedin,
} from "react-icons/bs";
import ReportJob from "./ReportJob/ReportJob";
import { AuthContext } from "../../ContextApi/AuthProvider/AuthProvider";
import { ServerApi } from "../../AllApi/MainApi";

import toast from "react-hot-toast";
import axios from "axios";


const JobsDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  // check reported @sarwar ///
  const [isreport, setisReported] = useState("notreported");
  const [modal, setModal] = useState(true);
  const [closeMOdal, setCloseModal] = useState(true);
  const [isApplied, setIsApplied] = useState(false);
  const { job_description, job_details, job_post_time } = data;


  // checking whether user applied or not
  // if (data?.candidates.length > 0){
  //   data?.candidates?.map((candidate) => {
  //     if (candidate?.email === currentUser?.email) {
  //       return setIsApplied(true)
  //     }
  //     return setIsApplied(false)
  //   });
  // } 



  const handleJobApply = (event) => {
    event.preventDefault();
    const form = event.target;
    const question1 = form.question1.value
    const question2 = form.question2.value
    const resume = form.resume.files
    const resumeLink = form.resumelink.value

    const application = {
      candidate: user.displayName,
      candidateId: user._id,
      candidateEmail: user.email,
      photoURL: user.photoURL,
      job: data,
      jobId: data._id,
      resumeLink: resumeLink,
      resume: resume,
      answers: [question1, question2]
    };
    // save candidate application to database
    fetch(`${ServerApi}/applyJob`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(application),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Application Submitted")
      })
      .catch((err) => console.log(err));

    setModal(false);
  };

  // const handleUpdateApplyQuantity = (name, email, id) => {
    // const candidate = {
    //   name: name,
    //   email: email,
    //   candidateId: id

    // }
    // fetch(`${ServerApi}/jobs/apply/${data._id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(candidate),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  // };

  useEffect(() => {
    fetch(
      `${ServerApi}/report/isreport?email=${user?.email}&jobid=${data?._id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setisReported("reported");
      });
  }, []);

  return (
    <div className=" p-6 bg-base-content ">
      <div className="text-white">
        <div className="flex flex-col justify-center p-6 shadow-md w-full rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
          <div className="space-y-4 text-center divide-y divide-gray-700">
            <div className="text-start mt-3">
              <h1 className="text-3xl">{job_details?.job?.job_title}</h1>
              <p className="text-xl">JobType : {job_details?.job?.jobType}</p>
              <p>
                IDEA Foundation Panchkula Panchkula, Haryana, India On-site 1
                month
              </p>
              <p>ago {job_post_time}</p>
              <div className="py-5">
                <p className="flex">
                  <MdWork className=" mr-2 text-xl " />
                  Full-time
                </p>
                <p className="flex">
                  <BsFillCalculatorFill className=" mr-2 text-xl " />
                  11-50 employees
                </p>

                <div className="avatar flex mt-2">
                  <div className="w-8 rounded">
                    <img src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?size=626&ext=jpg&uid=R83218281&ga=GA1.1.1908891225.1665030381&semt=sph" alt='' />
                  </div>
                  <p className="ml-2 mt-1">
                    Shalini Malviya is hiring for this job
                  </p>
                </div>
                <p className="flex mt-2">
                  <FaLightbulb className=" mr-2 text-xl" /> See how you compare
                  to 59 applicants. Try Premium for free
                </p>
                <p className="flex mt-2">
                  <FaRecordVinyl className=" mr-2 text-xl" /> Actively
                  recruiting
                </p>
              </div>
              <div className="rating py-2">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  checked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              {isApplied && isApplied[0] === true ? (
                <h2 className="text-white text-2xl flex items-center gap-5">
                  <FaCheckCircle className="text-green-400 rounded-full text-2xl" />
                  <span>
                    Already applied and your application submitted to recruiter
                  </span>
                </h2>
              ) : (
                <>
                  <button className="btn btn-outline hover:bg-blue-600 rounded-2xl text-white">
                    <BsLinkedin className="mr-2" />
                    Apply
                  </button>
                  <label
                    htmlFor="easy-apply"
                    className="btn btn-outline hover:bg-blue-600 rounded-2xl text-white"
                  >
                    Easy Apply
                  </label>
                  <button className="btn btn-outline hover:bg-blue-600 rounded-2xl text-white">
                    <BsFillSaveFill className="mr-2 text-xl" />
                    Save
                  </button>
                  <button className="btn btn-outline hover:bg-blue-600 rounded-2xl text-white">
                    <CiCircleMore className="mr-2 text-xl" />
                    More
                  </button>
                </>
              )}
              {/* Report the job */}
              {isreport === "reported" ? (
                <label className="btn btn-error rounded-2xl btn-sm   text-white">
                  <FaExclamationCircle className="mr-2 text-xl" />
                  Reported
                </label>
              ) : (
                <label
                  htmlFor={"reportmodal"}
                  className="btn btn-outline hover:bg-[#22c55e] rounded-2xl  text-error"
                >
                  <FaExclamationCircle className="mr-2 text-xl" />
                  Report job
                </label>
              )}
            </div>
            {/* modal  */}
            {closeMOdal && (
              <ReportJob
                data={data}
                setCloseModal={setCloseModal}
                setisReported={setisReported}
              ></ReportJob>
            )}
            <div className="text-start pt-4 bg-slate-600 rounded-xl p-6 text-white">
              <h1 className="text-2xl mb-2">Meet the hiring team</h1>
              <div className="flex justify-between">
                <div className="flex ">
                  <div className="avatar flex mt-2">
                    <div className="w-14 rounded">
                      <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p>Ansu Hanna Biji </p>
                    <p>Human Resources Executive at Internet Mango Solutions</p>
                    <p>Job poster · LinkedIn member since 2018</p>
                  </div>
                </div>

                <Link to="/allfrofile">
                  <div>
                    <button className="btn btn-outline btn-sm text-white mt-2 justify-end">
                      Msessage
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="text-start pt-4 bg-slate-600 rounded-xl p-6 text-white">
              <p>{job_description}</p>
              <div className="divider text-white"></div>
            </div>
            <div className="text-start pt-4 bg-slate-600 rounded-xl p-6 text-white">
              <h1 className="text-2xl mb-2">About the company </h1>
              <div className="flex justify-between">
                <div className="flex ">
                  <div className="avatar flex mt-2">
                    <div className="w-16 rounded">
                      <img
                        src="https://img.freepik.com/premium-photo/composite-image-businessman-pointing-these-fingers-camera_1134-37846.jpg?size=626&ext=jpg&uid=R83218281&ga=GA1.1.1908891225.1665030381&semt=ais"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p>OptimHire </p>
                    <p>231,528 followers </p>
                  </div>
                </div>
                <div>
                  <Link
                    className="text-blue-400 btn rounded-2xl mb-2 hover:text-purple-400"
                    href=""
                  >
                    <FaCheck className="mr-2 text-xl" /> Following
                  </Link>
                </div>
              </div>
              <p className="mt-2">
                {job_details?.job?.job_title} 11-50 employees 43 on LinkedIn
              </p>
              <p className="mt-5">
                At Linearloop we provide the best web & mobile app development
                service for small to large scale businesses. Our efficient
                development process helps you to only focus on results instead
                of process overhead.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* apply modal  */}
      <input type="checkbox" id="easy-apply" className="modal-toggle" />
      {modal && (
        <div className="modal modal-bottom sm:modal-middle">
          <form onSubmit={handleJobApply} className="modal-box">
            <h3 className="font-bold text-lg">{job_details.job.job_title}</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  How many years of experience do you have on Full Stack
                  Development?
                </span>
              </label>
              <input type="text" name="question1" className="border" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Are you experience on Backend?
                </span>
              </label>
              <input type="text" name="question2" className="border" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload Resume</span>
              </label>
              <input type="file" name="resume" className="border" />
              <p className="mt-1">Or</p>
              <label className="label">
                <span className="label-text">Upload google drive link.</span>
              </label>
              <input type="text" name="resumelink" className="border" />
            </div>
            <div className="modal-action flex justify-between">
              <label htmlFor="easy-apply" className="btn">
                Cancel
              </label>
              <button type="submit" className="btn btn-primary">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default JobsDetails;
