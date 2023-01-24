import React from 'react';
import PrimaryButton from '../../Component/Button/PrimaryButton';
import NoData from '../NoData';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Component/Spinner/Spinner';
import { useTitle } from 'react-use';
import { ServerApi } from '../../AllApi/MainApi';

const AllCandidates = () => {
    useTitle('Admin Dashboard - AllSeller')
    const { data: candidates = [], refetch, isLoading } = useQuery({
        queryKey: ['candidates'],
        queryFn: async () => {
            try {
                const res = await fetch(`${ServerApi}/admin/allCandidate`);
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
            {candidates?.length > 0 ?
                <>
                    <div className='my-5'>
                        <h3 className="text-4xl font-bold text-center">ALL Candidates</h3>
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
                                    <th>Title</th>
                                    <th>Experience</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    candidates.map((user, i) =>
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
                                            <td className={(user.userType === 'seller' && 'text-red-400') || (user.userType === 'admin' && 'text-emerald-600 font-bold')}>Web Developer</td>
                                            <td className='text-center'>1 years</td>
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

export default AllCandidates;