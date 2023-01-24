import React from 'react';
import PrimaryButton from '../../Component/Button/PrimaryButton';
import NoData from '../NoData';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Component/Spinner/Spinner';
import { useTitle } from 'react-use';
import { ServerApi } from '../../AllApi/MainApi';

const Recruiters = () => {
    useTitle('Admin Dashboard- All Recruiters')

    const { data: recruiters = [], refetch, isLoading } = useQuery({
        queryKey: ['recruiters'],
        queryFn: async () => {
            try {
                const res = await fetch(`${ServerApi}/admin/allRecruiter`);
                const data = await res.json();
                return data
            }
            catch (err) { console.log(err) }
        }
    })

    if (isLoading) {
        <Spinner />
    }

    return (
        <div className='w-11/12 mx-auto'>
            {recruiters?.length > 0 ?
                <>
                    <div className='my-5'>
                        <h3 className="text-4xl font-bold text-center">ALL Recruiters</h3>
                    </div>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>
                                    </th>
                                    <th>Profile</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Roll</th>
                                    <th>Company Name</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    recruiters.map((user, i) =>
                                        <tr key={i}>
                                            <th>
                                                <label>
                                                    {i + 1}
                                                </label>
                                            </th>
                                            <td className='flex items-center'>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={user.photoURL} alt="user" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div className="font-bold">{user.name}</div>
                                                </div>
                                            </td>
                                            <td>{user.email}</td>
                                            <td className="text-emerald-600 font-bold uppercase">{user.userType}</td>
                                            <td className='text-center'>X LTD</td>
                                            <th>
                                                {
                                                    user?.Status === "nonVerify" ?
                                                        <>
                                                            <span className='text-blue-900'>Verified</span>
                                                        </>
                                                        :
                                                        <>
                                                            <PrimaryButton classes={'btn-sm'}>Verify</PrimaryButton>
                                                        </>
                                                }

                                            </th>
                                            <th>
                                                <PrimaryButton classes={'btn-sm'}>Remove</PrimaryButton>
                                            </th>
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

export default Recruiters;