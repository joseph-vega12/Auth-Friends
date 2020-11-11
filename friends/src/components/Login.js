import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const credentials = [{
username: '', password: ''
}];

function Login() {

    const [intialFormValue, setInitialFormValue] = useState(credentials);
    const history = useHistory();

    const handleChange = (e) => {
        setInitialFormValue({
            ...credentials,
            [e.target.name]: e.target.value, // targets the name of the inputs and changes the value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', intialFormValue)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            console.log("Its Alive!!!")
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
                    <input type="text" name="username" onChange={handleChange} value={credentials.username}/>
            </label>
            <br></br>
            <label>
                Password:
                    <input type="password" name="password" onChange={handleChange} value={credentials.password}/>
            </label>
            <br></br>
            <button>Submit</button>
        </form>
    </div>
)
}

export default Login