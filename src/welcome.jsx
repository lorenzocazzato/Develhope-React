import React from "react";
import Age from "./age";

export default class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <p>Welcome, {name}!</p>

        {age > 18 && age < 65 ? <Age age={age} /> : false}
      </div>
    );
  }
}
