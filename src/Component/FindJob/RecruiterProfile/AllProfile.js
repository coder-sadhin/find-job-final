import React, { useEffect } from 'react';
import { useState } from 'react';
import About from './About';
import Experience from './Experience';
import Featured from './Featured';
import Language from './Language';
import Profile from './Profile';
import Skill from './Skill';

const AllProfile = () => {

    const [useData, setUseData] = useState([])

    useEffect(() => {
        fetch('Profile.json')
            .then(res => res.json())
            .then(data => {
                setUseData(data[1])
            })
    }, [])


    return (
        <div className='dark:bg-gray-900 dark:text-gray-100 bg-base-content text-white'>
            <Profile useData={useData}></Profile>
            <Featured useData={useData}></Featured>
            <About useData={useData}></About>
            <Experience useData={useData}></Experience>
            <Skill useData={useData}></Skill>
            <Language></Language>
        </div>
    );
};

export default AllProfile;