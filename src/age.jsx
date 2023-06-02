import React from "react";

export default class Age extends React.Component {
  render() {
    const { età } = this.props;

    return <p> {età > 18 ? `Your age is ${età}` : "You are very young!"}</p>;

    // if (età > 18) {
    //   return <p>Your age is {età} </p>;
    // } else {
    //   return <p>You are very young!</p>;
    // }
  }
}
