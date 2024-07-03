// import React from "react";
import ClassComponent from "./Class";
import { Functional } from "./Functional";

const Contact = () => {
    const head = {name: "Tamil"};
    
    return (
    <>
    <ClassComponent head={head}/>
    <Functional head={head}/>
    <Functional/>
    </>)

    
};


export default Contact;

