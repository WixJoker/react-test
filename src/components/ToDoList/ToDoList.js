import React from "react";

const ToDoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(({ id, description }) => (
        <li key={id}>
          <p>{description}</p>
          <button type="button">Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
