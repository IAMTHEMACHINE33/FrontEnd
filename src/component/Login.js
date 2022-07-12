import axios from "axios";
import { useState } from "react";

const Login=()=>{
    const [email,setEmail] =useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');
    
    const loginUser=(e)=>{
        e.preventDefault();
        const data ={
            email:email,
            password:password,
        };
        axios
        .post("http://localhost:90/customer/login", data)
        .then((response)=>{
            console.log(response.data.token)
            if(response.data.token){
                //It will store the token locallt, so that it is available all over the component
                localStorage.setItem("ticket",response.data.token);
                //redirect to the home
                window.location.replace('/home')
            }else{
                setMessage("Invalid credential!")
            }
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h1>Login</h1>
                    <h3>{message}</h3>
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input type='text' className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type='text' className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" onClick={loginUser}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;