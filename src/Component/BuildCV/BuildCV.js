import { useState } from "react";

const BuildCV = () => {

    const [step, setStep] = useState(1);


    console.log(step);

    return (
        <div className="block p-6 rounded-lg mx-auto shadow-lg bg-white lg:w-1/2 my-10">
            <div className={`${step === 5 ? "hidden" : "block"}`}>
                <h3 className="text-2xl text-center font-bold">Create your Resume/CV</h3>
                <p className="text-xl text-center mb-5">Page: {step}/4</p>
            </div>


            {step === 1 ? <div div >
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
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
                        <input type="text" className="form-control
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
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
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
                        <input type="text" className="form-control
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
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
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
                        <input type="text" className="form-control
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
            </div> : ""
            }

            {step === 2 ? <div div >
                <div className="">
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
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
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
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
                        <input type="text" className="form-control
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
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
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
                        <input type="text" className="form-control
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

            {step === 3 ? <div div >
                <div className="">
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
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
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
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
                        <input type="text" className="form-control
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
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
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
                        <input type="text" className="form-control
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

            {step === 4 ? <div div >
                <div>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
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
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
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
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Repository link server" />
                    </div>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="emailHelp123" placeholder="Technology you used" />
                    </div>
                    <div className="form-group mb-6">
                        <textarea type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
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
                        <button className="bg-green-800 px-10 py-2 mt-5 rounded text-white">Download</button>
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
                }
            </div>

        </div>
    );
}

export default BuildCV