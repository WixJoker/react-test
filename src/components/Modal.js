import React from "react";

class Modal extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <>
        <div>
          <button type="button" onClick={this.toggle}>
            Toggle
          </button>
        </div>
        {this.state.visible && (
          <div className="modal">
            <p>Hello world!!!</p>
          </div>
        )}
      </>
    );
  }
}

export default Modal;
