import React from "react";
import CounterDisplay from "./counterdisplay";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: props.iniziale };

    setInterval(() => {
      this.setState((primoState) => {
        return { count: primoState.count + this.props.incremento };
      });
    }, this.props.intervallo);
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}
