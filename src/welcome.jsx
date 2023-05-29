import React from "react";

export default class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;

    return (
      <p>
        Welcome {name}, your age is {age}
      </p>
    );
  }
}
