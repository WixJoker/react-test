import React, { Component } from "react";

class TodoEditor extends Component {
  state = {
    message: "",
  };

  handleTextarea = (event) => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);

    this.props.onSubmit(this.state.message);

    this.reset();
  };

  reset = () => {
    this.setState({ message: "" });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleTextarea}
        ></textarea>
        <button type="button" className="TodoEditor__button">
          Create
        </button>
      </form>
    );
  }
}
export default TodoEditor;
