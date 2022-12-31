import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { MultiStepForm, Step } from "react-multi-form";
import "./dashboard.css";
import {InputStrap, HeaderLabel, OptionStrap} from "../forms/Formstrap";
import { yn, location, cargoType, oneOptions, twoOptions, trucktype, paymentMode, daysAfterDelivery, tnc, channel,disclaimer } from "../forms/options";

function Dashboard() {
  // onLogoutClick = (e) => {
  //   e.preventDefault();
  //   this.props.logoutUser();
  // };

  // const { user } = this.props.auth;
  const [active, setActive] = React.useState(1);

  const submit = e => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const newForm = e.target;
    const formData = new FormData(newForm);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <div className="container w-4/5 pt-5 mx-auto ">
      {/* <div className= "bg-white w-1/5 fixed flex-col shadow-md top-13  left-5 rounded-lg p-2 border">
        <p className="font-bold mb-1 text-sm ml-1 justify-center">Real Time Cargo Monitoring</p>
      <img alt="cas-broker-flyer" src="flyer.jpeg" className="rounded-lg "/>
      <div className="flex items-center mt-2 ml-2">
      </div>
      <div className="flex items-center mt-2 ml-2 flex-wrap">
        <p className="text-sm font-semibold ">Visit us: </p>
        <a className="font-sm font-medium text-gray-700 text-sm ml-1" href="https://www.casbroker.com">www.casbroker.com</a>
      </div>
      <div className="flex items-center mt-2 ml-2">
        <p className="text-sm font-medium">Cell:</p>
        <p className="font-medium text-gray-700 text-sm ml-1">0546664009</p>
      </div>
      <div className="flex  items-center mt-2 ml-2">
        <p className="font-medium text-gray-700 text-sm ml-1">info@casbroker.com</p>
      </div>
      </div>
      <div className= "bg-white w-1/5 shadow-md fixed flex-col top-13 right-5 rounded-lg p-2 border">
        <p className="font-bold text-xl ">Disclaimer</p>
        <p className="font-medium text-xs text-gray-700 ">
          {disclaimer}
        </p>
      </div> */}
      <form method="post" onSubmit={submit} defaultValue className="shadow-md">
        <MultiStepForm activeStep={active}>
          <Step label="one">
            <div className="form-container">
            <HeaderLabel label="Job Type"/>
            <div>
            <InputStrap text="Local"  name="jobType" type="checkbox"/>
            <InputStrap text="Transit" name="jobType" type="checkbox"/>
            </div>
            {/* <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate" />
                  <label label="" htmlFor="last_name">Last Name</label>
                </div> */}
            <HeaderLabel label="Place Of Loading"/>
            <OptionStrap name="placeOfLoading" options={oneOptions}/>
            <HeaderLabel name="cargoType" label="Cargo Type"/>
            <div>
            {
              cargoType.map((type, i) => <InputStrap key={i} name="cargoType" type="radio" text={type} /> )
            }
            </div>
            <HeaderLabel label="Pickup date"/>
            <InputStrap type="date" name="date" />
          </div>
          </Step>
          <Step label="Two">
            <HeaderLabel label="Pickup location" id="pickupLocation"/>
            <div>
              {
              location.map((l, i) => <InputStrap key={i} name="pickupLocation" text={l} type="radio"/>) 
              }
            </div>
            

            <HeaderLabel label="Destination"/>
            <InputStrap name="destination" type='text' sampletext="Drop off"/>
           
            <HeaderLabel label="Cargo description"/>
            <InputStrap name="cargoDescription" type='text' sampletext="Description"/>

            <HeaderLabel label="Container size"/>
              <OptionStrap name="containerSize" options={twoOptions}/>
          </Step>

          <Step label="Three">
            <HeaderLabel name="typeOfTruck" label="Type of truck needed"/>
            <div>
              {
              trucktype.map((type, i) => <InputStrap key={i} name="typeOfTruck" text={type} type="radio"/>) 
              }
            </div>
            
            <HeaderLabel label="Number of trucks"/>
            <InputStrap type='number' name="numberOfTrucks" sampletext=""/>
            <HeaderLabel label="Total weight of truck (kg)"/>
            <InputStrap type='number' name="totalWeightOfTruck" sampletext=""/>
          </Step>

          <Step label="Four">
            <HeaderLabel label="Do you prefer goods in transit insurance cover"/>
            <div>
            {
              yn.map((ans, i) => <InputStrap name="insuranceCover" key={i} type="radio" text={ans} /> )
            }
            </div>
            <HeaderLabel name="offer" label="Your offer per truck - GHC"/>
            <InputStrap text="Amount in Ghana cedis" type="number" name="amountOffered"/>

            <HeaderLabel name="paymentMode" label="Mode of payment"/>
            <div>
            {
                paymentMode.map((mode, i) => <InputStrap key={i} name="modeOfPayment" type="radio" text={mode} /> )
            }
            </div>
            <HeaderLabel label="Payments in how many days after delivery"/>
            
            <div>
            {
                daysAfterDelivery.map((day, d) => <InputStrap name="daysAfterDelivery" type="radio" key={d} text={day} /> )
            }
            </div>
            <HeaderLabel label="Free days end ( DEMURRAGE)"/>
            <InputStrap type="date" name="freeDaysEnd"/>
          </Step>

          <Step label="Five">
            <HeaderLabel name="blNumber" label="BL number"/>
            <InputStrap name="blNumber" sampletext="To monitor the free days" type="text"/>
            <HeaderLabel label="Channel: CRM"/>
            <div>
              {
                channel.map((ch, i) => <InputStrap key={i} type="checkbox" text={ch} name="channel"/>)
              }
            </div>
            <HeaderLabel label="Recievers contact"/>
            <InputStrap name="recieversContact" type="text" sampletext="Active cell number" />
          </Step>

          <Step label="Six">
              <div>
              <HeaderLabel label="Full name"/>
              <InputStrap name="fullname" type="text" sampletext="Enter your full name" />
              </div>
              <div>
              <HeaderLabel label="Company name"/>
              <InputStrap name="companyName" type="text" sampletext="Eg: CAS Broker" />
              </div>
              <div>
              <HeaderLabel label="Office address"/>
              <InputStrap name="officeAddress" type="text" sampletext="Address" />
              </div>
              <div>
              <HeaderLabel label="Contact"/>
              <InputStrap name="contact" type="text" sampletext="0200000000" />
              </div>
              <div>
              <HeaderLabel label="Email"/>
              <InputStrap name="email" type="text" sampletext="example@gmail.com" />
              </div>
          </Step>
          <Step label="Seven ">
            <HeaderLabel label="Terms and conditions"/>
            <div>
              {
                tnc.map((ans, i) => <InputStrap key={i} name="agreementOfTermsAndConditions" type="radio" text={ans} />)
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

      {active !== 1 && active!==7 && (
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
