import { Component } from "react";
import shortid from "shorttid";

class Form extends Component {
  state = {
    name: "",
    tag: "",
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  // handleNameChange = (event) => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleTagChange = (event) => {
  //   this.setState({ tag: event.currentTarget.value });
  // };

  handleOnSubmit = (event) => {
    event.preventDefault();

    this.props.onHandlerSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.tagInputId}>
            Nickname
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange}
              id={this.tagInputId}
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Form;
