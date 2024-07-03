import React, { useState } from "react";

export const Functional = (props) => {
  console.log(props);
  const value = { name: "Bavya" };
  const { head = value } = props;
  console.log(value);

  const [name, setName] = useState(head.name);

  const onSquareClick = () => {
    console.log(name);
    setName("English");
    console.log(name);
  };
  return (
    <div className="d-block justify-content-center mt-5">
      <h4>Functional{name}</h4>
      <button
        type="button"
        className=" btn btn-primary"
        onClick={() => onSquareClick()}
      >
        Click me!{" "}
      </button>
    </div>
  );
};
