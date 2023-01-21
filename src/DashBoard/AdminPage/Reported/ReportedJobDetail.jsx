import React from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { ServerApi } from "../../../AllApi/MainApi";

const ReportedJobDetail = () => {
  const navigate = useNavigate();
  const { state: job } = useLocation();

  const deleteJob = (job) => {
    fetch(`${ServerApi}/deleteReports`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(job),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast(`Deleted ${job?.jobId}`);
        navigate(-1);
      });
  };

  return (
    <div className="my-10">
      <h1 className="text-[34px] font-bold mt-3 text-center">{job?.jobName}</h1>
      <div className=" max-w-[50%] mx-auto mt-3 bg-slate-100 shadow-xl px-4">
        <p className="bg-[#00ae87] text-5xl  text-center font-extrabold text-white py-12 rounded-md font-serif">
          Report
        </p>
        <div className="mt-3">
          <h1 className="text-2xl  font-semibold text-[#00ae87]">
            {" "}
            Job Name :::{" "}
          </h1>
          <span className="text-lg mb-3 text-slate-700 ">{job?.jobName}</span>
          <h1 className="text-xl mt-5  font-semibold text-[#00ae87]">
            {" "}
            Recruiter :::{" "}
            <span className="text-lg font-normal text-slate-700">
              {" "}
              @ {job?.recruiter}
            </span>
          </h1>

          <h1 className="text-xl mt-5  font-semibold mb-5 text-[#00ae87]">
            {" "}
            Report :::{" "}
            <span className="text-lg font-normal text-slate-700">
              {" "}
              {job?.report ? job?.report : "Most Advertisement"}
            </span>
          </h1>
          <label htmlFor="" className="text-xl font-semibold text-[#00ae87]">
            Take an Action
          </label>

          <p className="flex justify-around my-3">
            <button
              onClick={() => navigate(-1)}
              className="py-2 mt-2 px-3 font-semibold text-xl text-slate-50 rounded-xl shadow-xl hover:bg-slate-200 hover:text-[#00ae87] hover:shadow-2xl bg-[#00ae87]"
            >
              Ignore
            </button>

            <button
              onClick={() => deleteJob(job)}
              className="py-2 mt-2 px-3 font-semibold text-xl text-slate-50 rounded-xl shadow-xl hover:bg-slate-200 hover:text-[#00ae87] hover:shadow-2xl bg-error"
            >
              Delete
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportedJobDetail;
