import React, { Component } from "react";

class Modal extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    return (
      <>
        <div>
          <button type="button" onMouseOver={this.toggle} onClick={this.toggle}>
            {visible ? "Close" : "Open"}
          </button>
        </div>
        {visible && (
          <div className="modal">
            <p>Hello world!!!</p>
          </div>
        )}
      </>
    );
  }
}

export default Modal;
