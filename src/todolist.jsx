import React from "react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Lore", "Vasco", "Gabri"],
      inputValue: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleButtonClick = (event) => {
    let { items, inputValue } = this.state;
    const updatedItems = [...items, inputValue];
    this.setState({ items: updatedItems });
    this.setState({ inputValue: " " });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={this.handleButtonClick}>GO</button>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
