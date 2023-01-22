import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { ServerApi } from "../../../AllApi/MainApi";
import { AuthContext } from "../../../ContextApi/AuthProvider/AuthProvider";

const ReportJob = ({ data, setCloseModal }) => {
  const { job_description, job_details, job_post_time, job_visible, pay, _id } =
    data;

  const { user } = useContext(AuthContext);

  const submitReport = (event) => {
    event.preventDefault();
    setCloseModal(false);
    const form = event.target;
    const report = form.report.value;
    const textReport = form.textReport.value;
    const reporterName = user?.displayName;
    const repoerterEmail = user?.email;
    const jobName = job_details?.job?.job_title;
    const jobId = _id;
    const recruiter = "Ansu Hanna Biji";
    const reports = {
      jobName,
      jobId,
      recruiter,
      reporterName,
      repoerterEmail,
      report,
      textReport,
    };
    console.log(reports);
    fetch(`${ServerApi}/report/addReport`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reports),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.type === "reported") {
          toast(`${data?.type} the ${jobName}`);
        } else {
          toast.error(`${data?.type} ${jobName}`);
        }
      });
  };

  const reportItem = [
    { id: 1, name: "Just an Advertisement" },
    { id: 1, name: "Not responsonse continue " },
    { id: 1, name: "Impossible Requirement" },
    { id: 1, name: "Look like an span" },
  ];
  return (
    <div className="bg-gray-900 text-gray-200 ">
      <input
        type="checkbox"
        id={_id}
        className="modal-toggle"
        value={"input."}
      />
      <div className="modal text-left">
        <div className="modal-bo bg-gray-900 text-gray-200  p-10 lg:w-[50%] sm:w-[70%]  mx-auto rounded-2xl opacity-[0.8]">
          <h1 className="lg:text-4xl sm:text-2xl font-bold">
            {job_details?.job?.job_title}
          </h1>
          <p className="lg:text-xl sm:text-md mt-2 font-serif">
            JobType : {job_details?.job?.jobType}
          </p>
          {/* form for report */}
          <form onSubmit={submitReport} action="report Job" className="mt-5">
            <h3 className="sm:text-xl lg:text-4xl my-2 font-semibold">
              {" "}
              About the Reports
            </h3>
            <select
              name="report"
              id=""
              className="w-full outline-none text-gray-800 p-2"
              size="3"
            >
              {reportItem?.map((report) => {
                return (
                  <option className=" text-xl " value={report?.name}>
                    <span className="text-sm ml-3 mb-[4px]">o</span>{" "}
                    {report.name}
                  </option>
                );
              })}
            </select>

            <label htmlFor="" className="text-3xl font-semibold w-full mt-3">
              Additional Information
            </label>

            <textarea
              type="text"
              className="w-full py-5 rounded-xl pl-3 text-xl outline-none text-slate-900 mt-2"
              name="textReport"
              id=""
              placeholder="Your Report"
              required
            />
            <input
              htmlFor={data?.id}
              type="submit"
              className="btn block btn-outline rounded-xl  text-error mt-3"
              value={"Report"}
            />
          </form>
          <div className="modal-action">
            <label
              htmlFor={data?._id}
              className="btn btn-outline rounded-2xl text-white"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportJob;
