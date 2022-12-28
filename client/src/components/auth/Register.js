import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
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

            <h4 className="text-5xl">
              <b>Register</b>
            </h4>
            <p className="py-5 text text-slate-500">
              Already have an account? <Link to="/login">Log in</Link>
            </p>

          <form noValidate onSubmit={this.onSubmit}>
            {/* full name */}
            <div className="input-field col s12">
              <label
                className="block text-gray-500 text-sm mb-2 mt-4"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                onChange={this.onChange}
                value={this.state.name}
                placeholder="Full Name"
                error={errors.name}
                id="name"
                type="text"
                className={classnames(
                  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  {
                    invalid: errors.name,
                  }
                )}
              />

              <span className="red-text">{errors.name}</span>
            </div>
            {/* email */}
            <div className="input-field col s12">
              <label
                className="block text-gray-500 text-sm mb-2 mt-4"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames(
                  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  {
                    invalid: errors.email,
                  }
                )}
              />

              <span className="red-text">{errors.email}</span>
            </div>
            {/* password */}
            <div className="input-field col s12">
              <label
                className="block text-gray-500 text-sm mb-2 mt-4"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames(
                  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  {
                    invalid: errors.password,
                  }
                )}
              />

              <span className="red-text">{errors.password}</span>
            </div>
            {/* confirm password */}
            <div className="input-field col s12">
              <label
                className="block text-gray-500 text-sm mb-2 mt-4"
                htmlFor="password2"
              >
                Confirm Password
              </label>
              <input
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                type="password"
                className={classnames(
                  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  {
                    invalid: errors.password2,
                  }
                )}
              />

              <span className="red-text">{errors.password2}</span>
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
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
