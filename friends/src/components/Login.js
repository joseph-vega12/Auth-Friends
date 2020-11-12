import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const credentials = {   
    username: '', 
    password: ''
};

function Login() {

    const [intialFormValue, setInitialFormValue] = useState(credentials);
    const { push } = useHistory();

    const handleChange = (e) => {
        setInitialFormValue({
            ...intialFormValue,
            [e.target.name]: e.target.value, // targets the name of the inputs and changes the value
            }
        )
    }

    const handleLogin = (e) => {
        console.log(intialFormValue);
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', intialFormValue)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            push('/protected');
            console.log(res);
        })
        .catch(err => {
            console.log(err, "this is the error");
        })
};

return (
    <div>
        <h1>Login Form</h1>
        <form onSubmit={handleLogin}>
            <label>
                Username:
                    <input type="text" name="username" onChange={handleChange} value={intialFormValue.username}/>
            </label>
            <br></br>
            <label>
                Password:
                    <input type="password" name="password" onChange={handleChange} value={intialFormValue.password}/>
            </label>
            <br></br>
            <button>Submit</button>
        </form>
    </div>
)
}

export default Login