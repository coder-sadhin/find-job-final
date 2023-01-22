import React from 'react';
import About from './ProfileCompo/About';
import Experience from './ProfileCompo/Experience';
import Featured from './ProfileCompo/Featured';
import Language from './ProfileCompo/Language';
import ProfileM from './ProfileCompo/Profile';
import Skill from './ProfileCompo/Skill';

const Profile = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-gray-100 bg-base-content text-white'>
            <ProfileM />
            <Featured />
            <About></About>
            <Experience></Experience>
            <Skill></Skill>
            <Language></Language>
        </div>
    );
};

export default Profile;