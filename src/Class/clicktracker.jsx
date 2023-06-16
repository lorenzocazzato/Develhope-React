import React from "react";

export default class ClickTracker extends React.Component {
  state = {
    lastClicked: " ",
  };

  eventHandler = (event) => {
    this.setState({ lastClicked: event.target.innerText });
  };

  render() {
    return (
      <div>
        <button onClick={this.eventHandler}>Click1</button>
        <button onClick={this.eventHandler}>Click2</button>
        <button onClick={this.eventHandler}>Click3</button>
        <h1>Last Clicked: {this.state.lastClicked}</h1>
      </div>
    );
  }
}
