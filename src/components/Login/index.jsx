import { Component } from "react";
import "./index.scss";
import { Navigate } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    showPassword: false,
    loginSuccess: false,
  };

  onChangeUsername = (event) => {
    const { value } = event.target;
    this.setState({ username: value });
  };

  onChangePassword = (event) => {
    const { value } = event.target;
    this.setState({ password: value });
  };

  onShowPassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username: "Smit", password: "123456789" };

    if (
      userDetails.username === username &&
      userDetails.password === password
    ) {
      this.setState({
        showSubmitError: false,
        errorMsg: "",
        loginSuccess: true,
      });
      console.log(this.props);
      const { setSuccessValue } = this.props;

      setSuccessValue();
    } else {
      this.onSubmitFailure("invalid access");
    }
  };

  render() {
    const {
      showSubmitError,
      errorMsg,
      username,
      password,
      showPassword,
      loginSuccess,
    } = this.state;

    if (loginSuccess) {
      return <Navigate replace to="/admin" />;
    }

    return (
      <div className="main-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <label className="label" htmlFor="username">
            User Name
          </label>
          <input
            className="input"
            type="text"
            id="username"
            placeholder="your name"
            maxLength="40"
            value={username}
            onChange={this.onChangeUsername}
            autoFocus
          />
          <label className="label" htmlFor="password">
            Location
          </label>
          <input
            className="input"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            value={password}
            onChange={this.onChangePassword}
            id="password"
          ></input>
          {showSubmitError && (
            <p className="error-msg">
              <sup>*</sup>
              {errorMsg}
            </p>
          )}
          <div>
            <input
              type="checkBox"
              id="show-password"
              value="Show Password"
              onChange={this.onShowPassword}
            />
            <label htmlFor="show-password" className="mb-3">
              Show Password
            </label>
          </div>
          <button type="submit" className="btn btn-primary ">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
