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
      { id: "2", description: "CSS", completed: false },
      { id: "3", description: "JS", completed: false },
      { id: "4", description: "React", completed: false },
    ],
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Counter initialValue={10} />
        <Modal />
        <ColorPicker options={colorPickerOption} />
        <ToDoList todos={todos} />
      </div>
    );
  }
}

export default App;
