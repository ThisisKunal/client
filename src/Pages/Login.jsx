import React, { useState } from 'react'
import "../Style/login.css"
import axios from 'axios'
import { useNavigate } from 'react-router';
export default function Login() {
    
    const[ user,setUser] = useState({
        email: "",
        password: "",
    })
    let navigate = useNavigate();
    const changeHandler =(e)=>{
        const{name,value} = e.target;
        // console.log(name,value);
        setUser({
            ...user,
            [name]:value
        })
    }
    const login =()=>{
        const {email, password} = user;
        if(email && password){
            axios.post("http://a3a9-42-105-210-122.ngrok.io/api/organization/signin", user)
            .then( res => {
                console.log(res)
                if(res.data.status)
                {   
                    console.log(res);
                    localStorage.setItem("token","Bearer " +res.data.payLoad["token"]);
                    // 
                    navigate('/dashboard');
                }
                else{
                    alert(res.err)
                }
                
            })
            .catch((err)=>{
                console.log(err.response)
            })
        } else {
            alert("invlid input")
        }
    }
  return (
    <div  className="login"> 
    {/* {console.log(user)} */}
        <h1>Organization Login</h1>
        <input type="text"  name='email' value={user.email}  placeholder='Email' onChange={changeHandler}></input>
        <input type="password" placeholder='Password' name='password' value={user.password}  onChange={changeHandler}></input>
        <button onClick={login}>Login</button>
    </div>
  )
}
