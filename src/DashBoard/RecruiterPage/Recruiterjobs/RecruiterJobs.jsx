import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'tw-elements';

const RecruiterJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5001/jobs?jobstype=all`)
        .then((res) => res.json())
        .then((data) => setJobs(data))
        .catch((err) => console.log(err))
    }, [])


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
                {
                    jobs && jobs.map((job, index) => {
                        console.log(job);
                        return (
                            <tr >
                                <th>{index + 1}</th>
                                <td>{job?.job_details?.job?.job_title}</td>
                                <td >{job?.candidates?.length > 0 ? job?.candidates?.length : 0}</td>
                                <td><Link to={`/dashboard/myJobs/details/${job._id}`} className='btn btn-sm btn-outline'>See All</Link></td>
                                <td><button className='btn btn-sm btn-warning'>Delete</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default RecruiterJobs;