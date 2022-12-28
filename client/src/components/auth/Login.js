import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="h-full w-96 mx-auto flex flex-row items-center justify-center">
        <div className="w-full">
          {/* <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link> */}
          {/* <div className="col s12" style={{ paddingLeft: "11.250px" }}> */}
          <h4 className="text-5xl">
            <b>Login</b>
          </h4>
          <p className="py-5 text-slate-500">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
          {/* </div> */}
          <form noValidate onSubmit={this.onSubmit}>
            <div className="input-field col s12">
              <label
                className="block text-gray-500 text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={this.onChange}
                placeholder="Email"
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames(
                  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  {
                    invalid: errors.email || errors.emailnotfound,
                  }
                )}
              />

              <label
                className="block text-gray-500 text-sm mb-2 mt-4"
                htmlFor="password"
              >
                Password
              </label>
              <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
              </span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.password}
                placeholder="Password"
                error={errors.password}
                id="password"
                type="password"
                className={classnames(
                  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  {
                    invalid: errors.password || errors.passwordincorrect,
                  }
                )}
              />

              <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
              </span>
            </div>

            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
