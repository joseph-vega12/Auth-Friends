import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';


function Friends(){

    const [ state, setState ] = useState([]);

    useEffect(() => {
        getData(); 
    });

    const getData = () => {
        axiosWithAuth()
        .get("/friends")
        .then(res=>{
            setState(res.data);
            console.log("res.data")
        }).catch(err=>{
            console.log(err);
        })
    }
    
    return(
        <div>

        </div>
    );
}

export default Friends