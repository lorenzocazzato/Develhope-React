import React from "react";

export default class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.iniziale,
    };
  }

  eventHandler = () => {
    this.setState((state) => {
      return { count: state.count + this.props.incremento };
    });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.eventHandler}>Click </button>
      </div>
    );
  }
}
