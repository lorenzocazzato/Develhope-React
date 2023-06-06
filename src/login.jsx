import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleButtonClick = (event) => {
    event.preventDefault();
    const button1 = document.querySelector("#buttsubmit");
    if (this.state.username.length && this.state.password.length) {
      button1.disabled = false;
    } else {
      button1.disabled = true;
    }
  };

  handleButtonReset = (event) => {
    this.setState = {
      username: "",
      password: "",
    };
  };

  render() {
    return (
      <div>
        <form id="form">
          <label htmlFor="namein">Nome</label>

          <input
            id="namein"
            type="text"
            name="username"
            onChange={this.handleInputChange}
          />

          <label htmlFor="passin">Password</label>
          <input
            id="passin"
            type="password"
            name="password"
            onChange={this.handleInputChange}
          />

          <button
            id="buttsubmit"
            disabled={!this.state.username || !this.state.password}
            onClick={this.handleButtonClick}
          >
            Login
          </button>

          <button id="buttreset" onClick={this.handleButtonReset}>
            Reset
          </button>
        </form>
      </div>
    );
  }
}
