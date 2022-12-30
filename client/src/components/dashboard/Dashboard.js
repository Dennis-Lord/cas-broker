import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { MultiStepForm, Step } from "react-multi-form";
import "./dashboard.css";
import {CheckboxStrap, HeaderLabel, OptionStrap} from "../forms/Formstrap";
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
            <CheckboxStrap text="Local" type="checkbox"/>
            <CheckboxStrap text="Transit" type="checkbox"/>
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
              cargoType.map((type, i) => <CheckboxStrap key={i} name="cargoType" type="radio" text={type} /> )
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
              location.map((l, i) => <CheckboxStrap key={i} name="pickupLocation" text={l} type="radio"/>) 
              }
            </div>
            

            <HeaderLabel label="DESTINATION"/>
            <CheckboxStrap type='text' sampletext="Drop off"/>
            <HeaderLabel label="CARGO DESCRIPTION"/>
            <CheckboxStrap type='text' sampletext="Description"/>
            <HeaderLabel label="CONTAINER SIZE"/>
            
              <OptionStrap options={twoOptions}/>
          </Step>

          <Step label="Three">
            <HeaderLabel name="typeOfTruck" label="TYPE OF TRUCK NEEDED"/>
            <div className="flex-div">
              {
              trucktype.map((type, i) => <CheckboxStrap key={i} name="typeOfTruck" text={type} type="radio"/>) 
              }
            </div>
            
            <HeaderLabel label="NUMBER OF TRUCKS"/>
            <CheckboxStrap type='text' sampletext=""/>
            <HeaderLabel label="TOTAL WEIGHT OF TRUCK (KG)"/>
            <CheckboxStrap type='text' sampletext=""/>
          </Step>

          <Step label="Four">
            <HeaderLabel label="DO YOU PREFER GOODS IN TRANSIT INSURANCE COVER"/>
            <div className="flex-div">
            {
              yn.map((ans, i) => <CheckboxStrap name="insuranceCover" key={i} type="radio" text={ans} /> )
            }
            </div>
            <HeaderLabel name="offer" label="YOUR OFFER PER TRUCK - GHC"/>
            <CheckboxStrap text="Amount in Ghana cedis" type="number" name="offer"/>

            <HeaderLabel name="paymentMode" label="MODE OF PAYMENT"/>
            <div className="flex-div">
            {
                paymentMode.map((mode, i) => <CheckboxStrap key={i} name="paymentMode" type="radio" text={mode} /> )
            }
            </div>
            <HeaderLabel label="PAYMENTS IN HOW MANY DAYS AFTER DELIVERY"/>
            
            <div className="flex-div">
            {
                daysAfterDelivery.map((day, d) => <CheckboxStrap name="daysAfterDelivery" type="radio" key={d} text={day} /> )
            }
            </div>
            <HeaderLabel label="FREE DAYS END ( DEMURRAGE)"/>
          </Step>

          <Step label="Five">
            <HeaderLabel name="blNumber" label="BL NUMBER"/>
            <CheckboxStrap name="blNumber" sampletext="To monitor the free days" type="text"/>
            <HeaderLabel label="CHANNEL: CRM"/>
            <div className="flex-div">
              {
                channel.map((ch, i) => <CheckboxStrap key={i} type="checkbox" text={ch} name="channel" />)
              }
            </div>
            <HeaderLabel label="RECEIVERS CONTACT"/>
            <CheckboxStrap type="text" sampletext="Active cell number" />
          </Step>

          <Step label="Six">
            <HeaderLabel label="FULL NAME"/>
            <CheckboxStrap type="text" sampletext="Enter your full name" />
            <HeaderLabel label="COMPANY NAME"/>
            <CheckboxStrap type="text" sampletext="Eg: CAS Broker" />

            <HeaderLabel label="OFFICE ADDRESS"/>
            <CheckboxStrap type="text" sampletext="Address" />

            <HeaderLabel label="CONTACT"/>
            <CheckboxStrap type="text" sampletext="0200000000" />

            <HeaderLabel label="EMAIL"/>
            <CheckboxStrap type="text" sampletext="example@gmail.com" />
          </Step>
          <Step label="Seven ">
            <HeaderLabel name="tnc" label="TERMS AND CONDITIONS"/>
            <div className="flex-div">
              {
                tnc.map((ans, i) => <CheckboxStrap key={i} name="tnc" type="radio" text={ans} />)
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
