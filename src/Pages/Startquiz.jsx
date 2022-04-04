import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";

const topic = [
  { id: 1, name: "select" },
  { id: 2, name: "HTML" },
  { id: 3, name: "CSS" },
  { id: 4, name: "JAVASCRIPT" },
  { id: 5, name: "REACTJS" },
  { id: 6, name: "NODEJS" }
];

export default function Startquiz() {
  // const [test, setTest] = useState([]);
  const [type, setType] = useState(" ");
  const [quizId, setquizId] = useState("");

  const options = {
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("auth-token")
    }
  };

  // useEffect(() => {
  //   axios
  //     .post(
  //       "http://a3a9-42-105-210-122.ngrok.io/api/user/quizjoiningdetails",
  //       {},
  //       options
  //     )
  //     .then((res) => {
  //       for (let x of res.data) {
  //         for (let y of topic) {
  //           if (y["id"] == x["topics"]) x.topicname = y["name"];
  //         }
  //       }
  //       console.log(res.data);
  //       setTest(res.data);
  //     })
  //     .catch((err) => {
  //       if (!localStorage.getItem("auth-token"));
  //       else alert("couldn't fetch please reload");
  //     });
  // }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://a3a9-42-105-210-122.ngrok.io/api/user/quizjoiningdetails", {
        type,
        quizId
      })
      .then((res) => {
        console.log("added topics", res);
      })
      .catch((err) => {
        console.log("error in Adding", err);
      });
  };

  return (
   
      <form onSubmit={submitHandler}>
        <label>Quiz topic</label>
        <select
          id="type"
          name="topics"
          onChange={(e) => setType(e.target.value)}
        >
          {topic.map((obj) => (
            <option key={obj.id} value={obj.id}>
              {obj.name}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => setquizId(e.target.value)}
          id="pin"
          name="quizId"
          type="text"
        />
        <input type="submit" />
      </form>
  
  );
}
