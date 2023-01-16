import React, { useContext } from 'react';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';

const CandidateProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='px-20 text-center'>
            <h1 className="text-2xl text-center font-bold">This is my candidate profile</h1>
            <div>
                <img className='mx-auto' src={user?.photoURL} alt="" />
                <h3 className="text-3xl font-bold">{user?.displayName}</h3>
            </div>
        </div>
    );
};

export default CandidateProfile;