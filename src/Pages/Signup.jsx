import React, { useState } from 'react'
import "../Style/signup.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
export default function Signup() {

    const[ user,setUser] = useState({
        orgName: "",
        email: "",
        password: "",
    })
    let navigate = useNavigate();
    const signUp =()=>{
        const { orgName, email, password} = user;
        if( orgName && email && password){
            axios.post("http://a3a9-42-105-210-122.ngrok.io/api/organization/signup", user)
            .then( res => {
                console.log(res.data);
            })
        } else {
            alert("invlid input")
        }
        
    }
    const changeHandler =(e)=>{
        const{name,value} = e.target;
        // console.log(name,value);
        setUser({
            ...user,
            [name]:value
        })
    }
    const clickhandler =()=>{
          navigate("/login")
    }
  return (
    <div className="register">
        {/* {console.log(user)} */}
        <h1>Organization SignUp</h1>
        <lable>Organization Name</lable>
        <input type="text" name='orgName' value={user.orgName} placeholder='Enter Name...' onChange={changeHandler} ></input>
        <label>Email Id</label>
        <input type="text" name='email' value={user.email} placeholder='Enter Mail...' onChange={changeHandler} ></input>
        <label>Password</label>
        <input type="password" name='password' value={user.password} placeholder='Enter Password...' onChange={changeHandler} />
        <button onClick={signUp}>Sign Up</button><br/> <br/>
        <label>already a user SignIn</label><br/> <br/>
        <button onClick={clickhandler}>SignIN</button>
    </div>
  )
}
