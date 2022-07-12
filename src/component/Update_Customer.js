import { useState, useEffect } from "react";
import axios from 'axios';


const Update_Customer=()=>{
    const [firstname,setFirstname] =useState('');
    const [lastname,setLastname] = useState('');
    const [username,setUsername] = useState('');
    const [age,setAge] = useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [message, setMessage] =useState('');
    const config ={
        headers:{
            Authorization:"Bearer "+localStorage.getItem("ticket")
        }
    }
    
    useEffect(()=>{
        axios.get("http://localhost:90/customer/dashboard",config)
        .then(response=>{
            console.log(response)
            setFirstname(response.data.firstname)
            setLastname(response.data.lastname)
            setUsername(response.data.username)
            setAge(response.data.age)
            setEmail(response.data.email)
            // setPassword(response.data.password)
        })
        .catch(e=>{
            console.log(e);
        })
    },[])
    const customerUpdated = (e) => {
        e.preventDefault();
        const data = {
          firstname: firstname,
          lastname: lastname,
          username: username,
          age:age,
          email:email,
          password: password,
        };

        // const data = new FormData();
        // data.append("firstname",firstname);
        // data.append("lastname",lastname);
        // data.append("username",username);
        // data.append("age",age);
        // data.append("email",email);
        // data.append("password",password);
      
        
        axios
          .post("http://localhost:90/customer/update", data, config)
          .then((result) => {
            console.log(result)
          })
          .catch(e=>{
            console.log(e)
          });
      };
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h1>Customer Update</h1>
                    <form>
                        <div className="form-group">
                            <label>Firstname</label>
                            <input type='text' className="form-control" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>Lastname</label>
                            <input type='text' className="form-control" value={lastname} onChange={(e)=>{setLastname(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type='text' className="form-control" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type='text' className="form-control" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                        </div>
                        <div className='form-group'>
                            <label>Email</label>
                            <input type='text' className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input type='text' className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" onClick={customerUpdated}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Update_Customer;