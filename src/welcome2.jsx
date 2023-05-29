import React from "react";

export default class Welcome2 extends React.Component {
  render() {
    return <p>Welcome {this.props.name2}</p>;
  }
}

Welcome2.defaultProps = {
  name2: "Lorenzo",
};
