import React from "react";

export default class Welcome extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        <p>Welcome, {name}!</p>
      </div>
    );
  }
}
