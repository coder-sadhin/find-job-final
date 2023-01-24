import React from 'react';
import PrimaryButton from '../../Component/Button/PrimaryButton';
import NoData from '../NoData';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Component/Spinner/Spinner';
import { useTitle } from 'react-use';
import { ServerApi } from '../../AllApi/MainApi';

const AllJobs = () => {
    useTitle('Admin Dashboard - All Jobs')
    const { data: jobs = [], isLoading } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            try {
                const res = await fetch(`${ServerApi}/admin/allJobs`);
                const data = await res.json();
                return data
            }
            catch (err) { }
        }
    })

    if (isLoading) {
        <Spinner />
    }

    return (
        <div className='w-11/12 mx-auto'>
            {jobs?.length > 0 ?
                <>
                    <div className='my-5'>
                        <h3 className="text-4xl font-bold text-center">ALL Jobs</h3>
                    </div>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>
                                    </th>
                                    <th>Job Title</th>
                                    <th>Experience</th>
                                    <th>Jobs Type</th>
                                    <th>Salary</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    jobs.map((job, i) =>
                                        <tr key={i}>
                                            <th>
                                                <label>
                                                    {i + 1}
                                                </label>
                                            </th>
                                            <td className='flex items-center'>
                                                <div>
                                                    <div className="font-bold">{job.job_details.job.job_title}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div className="font-bold">{job.job_details.experience}</div>
                                                </div>
                                            </td>
                                            <td>{job.job_details.job.jobType}</td>
                                            <td>{job.pay.payment}-{job.pay.currency}/{job.pay.pay_duration} </td>
                                            <td>
                                                <PrimaryButton classes={'btn-sm'}>Details</PrimaryButton>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </>
                :
                <div className='my-5'>
                    <NoData>USER NOT FOUND</NoData>
                </div>
            }
        </div>
    );
};

export default AllJobs;