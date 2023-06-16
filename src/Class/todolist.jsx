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
    this.setState({ inputValue: "" });
  };

  handleButtonRemove = (event, item) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((value) => value !== item),
    }));
  };

  render() {
    const { inputValue } = this.state;
    const { render } = this.props;

    return (
      <div>
        {render(this.state.items, this.handleButtonRemove)}

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
