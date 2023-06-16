import React from "react";

export default class UncontrolledLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      isDisabled: true,
    };
    this.usernameInputRef = React.createRef();
  }

  componentDidMount() {
    this.usernameInputRef.current.focus();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const isDisabled = !username || !password;
    this.setState({ isDisabled });
  };

  render() {
    return (
      <div>
        <h3>Uncontrolled Login</h3>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" ref={this.usernameInputRef} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />
          </div>
          <div>
            <label htmlFor="remember">Remember</label>
            <input type="checkbox" name="remember" />
          </div>
          <button name="login" type="submit" disabled={this.state.isDisabled}>
            Login
          </button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}
