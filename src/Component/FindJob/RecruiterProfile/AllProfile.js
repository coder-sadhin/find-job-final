import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { ServerApi } from '../../../AllApi/MainApi';
import { AuthContext } from '../../../ContextApi/AuthProvider/AuthProvider';
import About from './About';
import Experience from './Experience';
import Featured from './Featured';
import Language from './Language';
import Profile from './Profile';
import Skill from './Skill';

const AllProfile = () => {

    const { user } = useContext(AuthContext)


    useEffect(() => {
        axios.get(`${ServerApi}/users?email=${user?.email}`)
            .then(data => console.log(data.data))

            .catch(err => console.error(err))
    }, [user?.email])

    return (
        <div className='dark:bg-gray-900 dark:text-gray-100 bg-base-content text-white'>
            <Profile></Profile>
            <Featured></Featured>
            <About></About>
            <Experience></Experience>
            <Skill></Skill>
            <Language></Language>
        </div>
    );
};

export default AllProfile;