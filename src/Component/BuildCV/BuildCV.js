import axios from "axios";
import React, { useState, useReducer } from "react";
import swal from "sweetalert";
import { ServerApi } from "../../AllApi/MainApi";

const BuildCV = () => {
  const [step, setStep] = useState(1);

  const initialState = {
    firstName: "",
    lastName: "",
    careerObjective: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
    instituteName: "",
    class: "",
    subject: "",
    board: "",
    cgpa: "",
    skills: "",
    position: "",
    github: "",
    linkedIn: "",
    portfolio: "",
    phone: "",
    projectName: "",
    liveSite: "",
    clientCode: "",
    serverCode: "",
    projectDescrition: "",
    technologies: "",
    languages: "",
  };

  const candidateReducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  };

const [state, dispatch] = useReducer(candidateReducer, initialState);

  const handleCreateResume = async () => {
    await axios
      .post(`${ServerApi}/create-resume`, state)
      .then((res) => {
        if (res?.data?.length >= 1) {
          const errors = res.data;
          return swal("Opps!", `${errors.map((err) => err.error)}`, "error");
        }
        return swal("Good job!", "Resume created successfully", "success");
      })
      .catch((err) => swal("Good job!", `${err.message}`, "success"));
  };

  return (
    <div className="block p-6 rounded-lg relative mx-auto shadow-lg bg-white lg:w-1/2 my-10">
      <div className={`${step === 5 ? "hidden" : "block"}`}>
        <h3 className="text-2xl text-center font-bold mb-3">
          Create your Resume/CV
        </h3>
        <p className="text-xl text-center absolute top-0 right-6 mb-5">
          Page: {step}/4
        </p>
      </div>

<<<<<<< HEAD
      {step === 1 ? (
        <div>
          <h4 className="text-2xl mb-2 font-semibold">Personal information:</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="firstName"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="First name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
=======
    const handleCreateResume = async () => {
        await axios.post(`${ServerApi}/createresume`, state)
            .then((res) => {
                if (res?.data?.length >= 1) {
                    const errors = res.data
                    return swal("Opps!", `${errors.map((err) => err.error)}`, "error");
                }
                return swal("Good job!", "Resume created successfully", "success");
            })
            .catch((err) => swal("Opps!", `${err.message}`, "error"))
    }

    console.log(state);
    return (
        <div className="block p-6 rounded-lg relative mx-auto shadow-lg bg-white lg:w-1/2 my-10">
            <div className={`${step === 5 ? "hidden" : "block"}`}>
                <h3 className="text-2xl text-center font-bold mb-3">Create your Resume/CV</h3>
                <p className="text-xl text-center absolute top-0 right-6 mb-5">Page: {step}/4</p>
            </div>


            {step === 1 ? <div>
                <h4 className="text-2xl mb-2 font-semibold">Personal information:</h4>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">First Name <span className="text-yellow-600 font-extrabold">*</span></label>
                        <input defaultValue={state?.firstName} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="firstName" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="First name" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Last Name<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.lastName} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="lastName" type="text" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                            aria-describedby="emailHelp124" placeholder="Last name" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">City<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.city} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="city" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="City" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Postal Code<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.postalCode} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="postalCode" type="text" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                            aria-describedby="emailHelp124" placeholder="Postal Code" />
                    </div>
                </div>



                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">State<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.state} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="state" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="State" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Country<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.country} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="country" type="text" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                            aria-describedby="emailHelp124" placeholder="Country" />
                    </div>
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="firstName">Languages<span className="text-yellow-600 font-extrabold"> *</span></label>
                    <input defaultValue={state?.languages} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="languages" type="text" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                        aria-describedby="emailHelp124" placeholder="Languages" />
                </div>
            </div> : ""
            }

            {step === 2 ? <div>
                <h4 className="text-2xl mb-2 font-semibold">Education:</h4>
                <div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Institute Name<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.instituteName} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="instituteName" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Institute name" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Class<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.class} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="class" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Recently finished class" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Subject<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.subject} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="subject" type="text" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                            aria-describedby="emailHelp124" placeholder="Subject" />
                    </div>

                </div>


                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Board<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.board} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="board" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Board" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">CGPA<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.cgpa} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="cgpa" type="text" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                            aria-describedby="emailHelp124" placeholder="CGPA" />
                    </div>

                </div>
            </div> : ""
            }

            {step === 3 ? <div>
                <h4 className="text-2xl mb-2 font-semibold">Developer Profile:</h4>
                <div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Career Objective<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <textarea defaultValue={state?.careerObjective} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="careerObjective" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Career Objective" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Portfolio<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.portfolio} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="portfolio" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Portfolio link" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Skills<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.skills} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="skills" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Skills: HTML, CSS, JavaScript, Reactjs..." />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Position<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.position} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="position" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Position: Frontend Developer" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Github Profile<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.github} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="github" type="text" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                            aria-describedby="emailHelp124" placeholder="GitHub Profile" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">linkedIn Profile<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.linkedIn} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="linkedIn" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="LinkedIn Profile" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Your Phone<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.phone}  onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="phone" type="text" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                            aria-describedby="emailHelp124" placeholder="Phone number" />
                    </div>

                </div>
            </div> : ""
            }

            {step === 4 ? <div>
                <h4 className="text-2xl mb-2 font-semibold">Your Best Project:</h4>
                <div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Project Name<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.projectName} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="projectName" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Project Name" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Live Site<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.liveSite} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="liveSite" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Best project live link" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Client Code<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.clientCode} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="clientCode" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Repository link client" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Server Code</label>
                        <input defaultValue={state?.serverCode} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="serverCode" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="serverCode"
                            aria-describedby="serverCode" placeholder="Repository link server" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Technologies<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <input defaultValue={state?.technologies} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="technologies" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="technologies"
                            aria-describedby="technologies" placeholder="Technology you used" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="firstName">Project Descrition<span className="text-yellow-600 font-extrabold"> *</span></label>
                        <textarea defaultValue={state?.projectDescrition} onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="projectDescrition" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Project description" />
                    </div>
                </div>
            </div> : ""
            }

            {
                step === 5 && <div>
                    <h2 className="text-4xl font-bold text-center">Congratulation!!</h2>
                    <p className="text-xl text-center">Your resume created</p>
                    <div className="text-center mb-10">
                        <button onClick={handleCreateResume} className="bg-green-800 px-10 py-2 mt-5 rounded text-white">Download</button>
                    </div>
                </div>
            }

            <div className="flex justify-between">
                <button onClick={() => setStep((step) => step - 1)} disabled={step === 1} className="px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out">Back</button>
                {
                    step === 4 ? <button onClick={() => setStep(5)} className="px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out">Complete</button> : <button disabled={step === 5} onClick={() => setStep((step) => step + 1)} className="px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out">Next</button>
>>>>>>> 3c7d26379a45a19a91f526acb8cea0632aeea3da
                }
                name="lastName"
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="city"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="City"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="postalCode"
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Postal Code"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="state"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="State"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="country"
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Country"
              />
            </div>
          </div>
          <div className="form-group mb-6">
            <input
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              name="languages"
              type="text"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput124"
              aria-describedby="emailHelp124"
              placeholder="Languages"
            />
          </div>
        </div>
      ) : (
        ""
      )}

      {step === 2 ? (
        <div>
          <h4 className="text-2xl mb-2 font-semibold">Education:</h4>
          <div>
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="instituteName"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Institute name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="class"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Recently finished class"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="subject"
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Subject"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="board"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Board"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="cgpa"
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="CGPA"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {step === 3 ? (
        <div>
          <h4 className="text-2xl mb-2 font-semibold">Developer Profile:</h4>
          <div>
            <div className="form-group mb-6">
              <textarea
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="careerObjective"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Career Objective"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="portfolio"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Portfolio link"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="skills"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Skills: HTML, CSS, JavaScript, Reactjs..."
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="position"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Position: Frontend Developer"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="github"
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="GitHub Profile"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="linkedIn"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="LinkedIn Profile"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="phone"
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Phone number"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {step === 4 ? (
        <div>
          <h4 className="text-2xl mb-2 font-semibold">Your Best Project:</h4>
          <div>
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="projectName"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Project Name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="liveSite"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Best project live link"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="clientCode"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Repository link client"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="serverCode"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="serverCode"
                aria-describedby="serverCode"
                placeholder="Repository link server"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="technologies"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="technologies"
                aria-describedby="technologies"
                placeholder="Technology you used"
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="projectDescrition"
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Project description"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {step === 5 && (
        <div>
          <h2 className="text-4xl font-bold text-center">Congratulation!!</h2>
          <p className="text-xl text-center">Your resume created</p>
          <div className="text-center mb-10">
            <button
              onClick={handleCreateResume}
              className="bg-green-800 px-10 py-2 mt-5 rounded text-white"
            >
              Download
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <button
          onClick={() => setStep((step) => step - 1)}
          disabled={step === 1}
          className="px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out"
        >
          Back
        </button>
        {step === 4 ? (
          <button
            onClick={() => setStep(5)}
            className="px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out"
          >
            Complete
          </button>
        ) : (
          <button
            disabled={step === 5}
            onClick={() => setStep((step) => step + 1)}
            className="px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default BuildCV;
