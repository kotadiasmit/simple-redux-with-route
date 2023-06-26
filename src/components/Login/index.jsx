import { Component } from "react";
import "./index.scss";
import { Navigate } from "react-router-dom";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { addUser, isLoginSuccess } from "../store/reducer";
import { connect } from "react-redux";

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
    const userDetails = { username: "Smit", password: "12345" };

    if (
      userDetails.username === username &&
      userDetails.password === password
    ) {
      this.setState({
        showSubmitError: false,
        errorMsg: "",
        loginSuccess: true,
      });
      //to use dispatch in class component
      this.props.isLoginSuccess(true);
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
          <div className="pass-input-container">
            <input
              className="password-input"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              value={password}
              onChange={this.onChangePassword}
              id="password"
            ></input>
            {showPassword ? (
              <VscEye className="show-password" onClick={this.onShowPassword} />
            ) : (
              <VscEyeClosed
                className="show-password"
                onClick={this.onShowPassword}
              />
            )}
          </div>
          {showSubmitError && (
            <p className="error-msg">
              <sup>*</sup>
              {errorMsg}
            </p>
          )}

          <button type="submit" className="btn btn-primary mt-3">
            Login
          </button>
        </form>
      </div>
    );
  }
}

// to use dispatch in class component
const mapDispatchToProps = {
  isLoginSuccess: isLoginSuccess,
  addUser: addUser,
};

export default connect(null, mapDispatchToProps)(Login);
