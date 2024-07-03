import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Emply from "./Emply";
import { v4 as uuid } from "uuid";
import {useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = age;
    Emply.push({ id: uniqueId, Name: a, Age: b });

    history("/");
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <div className="mb-3" controlID="formName">
          <input
            type="text"
            placeholder="Enter Name"
            required
            onchange={(e) => setName(e.target.value)}
          />
        </div>
        <Form.group className="mb-3" controlID="formAge">
          <Form.control
            type="text"
            placeholder="Enter Age"
            required
            onchange={(e) => setAge(e.target.value)}
          ></Form.control>
        </Form.group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
