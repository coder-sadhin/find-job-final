import React,{ useState, useEffect } from 'react';
import 'tw-elements';

const RecruiterJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5001/jobs?jobstype=all`)
        .then((res) => res.json())
        .then((data) => setJobs(data))
        .catch((err) => console.log(err))
    }, [])


    return (
        <div class="accordion" id="accordionExample5">
            {
                jobs && jobs.map((job) => <div class="accordion-item bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="headingThree5">
                <button class="
                accordion-button
                collapsed
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-base text-gray-800 text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none
                " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false"
                aria-controls="collapseThree5">
                {job?.job_details?.job?.job_title} === Total Candidates {job?.candidates?.length}
                </button>
            </h2>
            <div id="collapseThree5" class="accordion-collapse collapse" aria-labelledby="headingThree5">
                <div class="accordion-body py-4 px-5">
                {
                    job?.candidates && job.candidates.map((candidate) => <h2 className='text-xl'>{candidate?.name}</h2>)
                }
                </div>
            </div>
            </div>)
            }
        </div>
    );
};

export default RecruiterJobs;