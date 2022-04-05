import React, { useEffect } from 'react'
import axios from 'axios'

function Test() {
   
  useEffect(()=>{
    axios.get("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple")
    .then((res)=>{
        console.log(res);
    }) 
  },[])

  return (
    <div>
        <div>Qustion will apper here</div>
        <lable>option1</lable>
        <input type="radio" name='option' id="1"></input>
        <lable>option2</lable>
        <input type="radio" name='option'  id="2"></input>
        <lable>option3</lable>
        <input type="radio" name='option'  id="3"></input>
        <lable>option4</lable>
        <input type="radio" name='option' id="4"></input>
        <button>Next</button>
    </div>
  )
}

export default Test