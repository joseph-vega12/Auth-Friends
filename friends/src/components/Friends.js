import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFormState = {
    credentials: 
    {name: '',
    age: '',
    email: ''},
    isLoading: false,
}

function Friends() {

    const [friendstate, setFriendState] = useState([]);
    const [formValue, setFormValue] = useState(initialFormState);

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            credentials: {
            ...formValue.credentials,
            [e.target.name]: e.target.value
            }
        })
    }

    useEffect(() => {
        getFriends();
    }, []);

    const getFriends = () => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                setFormValue({
                    ...formValue,
                    isLoading: true,
                })
                setFriendState(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handlePost = (e) => {
        e.preventDefault();        
        axiosWithAuth()
        .post("http://localhost:5000/api/friends", formValue.credentials)
            .then(res => {
                setFriendState(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
            setFormValue({
                ...formValue,
                credentials: initialFormState.credentials
            });
    }
    return (
        <div className="container">
            <div className="friend-form">
                <h1>Create a New Friend:</h1>
                <form>
                    <ul>
                        <label>
                            Name:
                            <input name="name" type="text" onChange={handleChange} value={formValue.credentials.name}/>
                        </label>
                        <label>
                            Email:
                            <input name="email" type="email" onChange={handleChange} value={formValue.credentials.email}/>
                        </label>
                        <label>
                            Age:
                            <input name="age" type="number" onChange={handleChange} value={formValue.credentials.age}/>
                        </label>
                        <button onClick={handlePost}>Submit</button>
                    </ul>
                </form>
            </div>
            {formValue.isLoading === true ? 
            friendstate.map(friends =>
                <div className="friends-cards" key={friends.id}>
                    <h2>{friends.name}</h2>
                    <h4>{friends.email}</h4>
                    <h4>{friends.age}</h4>
                </div>
            )
        : <h1>is Loading....</h1>
        }
            
        </div>
    );
}

export default Friends