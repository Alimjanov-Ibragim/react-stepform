import React, { Component } from "react";

class JobDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { handleChange, jobTitle, jobCompany, jobLocation } = this.props;
    return (
      <>
        <h2>Enter your job information:</h2>
        <label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={jobTitle}
            onChange={handleChange("jobTitle")}
          />
        </label>
        <label>
          <input
            type="text"
            name="jobCompany"
            placeholder="Job Company"
            value={jobCompany}
            onChange={handleChange("jobCompany")}
          />
        </label>
        <label>
          <input
            type="text"
            name="jobLocation"
            placeholder="Job Location"
            value={jobLocation}
            onChange={handleChange("jobLocation")}
          />
        </label>
        <button className="Back" onClick={this.back}>
          Prev &laquo;
        </button>
        <button className="Next" onClick={this.continue}>
          Next &raquo;
        </button>
      </>
    );
  }
}

export default JobDetails;
