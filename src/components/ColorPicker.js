import { Component } from "react";

class ColorPicker extends Component {
  state = {
    activeOptionId: 0,
  };

  setActiveId = (index) => {
    this.setState({ activeOptionId: index });
  };

    render() {
        const { activeOptionId } = this.state
        const {options} = this.props
    const { label } = options[activeOptionId];

    return (
      <>
        <div>
          <h2>ColorPicker</h2>
          <p>Chosen color: {label}</p>
        </div>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className="Colorname"
                style={{
                  cursor: "pointer",
                  backgroundColor: color,
                  border:
                    index === activeOptionId
                      ? "5px solid black"
                      : "none",
                }}
                onClick={() => this.setActiveId(index)}
              ></button>
            );
          })}
        </div>
      </>
    );
  }
}

export default ColorPicker;
