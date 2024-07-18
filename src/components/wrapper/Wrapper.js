import React from "react";
import Todo from "../todo/Todo";

import "./wrapper.scss";

function Wrapper() {
  return (
    <div className="container wrapper">
      <h1 className="title">Todo App</h1>
      <Todo />
    </div>
  );
}

export default Wrapper;
