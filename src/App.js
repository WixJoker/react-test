import { Component } from "react";
import Counter from "./components/Counter";
import Modal from "./components/Modal";
import ColorPicker from "./components/ColorPicker";
import ToDoList from "./components/ToDoList";

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
  };

  deleteItem = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
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
        <ToDoList todos={todos} onDeleteToDo={this.deleteItem} />
      </div>
    );
  }
}

export default App;
