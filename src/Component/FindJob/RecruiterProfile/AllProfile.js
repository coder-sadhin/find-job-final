import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ServerApi } from "../../../AllApi/MainApi";
import { AuthContext } from "../../../ContextApi/AuthProvider/AuthProvider";
import About from "./About";
import Experience from "./Experience";
import Featured from "./Featured";
import Language from "./Language";
import Profile from "./Profile";
import Skill from "./Skill";

const AllProfile = () => {
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   axios
  //     .get(`${ServerApi}/users?email=${user?.email}`)
  //     .then((data) => console.log(data.data))

  //     .catch((err) => console.error(err));
  // }, [user?.email]);

  const [useData, setUseData] = useState([])

  useEffect(() => {
    fetch('Profile.json')
      .then(res => res.json())
      .then(data => {
        setUseData(data[1])
      })
  }, [])

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 bg-base-content text-white">
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
