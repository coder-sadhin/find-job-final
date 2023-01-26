import React, { useState } from 'react';
import { ServerApi } from '../../AllApi/MainApi';

const Subscribe = () => {
    const [getEmail, setGetEmail] = useState("");

    const handleSubscribe = () => {
        fetch(`${ServerApi}/users/subscribe/${getEmail}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }

    return (
        <div className='text-white'>
            <h2 className="text-white text-center font-bold text-xl">Get premium service</h2>
            <label htmlFor="subscribetion">
                <input onChange={(e) => setGetEmail(e.target.value)} type="email" placeholder='Enter your email' className='p-2 rounded' />
                <button onClick={handleSubscribe} className='bg-blue-700 p-2 ml-1 rounded text white'>Subscribe</button>
            </label>
        </div>
    );
};
// sahjjjjjjjjjjjjjjjjjjjjjjkjSAXHXHXHXXxahlkjshkjhlshlshlshlshlshkjlcchlkjhkjchkjchjkchkjc
export default Subscribe;