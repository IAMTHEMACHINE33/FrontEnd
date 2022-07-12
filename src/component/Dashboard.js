import axios from 'axios';
import {useEffect, useState} from 'react';

const Dashboard=()=>{

    const [details, setDetails] = useState('');

    const config ={
        headers:{
            Authorization: "Bearer " + localStorage.getItem("ticket"),
        }
    }
    //page load hune bela mai
    useEffect(()=>{
        axios.get("http://localhost:90/customer/dashboard",config)
        .then(response=>{
            setDetails(response.data)
            console.log(response)
        })
        .catch(e=>{
            console.log(e);
        })
    },[])
    return(
        <div className="container bg-primary">
            <div className="row">
                <div className="col-md-4">
                    <h1> Dashboard</h1>
                    <p>Name: {details.firstname} {details.lastname}</p>
                    <p>Username: {details.username}</p>
                    <p>Email: {details.email} </p>
                    <p>Age: {details.age} </p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;