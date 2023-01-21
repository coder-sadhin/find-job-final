import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Applicants = () => {
    const job = useLoaderData();
    return (
        <div>
            <h2 className="text-3xl text-center font-bold my-5">{job?.job_details?.job?.job_title}</h2>
            <div className="overflow-x-auto text-center">
            <table className="table w-full">
                <thead>
                <tr className='text-center'>
                    <th></th>
                    <th>Name</th>
                    <th>Resume</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    job?.candidates && job?.candidates.map((job, index) => {
                        console.log(job);
                        return (
                            <tr className='text-center'>
                                <th>{index + 1}</th>
                                <td >Akkas Ali</td>
                                <td><button className="btn btn-sm btn-outline">Download</button></td>
                                <td className='flex gap-2 justify-center'>
                                    <button className='btn btn-sm btn-outline'>Accept</button>
                                    <button className='btn btn-sm bg-red-700'>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Applicants;