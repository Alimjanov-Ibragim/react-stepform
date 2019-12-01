import React, { Component } from "react";

class PersonalInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { handleChange, firstName, lastName } = this.props;
    return (
      <>
        <h2>Enter your personal information:</h2>
        <label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange("firstName")}
          />
        </label>
        <label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleChange("lastName")}
          />
        </label>
        <button className="Next" onClick={this.continue}>
          Next &raquo;
        </button>
      </>
    );
  }
}

export default PersonalInfo;
