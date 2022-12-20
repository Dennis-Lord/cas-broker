import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { MultiStepForm, Step } from "react-multi-form";
import "./dashboard.css";

function Dashboard() {
  // onLogoutClick = (e) => {
  //   e.preventDefault();
  //   this.props.logoutUser();
  // };

  // const { user } = this.props.auth;
  const [active, setActive] = React.useState(1);

  return (
    <div style={{ height: "75vh" }} className="container ">
      <MultiStepForm activeStep={active}>
        <Step label="one">
          <p>One</p>
        </Step>
        <Step label="Two">
          <p>Two</p>
        </Step>
        <Step label="Three">
          <p>Three</p>
        </Step>
      </MultiStepForm>

      {active !== 1 && (
        <button className="action-btn" onClick={() => setActive(active - 1)}>
          Previous
        </button>
      )}
      {active !== 3 && (
        <button
          className="action-btn"
          onClick={() => setActive(active + 1)}
          style={{ float: "right" }}
        >
          Next
        </button>
      )}
    </div>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
