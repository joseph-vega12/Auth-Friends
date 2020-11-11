import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';


function Friends() {

    const [state, setState] = useState([]);

    useEffect(() => {
        getFriends();
    }, []);

    const getFriends = () => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                setState(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>You Made It!!</h1>
            {state.map(friends =>
                <div key={friends.id}>
                    <h4>{friends.name}</h4>
                </div>
            )}
        </div>
    );
}

export default Friends