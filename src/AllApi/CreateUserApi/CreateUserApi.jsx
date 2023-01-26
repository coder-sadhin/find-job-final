import { toast } from 'react-hot-toast';
import { ServerApi } from '../MainApi';

const addUser = (user) => {
    fetch(`${ServerApi}/user/addUsers`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Logged in successfully!')
            }
        })
}



export default addUser;