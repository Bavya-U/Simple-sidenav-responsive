// const Blogs = () => {
//   return <div className="blog"> 
//     <h1 className="pt-5 fw-bold text-dark">Blog Articles</h1>
//     <p>this is a blogs page</p>
//     <p className="container">Once you have mastered the use of topic sentences, you may decide that the topic sentence for a particular paragraph really shouldn’t be the first sentence of the paragraph. This is fine—the topic sentence can actually go at the beginning, middle, or end of a paragraph; what’s important is that it is in there somewhere so that readers know what the main idea of the paragraph is and how it relates back to the thesis of your paper. Suppose that we wanted to start the piranha paragraph with a transition sentence—something that reminds the reader of what happened in the previous paragraph—rather than with the topic sentence. Let’s suppose that the previous paragraph was about all kinds of animals that people are afraid of, like sharks, snakes, and spiders. Our paragraph might look like this (the topic sentence is bold):</p>

//   </div>;
// };

// export default Blogs;
import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Emply from "./Emply";
// import { v4 as uuid } from "uuid";
import {useNavigate } from "react-router-dom";

function Blogs() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  var index = Emply.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    let a = Emply[index];
    a.Name = name;
    a.Age = age;

    history("/");
  };
  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("Id"));
  });

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlID="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            required
            onchange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlID="formAge">
          <Form.Control
            type="text"
            placeholder="Enter Age"
            value={age}
            required
            onchange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
export default Blogs;
