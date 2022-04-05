import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
// import "./Style/rootpage.css"
export default function Rootpage() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [quizId, setpin] = useState("");
    let navigate = useNavigate();
    const clickhandler =()=>{
        navigate('/signup');
    }
    const submithandler = (e) => {
        e.preventDefault();
        // const options = {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // };
        
        axios
          .post("http://a3a9-42-105-210-122.ngrok.io/api/user/add", {name, email,quizId})
          .then((res) => {
              console.log(res);
          })
          .catch((err) => {
            alert(err);
          });

      };
    
  return (
         
        <div className="parent">
            <div className='org'>
         <h1> Orgnaztion SignUp or SignIn</h1>
         <button onClick={clickhandler}>Register/Login</button><br/>
         </div>
       <div className="taketest">
        <h1 className="heading">Take Test</h1>
        <br />
        <form onSubmit={submithandler}>
          <label className="labels" htmlFor="name">
            Name:
          </label>
          <input
            className="inputs"
            onChange={(e) => setname(e.target.value)}
            id="name"
            name="name"
            type="text"
          />
          <br />
          <label className="labels" htmlFor="email">
            Email:
          </label>
          <input
            className="inputs"
            id="email"
            name="email"
            type="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <label className="labels" htmlFor="quizId">
            Pin:
          </label>
          <input
            className="inputs"
            onChange={(e) => setpin(e.target.value)}
            id="quizId"
            name="quizId"
            type="text"
          />
          <br />
          <button type="submit" className="buttons">
            Submit
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
    
  )
}


  
  