import shortid from "shortid";
import React from "react";
import { Component } from "react";
import Counter from "./components/Counter";
import Modal from "./components/Modal";
import ColorPicker from "./components/ColorPicker";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
import TodoEditor from "./components/TodoEditor";

const colorPickerOption = [
  { label: "blue", color: "blue" },
  { label: "red", color: "red" },
  { label: "yellow", color: "yellow" },
  { label: "orange", color: "orange" },
  { label: "brown", color: "brown" },
];

class App extends Component {
  state = {
    todos: [
      { id: "1", description: "HTML", completed: false },
      { id: "2", description: "CSS", completed: true },
      { id: "3", description: "JS", completed: false },
      { id: "4", description: "React", completed: true },
    ],
    filter: "",
  };

  addTodo = (text) => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteItem = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  formSubmitHandler = (data) => {
    setTimeout(() => {
      console.log(data);
    }, 500);
  };

  // componentDidMount() {
  //   const todos = localStorage.getItem('todos');
  //   const todosParsed = JSON.parse(todos)
  //   console.log(todosParsed);

  //   if ({ todosParsed }) {
  //     this.setState({ todos: todosParsed });
  //   }

  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.todos !== prevState.todos) {
  //     localStorage.setItem("todos", JSON.stringify(this.state.todos));
  //   }
  // }

  // changeFilter = (event) => {
  //   this.setState({ filter: event.currentTarget.value });
  // };

  render() {
    const { todos } = this.state;

    // const normalizedFilter = this.state.filter.toLowerCase();
    // const filterTodos = this.state.todos.filter((todo) =>
    //   todo.text.toLowerCase().includes(normalizedFilter)
    // );

    return (
      <>
        <div>
          <Counter initialValue={10} />
          <Modal />
          <ColorPicker options={colorPickerOption} />
          <div>
            <p>Total amount of todo: {todos.length}</p>
            <p>
              Amount of executed todo:{" "}
              {/* {todos.filter((todo) => todo.completed).length} */}
              {todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0)}
            </p>
          </div>
          <ToDoList onDeleteToDo={this.deleteItem} />
          <Form onHandlerSubmit={this.formSubmitHandler} />
          <React.StrictMode>
            <TodoEditor onSubmit={this.handleSubmit} />
            {/* <label>
              Filter by name
              <input type="text" value={filter} onChange={this.changeFilter} />
            </label> */}
          </React.StrictMode>
        </div>
      </>
    );
  }
}

export default App;
