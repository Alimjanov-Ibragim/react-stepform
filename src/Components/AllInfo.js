import React, { Component } from "react";

class AllInfo extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      firstName,
      lastName,
      jobTitle,
      jobCompany,
      jobLocation
    } = this.props;
    return (
      <>
        <h2>Entered information:</h2>
        <div className="all-info">
          <div className="hr">
            First name: <b>{firstName}</b>
          </div>
          <div className="hr">
            Last name: <b>{lastName}</b>
          </div>
          <div className="hr">
            Job: <b>{jobTitle}</b>
          </div>
          <div className="hr">
            Company: <b>{jobCompany}</b>
          </div>
          <div className="hr">
            Lacation: <b>{jobLocation}</b>
          </div>
        </div>
        <button className="Back" onClick={this.back}>
          Prev &laquo;
        </button>
      </>
    );
  }
}

export default AllInfo;
