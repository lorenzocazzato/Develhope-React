import React from "react";
import Welcome2 from "./welcome2";

export default class InteractiveWelcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
    };
  }

  handleInput = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <input type="text" value={name} onChange={this.handleInput} />
        <Welcome2 name2={name} />
      </div>
    );
  }
}
