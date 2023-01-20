import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';

const MyJobs = () => {
    const {user} = useContext(AuthContext)
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5001/applied-job/${user?.email}`)
        .then((data) => setJobs(data.data))
        .catch((err) => console.log(err))
    }, [user?.email])

    const handleJobDelete = (id) => {
        axios.delete(`http://localhost:5001/applied-job/${id}`)
        .then((res) => {
            if(res.data.deletedCount > 0){
                const remaining = jobs.filter((job) => job._id !== id);
                setJobs(remaining)
            }
        })
        .catch((err) => console.log(err))
    }

    return (
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                    <thead class="bg-white border-b">
                        <tr>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            #
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Title
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Type
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Action
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs && jobs.map((job) => {
                                const title = job?.job?.job_details?.job?.job_title;
                                const jobType = job?.job?.job_details?.job?.jobType;
                                return (
                                    <tr key={job._id} class="bg-gray-100 border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                           {title}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {jobType}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <button onClick={() => handleJobDelete(job._id)} className='btn btn-sm bg-red-700 m-2'>Delete</button>
                                            <button className='btn btn-sm bg-blue-800'>Details</button>
                                        </td>
                                    </tr>
                                )
                            } )
                        }
                        
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    );
};

export default MyJobs;