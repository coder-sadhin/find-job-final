import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import "tw-elements";
import { ServerApi } from "../../../AllApi/MainApi";

const RecruiterJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${ServerApi}/jobs?jobstype=all`)
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.log(err));
  }, []);

  const handleJobDelete = (id) => {
    fetch(`${ServerApi}/jobs/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = jobs.filter((job) => job._id !== id)
          setJobs(remaining)
          toast.success("Your job deleted")
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Applicants</th>
            <th>Resumes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs &&
            jobs.map((job, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{job?.job_details?.job?.job_title}</td>
                <td>{job?.candidates?.length ? job?.candidates?.length : 0}</td>
                <td>
                  <button className="btn btn-sm btn-outline">
                    <Link to={`/dashboard/myJobs/details/${job._id}`}>
                      See All
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleJobDelete(job._id)}
                    className="btn btn-sm bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecruiterJobs;
