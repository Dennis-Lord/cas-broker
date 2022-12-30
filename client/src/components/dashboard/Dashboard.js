import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { MultiStepForm, Step } from "react-multi-form";
import "./dashboard.css";
import {InputStrap, HeaderLabel, OptionStrap} from "../forms/Formstrap";
import { yn, location, cargoType, oneOptions, twoOptions, trucktype, paymentMode, daysAfterDelivery, tnc, channel } from "../forms/options";

function Dashboard() {
  // onLogoutClick = (e) => {
  //   e.preventDefault();
  //   this.props.logoutUser();
  // };

  // const { user } = this.props.auth;
  const [active, setActive] = React.useState(1);

  const submit = e => {
    e.preventDefault();
    const form = e.target
    console.log(...new FormData(form).entries())
    console.log('submitted')
  }

  return (
    <div className="container w-3/4 pt-10 mx-auto ">
      <form onSubmit={submit}>
        <MultiStepForm activeStep={active}>
          <Step label="one">
            <div className="form-container">
            <HeaderLabel label="JOB TYPE"/>
            <div className="flex-div">
            <InputStrap text="Local" type="checkbox"/>
            <InputStrap text="Transit" type="checkbox"/>
            </div>
            {/* <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate" />
                  <label label="" htmlFor="last_name">Last Name</label>
                </div> */}
            <HeaderLabel label="Place Of Loading"/>
            <OptionStrap options={oneOptions}/>
            <HeaderLabel name="cargoType" label="Cargo Type"/>
            <div className="flex-div">
            {
              cargoType.map((type, i) => <InputStrap key={i} name="cargoType" type="radio" text={type} /> )
            }
            </div>
            <br />
            <HeaderLabel label="PICKUP DATE"/>
            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
            <input className="input-date" type="date"/>
          </div>
          </Step>
          <Step label="Two">
            <HeaderLabel label="PICKUP LOCATION" name="pickupLocation"/>
            <div className="flex-div">
              {
              location.map((l, i) => <InputStrap key={i} name="pickupLocation" text={l} type="radio"/>) 
              }
            </div>
            

            <HeaderLabel label="DESTINATION"/>
            <InputStrap type='text' sampletext="Drop off"/>
            <HeaderLabel label="CARGO DESCRIPTION"/>
            <InputStrap type='text' sampletext="Description"/>
            <HeaderLabel label="CONTAINER SIZE"/>
            
              <OptionStrap options={twoOptions}/>
          </Step>

          <Step label="Three">
            <HeaderLabel name="typeOfTruck" label="TYPE OF TRUCK NEEDED"/>
            <div className="flex-div">
              {
              trucktype.map((type, i) => <InputStrap key={i} name="typeOfTruck" text={type} type="radio"/>) 
              }
            </div>
            
            <HeaderLabel label="NUMBER OF TRUCKS"/>
            <InputStrap type='number' sampletext=""/>
            <HeaderLabel label="TOTAL WEIGHT OF TRUCK (KG)"/>
            <InputStrap type='number' sampletext=""/>
          </Step>

          <Step label="Four">
            <HeaderLabel label="DO YOU PREFER GOODS IN TRANSIT INSURANCE COVER"/>
            <div className="flex-div">
            {
              yn.map((ans, i) => <InputStrap name="insuranceCover" key={i} type="radio" text={ans} /> )
            }
            </div>
            <HeaderLabel name="offer" label="YOUR OFFER PER TRUCK - GHC"/>
            <InputStrap text="Amount in Ghana cedis" type="number" name="offer"/>

            <HeaderLabel name="paymentMode" label="MODE OF PAYMENT"/>
            <div className="flex-div">
            {
                paymentMode.map((mode, i) => <InputStrap key={i} name="paymentMode" type="radio" text={mode} /> )
            }
            </div>
            <HeaderLabel label="PAYMENTS IN HOW MANY DAYS AFTER DELIVERY"/>
            
            <div className="flex-div">
            {
                daysAfterDelivery.map((day, d) => <InputStrap name="daysAfterDelivery" type="radio" key={d} text={day} /> )
            }
            </div>
            <HeaderLabel label="FREE DAYS END ( DEMURRAGE)"/>
          </Step>

          <Step label="Five">
            <HeaderLabel name="blNumber" label="BL NUMBER"/>
            <InputStrap name="blNumber" sampletext="To monitor the free days" type="text"/>
            <HeaderLabel label="CHANNEL: CRM"/>
            <div className="flex-div">
              {
                channel.map((ch, i) => <InputStrap key={i} type="checkbox" text={ch} name="channel" />)
              }
            </div>
            <HeaderLabel label="RECEIVERS CONTACT"/>
            <InputStrap type="text" sampletext="Active cell number" />
          </Step>

          <Step label="Six">
            <div className="flex-div-alt">
              <div>
              <HeaderLabel label="FULL NAME"/>
              <InputStrap type="text" sampletext="Enter your full name" />
              </div>
              <div>
              <HeaderLabel label="COMPANY NAME"/>
              <InputStrap type="text" sampletext="Eg: CAS Broker" />
              </div>
              <div>
              <HeaderLabel label="OFFICE ADDRESS"/>
              <InputStrap type="text" sampletext="Address" />
              </div>
              <div>
              <HeaderLabel label="CONTACT"/>
              <InputStrap type="text" sampletext="0200000000" />
              </div>
              <div>
              <HeaderLabel label="EMAIL"/>
              <InputStrap type="text" sampletext="example@gmail.com" />
              </div>
            </div>
          </Step>
          <Step label="Seven ">
            <HeaderLabel name="tnc" label="TERMS AND CONDITIONS"/>
            <div className="flex-div">
              {
                tnc.map((ans, i) => <InputStrap key={i} name="tnc" type="radio" text={ans} />)
              }
            </div>
          </Step>
        </MultiStepForm>
        {active === 7 && (
        <button
          className="action-btn"
          style={{ float: "right" }}
          type="submit"
        >
          submit
        </button>
      )}
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
