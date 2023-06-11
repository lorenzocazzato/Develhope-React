import React from "react";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    this.props.onLogin({ username, password });
  };

  handleReset = () => {
    this.setState({ username: "", password: "" });
  };

  render() {
    const { username, password } = this.state;
    const isDisabled = username === "" || password === "";

    return (
      <div>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleInputChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <button
            type="button"
            onClick={this.handleLogin}
            disabled={isDisabled}
          >
            Login
          </button>
          <button type="button" onClick={this.handleReset}>
            Reset
          </button>
        </form>
      </div>
    );
  }
}
