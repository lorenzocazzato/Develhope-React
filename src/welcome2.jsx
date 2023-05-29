import React from "react";

export default class Welcome2 extends React.Component {
  render() {
    return <p>Welcome {this.props.name}</p>;
  }
}

Welcome2.defaultProps = {
  name: "Lorenzo",
};
