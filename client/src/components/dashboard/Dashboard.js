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
    <div className="container w-3/4 pt-10 mx-auto ">
      <form>
        <MultiStepForm activeStep={active}>
          <Step label="one">
            <label>Job Type</label>
            <div>
              <input type="checkbox" />
              <span>Local</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Transmit</span>
            </div>
            {/* <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate" />
                  <label htmlFor="last_name">Last Name</label>
                </div> */}
            <label>Place Of Loading</label>
            <div>
              <select>
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="Tema">Tema Port</option>
                <option value="Takoradi">Takoradi Port</option>
                <option value="Outside">Outside</option>
              </select>
            </div>
            <label>Cargo Type</label>
            <div>
              <input type="radio" name="jobType" />
              <span>Container</span>
            </div>
            <div>
              <input type="radio" name="jobType" />
              <span>Bulk</span>
            </div>
            <div>
              <input type="radio" name="jobType" />
              <span>Other</span>
            </div>
            <br />
            PICKUP DATE
          </Step>

          <Step label="Two">
            <label>PICKUP LOCATION</label>
            <div>
              <input type="radio" name="pickupLocation" />
              <span>MPS</span>
            </div>
            <div>
              <input type="radio" name="pickupLocation" />
              <span>GJT</span>
            </div>
            <div>
              <input type="radio" name="pickupLocation" />
              <span>TBT</span>
            </div>
            <div>
              <input type="radio" name="pickupLocation" />
              <span>MAIN PORT</span>
            </div>
            <div>
              <input type="radio" name="pickupLocation" />
              <span>REFEER</span>
            </div>
            <div>
              <input type="radio" name="pickupLocation" />
              <span>AMARIS</span>
            </div>
            <div>
              <input type="radio" name="pickupLocation" />
              <span>Other</span>
            </div>

            <label>DESTINATION</label>
            <br />
            <input type="text" placeholder="DROP OFF" />
            <br />
            <label>CARGO DESCRIPTION</label>
            <br />
            <input type="text" placeholder="" />
            <br />
            <label>CONTAINER SIZE</label>
            <div>
              <select>
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="40ft">40ft Port</option>
                <option value="20ft">20ft Port</option>
                <option value="Bulk">Bulk</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </Step>

          <Step label="Three">
            <label>TYPE OF TRUCK NEEDED</label>
            <div>
              <input type="radio" name="typeOfTruck" />
              <span>40FT FLATBED</span>
            </div>
            <div>
              <input type="radio" name="typeOfTruck" />
              <span>20FT FLATBED</span>
            </div>
            <div>
              <input type="radio" name="typeOfTruck" />
              <span>Both (40ft&20ft)</span>
            </div>
            <div>
              <input type="radio" name="typeOfTruck" />
              <span>SELF LOADER 20FT</span>
            </div>
            <div>
              <input type="radio" name="typeOfTruck" />
              <span>SELF LOADER 40FT</span>
            </div>
            <div>
              <input type="radio" name="typeOfTruck" />
              <span>Other</span>
            </div>
            <label>NUMBER OF TRUCKS</label>
            <br />
            <input type="text" placeholder="" />
            <br />
            <label>TOTAL WEIGHT TRUCK (KG)</label>
            <br />
            <input type="text" placeholder="" />
            <br />
          </Step>

          <Step label="Four">
            <label>DO YOU PREFER GOODS IN TRANSIT INSURANCE COVER</label>
            <div>
              <input type="radio" name="insuranceCover" />
              <span>Yes</span>
            </div>
            <div>
              <input type="radio" name="insuranceCover" />
              <span>No</span>
            </div>
            <label>YOUR OFFER PER TRUCK - GHC</label>
            <br />
            <input type="text" />
            <br />
            <label>MODE OF PAYMENT</label>
            <div>
              <input type="radio" name="paymentMode" />
              <span>Cash</span>
            </div>
            <div>
              <input type="radio" name="paymentMode" />
              <span>Cheque</span>
            </div>
            <div>
              <input type="radio" name="paymentMode" />
              <span>Momo</span>
            </div>
            <label>PAYMENTS IN HOW MANY DAYS AFTER DELIVERY</label>
            <div>
              <input type="radio" name="daysAfterDelivery" />
              <span>1 DAY</span>
            </div>
            <div>
              <input type="radio" name="daysAfterDelivery" />
              <span>2-3 DAYS</span>
            </div>
            FREE DAYS END ( DEMURRAGE)
          </Step>

          <Step label="Five">
            <label>BL NUMBER</label>
            <br />
            <input type="text" placeholder="To monitor the free days" />
            <br />
            <label>CHANNEL: CRM</label>
            <div>
              <input type="checkbox" />
              <span>Green</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Yellow</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Red</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Other</span>
            </div>
            <label>RECEIVERS CONTACT</label>
            <br />
            <input type="text" placeholder="Active cell number" />
            <br />
          </Step>
          <Step label="Six">
            <label>FULL NAME</label>
            <br />
            <input type="text" />
            <br />
            <label>COMPANY NAME</label>
            <br />
            <input type="text" />
            <br />
            <label>OFFICE ADDRESS</label>
            <br />
            <input type="text" />
            <br />
            <label>CONTACT</label>
            <br />
            <input type="text" />
            <br />
            <label>EMAIL</label>
            <br />
            <input type="text" />
            <br />
          </Step>
          <Step label="Seven ">
            <label>TERMS AND CONDITIONS</label>
            <div>
              <input type="radio" name="tnc" />
              <span>I Agree</span>
            </div>
            <div>
              <input type="radio" name="tnc" />
              <span>I Don't Agree</span>
            </div>
          </Step>
        </MultiStepForm>
      </form>

      {active !== 1 && (
        <button className="action-btn" onClick={() => setActive(active - 1)}>
          Previous
        </button>
      )}
      {active !== 7 && (
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

export default connect(mapStateToProps, { logoutUser })(Dashboard);
