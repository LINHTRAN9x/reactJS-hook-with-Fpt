import React from "react";

class TodoList extends React.Component {
  state = {
    color: "grey",
    backgroundColor: "blue",
  };

  colorOptions = {
    red: "red",
    Green: "green",
    blue: "blue",
    purple: "purple",
  };

  colorBackground = {
    red: "green",
    Green: "red",
    blue: "purple",
    purple: "blue",
  };

  colorChangeHandle = (event) => {
    const selectedColor = this.colorOptions[event.target.value];
    const selectedBackground = this.colorBackground[event.target.value];
    console.log(selectedColor);
    this.setState({
      color: selectedColor,
      backgroundColor: selectedBackground,
    });
  };

  render() {
    return (
      <>
        <label htmlFor="cars">Choose a Color:</label>

        <select id="cars" onChange={this.colorChangeHandle}>
          <option value="Select">Select..</option>
          <option value="red">Red</option>
          <option value="Green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Puple</option>
        </select>
        <div
          style={{
            color: this.state.color,
            background: this.state.backgroundColor,
          }}
        >
          Color change inside here
        </div>
      </>
    );
  }
}

export default TodoList;
