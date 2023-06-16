import React from "react";
import Age from "./age";

export default class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <p>Welcome, {name}!</p>
        {age > 18 ? <Age age={age} /> : "You are very young!"}
      </div>
    );
  }
}
