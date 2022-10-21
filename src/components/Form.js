import { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    tag: "",
  };

  handleChange = (event) => {
    const { name, defaultValue } = event.currentTarget;

    this.setState({
      [name]: defaultValue,
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
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              defaultValue={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            Nickname
            <input
              type="text"
              name="tag"
              defaultValue={this.state.tag}
              onChange={this.handleTagChange}
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Form;
