import React from "react";

export default class Age extends React.Component {
  render() {
    const { age } = this.props;
    return <p>Your age is {age} </p>;
  }
}
