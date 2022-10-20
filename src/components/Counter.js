import React from "react";
import Controls from "./Controls";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  //     static propTypes = {}
  //   };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 10,
      };
    });
  };
  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 10,
      };
    });
  };

  render() {
    return (
      <>
        <div>
          <span>{this.state.value}</span>
        </div>
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </>
    );
  }
}
export default Counter;
