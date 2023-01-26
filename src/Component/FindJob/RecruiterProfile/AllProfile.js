<<<<<<< HEAD
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { ServerApi } from "../../../AllApi/MainApi";
import { AuthContext } from "../../../ContextApi/AuthProvider/AuthProvider";
import About from "./About";
import Experience from "./Experience";
import Featured from "./Featured";
import Language from "./Language";
import Profile from "./Profile";
import Skill from "./Skill";
=======
import React, { useEffect } from 'react';
import { useState } from 'react';
import About from './About';
import Experience from './Experience';
import Featured from './Featured';
import Language from './Language';
import Profile from './Profile';
import Skill from './Skill';
>>>>>>> 3c7d26379a45a19a91f526acb8cea0632aeea3da

const AllProfile = () => {
  const { user } = useContext(AuthContext);

<<<<<<< HEAD
  useEffect(() => {
    axios
      .get(`${ServerApi}/users?email=${user?.email}`)
      .then((data) => console.log(data.data))

      .catch((err) => console.error(err));
  }, [user?.email]);

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 bg-base-content text-white">
      <Profile></Profile>
      <Featured></Featured>
      <About></About>
      <Experience></Experience>
      <Skill></Skill>
      <Language></Language>
    </div>
  );
=======
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
>>>>>>> 3c7d26379a45a19a91f526acb8cea0632aeea3da
};

export default AllProfile;
