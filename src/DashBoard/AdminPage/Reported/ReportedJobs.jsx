import React from "react";
import PrimaryButton from "../../../Component/Button/PrimaryButton";
import NoData from "../../NoData";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../Component/Spinner/Spinner";
import { useTitle } from "react-use";
import { ServerApi } from "../../../AllApi/MainApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ReportedJobs = () => {
  const navigate = useNavigate();

  useTitle("Admin Dashboard - Reported Candidate");
  const {
    data: reportedJobs = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reportedJobs"],
    queryFn: async () => {
      try {
        const res = await fetch(`${ServerApi}/reportedJob`);
        const data = await res.json();

        return data;
      } catch (err) {}
    },
  });

  console.log(reportedJobs);

  const handleDetails = (job) => {
    navigate(`/dashboard/reportedJobsDetails/${job._id}`, { state: job });
  };

  if (isLoading) {
    <Spinner />;
  }
  console.log(reportedJobs);
  return (
    <div className="w-11/12 mx-auto">
      {reportedJobs?.length > 0 ? (
        <>
          <div className="my-5">
            <h3 className="text-4xl font-bold text-center">Reported Jobs</h3>
            <p className="text-xl font-bold text-center">
              Total: {reportedJobs?.length}
            </p>
          </div>
          <div>
            {reportedJobs.map((job) => (
              <div className="grid grid-cols-1" key={job._id}>
                <div className="w-full p-5 rounded-md mb-4 bg-blue-200 grid grid-cols-2">
                  <div>
                    <h4 className="text-xl font-bold">
                      Job Title:
                      <span className="text-green-700">{job?.jobName}</span>
                    </h4>
                    <h4 className="text-xl">
                      Recruiter Name:{" "}
                      <span className="text-green-700 font-bold">
                        {job?.recruiter}
                      </span>
                    </h4>
                    <p className="text-lg font-semibold">
                      Job Id :{" "}
                      <span className="text-red-800">{job?.jobId}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">
                      Reported By :
                      <span className="text-yellow-500">
                        {job?.reporterName}
                      </span>
                    </p>
                    <p className="text-lg font-semibold">
                      Category :{" "}
                      <span className="text-red-800">
                        {job?.report ? job?.report : "Most Advertisement"}
                      </span>
                    </p>

                    <div>
                      <button
                        onClick={() => handleDetails(job)}
                        className="py-2 mt-2 px-3 font-semibold text-xl text-slate-50 rounded-xl shadow-xl hover:bg-slate-200 hover:text-[#00ae87] hover:shadow-2xl bg-[#00ae87]"
                      >
                        Job Action
                      </button>
                      {/* <select className="select bg-red-400 text-white select-bordered" size={10}>
                      <option disabled selected>
                        Action
                      </option>
                      <option>Sand Warning</option>
                      <option>Suspension</option>
                      <option>Restricted</option>
                      <option>Remove Jobs</option>
                    </select> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="my-5">
          <NoData>job NOT FOUND</NoData>
        </div>
      )}
    </div>
  );
};

export default ReportedJobs;
