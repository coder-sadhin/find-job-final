import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ServerApi } from "../../../AllApi/MainApi";
import { AuthContext } from "../../../ContextApi/AuthProvider/AuthProvider";

const ReportRecruiterModal = ({ setisReported,setCloseModal}) => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const submitReport = (event) => {
    event.preventDefault();

    const form = event.target;
    const report = form.report.value;
    const textReport = form.textReport.value;
    const reporterName = user?.displayName;
    const repoerterEmail = user?.email;
    //   const jobName = job_details?.job?.job_title;
    //   const jobId = _id;
    const recruiter = "Ansu Hanna Biji";
    const reports = {
      // jobName,
      // jobId,
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
          toast(`${data?.type} the `);
          setisReported(data?.type);
          setCloseModal(false)

        } else {
          toast.error(`${data?.type}`);
          setCloseModal(false)
        }
      });
  };

  const reportItem = [
    { id: 1, name: "Fraud or scam" },
    { id: 1, name: "Fake Id" },
    { id: 1, name: "bad Behave in message" },
    { id: 1, name: "Spreading false or misleading information" },
  ];
  return (
    <div>
      <div className="bg-gray-900 text-gray-200 ">
        <input
          type="checkbox"
          id="report-modal"
          className="modal-toggle"
          value={"input."}
        />
        <div className="modal text-left">
          <div className="modal-bo bg-gray-900 text-gray-200  p-10 lg:w-[50%] sm:w-[70%]  mx-auto rounded-2xl opacity-[0.8]">
            <h1 className="lg:text-4xl sm:text-2xl font-bold">
              {/* jobname */}
            </h1>
            <p className="lg:text-xl sm:text-md mt-2 font-serif">JobType :</p>
            {/* form for report */}
            <form onSubmit={submitReport} action="report Job" className="mt-5">
              <h3 className="sm:text-xl lg:text-4xl my-2 font-semibold">
                About the Reports
              </h3>
              <select
                name="report"
                id=""
                className="w-full outline-none text-gray-800 p-2"
                required
              >
                {reportItem?.map((report) => {
                  return (
                    <option className=" text-xl " value={report?.name}>
                        <span className="mx-2">{">>"}</span>
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
                htmlFor="report-modal"
                type="submit"
                className="btn block btn-outline rounded-xl  text-error mt-3"
                value={"Report"}
              />
            </form>
            <div className="modal-action">
              <label
                htmlFor="report-modal"
                className="btn btn-outline rounded-2xl text-white"
              >
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportRecruiterModal;
