import React from "react";
import css from "./ToDoList.module.css";

const ToDoList = ({ todos, onDeleteToDo }) => {
  todos = [];
  return (
    <ul className={css.itemList}>
      {todos.map(({ id, description }) => (
        <li key={id}>
          <p>{description}</p>
          <button type="button" onClick={() => onDeleteToDo(id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
