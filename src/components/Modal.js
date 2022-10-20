import React from "react";

class Modal extends React.Component {
  state = {
    visible: false,
  };

  render() {
    return (
      <>
        <div>
          <button>Open</button>
        </div>
        <div className="modal">
          <p>Hello world!!!</p>
        </div>
      </>
    );
  }
}
export default Modal;
