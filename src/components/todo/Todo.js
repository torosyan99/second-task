import React from "react";

import "./todo.scss";
import Form from "../form/Form";
import List from "../list/List";

function Todo() {
  return (
    <div className="todo">
      <Form />
      <List />
    </div>
  );
}

export default Todo;
