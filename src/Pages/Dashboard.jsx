import axios from 'axios';
import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
function Dashboard() {
  let navigate = useNavigate();
  useEffect(()=>{
    console.log(localStorage.getItem("token"));
    const options = {
      headers: {
        "Content-Type" : "application/json",
        "Accpet": "application/json",
        "Authorization": localStorage.getItem("token"),
      },
    }; 
   
    axios.post("http://a3a9-42-105-210-122.ngrok.io/api/verify" ,options.headers)
    .then(res=>{
      console.log(res);
    })
  },[])

  const quizhandler =()=>{
        navigate("/createquiz")
  }

  const testhandler =()=>{
      navigate("/startquiz");
  }

  const showresult =()=>{
      navigate("/");
  }

  return (
    <div>
        <button onClick={quizhandler}>Create Quiz</button>
        <button onClick={testhandler}>Start Quiz</button>
        <button onClick={showresult}>See Result</button>
    </div>
  )
}

export default Dashboard