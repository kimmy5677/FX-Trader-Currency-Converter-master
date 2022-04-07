/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

const Results = props => {
  // eslint-disable-next-line no-unused-vars
  const cancel = e => {
    props.setShowResults(false);
  };
  return (
    <div>
      <div className="row align-items-center justify-content-center mt-3">
        <h4 className="text-center font-weight-bold">
          {props.results.amount} {props.results.base} ={" "}
        </h4>
      </div>
      <div className="row align-items-center justify-content-center mt-3">
        <h1 className="results text-center display-4">
          {props.results.calculated}&nbsp;{props.results.convertTo}
        </h1>
      </div>
      <div className="row align-items-center justify-content-center mt-3">
        <div className="btn-group btn-group-lg" role="group">
          {/* <button type="button" className="btn px-5 py-2 reserve-btn">
            Reserve
          </button> */}
          <button
            onClick={e => cancel(e)}
            type="button"
            className="btn btn-secondary bg-transparent text-white cancel-btn"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="row align-items-center justify-content-center mt-5">
        <h5 className="text-center exchange-rate">
          1 {props.results.base} = {props.results.sell}{" "}
          {props.results.convertTo} | 1 {props.results.convertTo} ={" "}
          {props.results.buy} {props.results.base}
        </h5>
      </div>
      <div className="row align-items-center justify-content-center mt-4">
        <h5 className="text-uppercase text-center  font-weight-bold ">
          Effective Date: {props.results.date}
        </h5>
      </div>
      <div className="row  align-items-center justify-content-center mt-4">
        <small className="text-center">
          *Switch between cheque and cash for your currency conversions. Rates
          are subject to change without notice.
        </small>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    results: state.main.results
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setShowResults: status => {
      dispatch({ type: "SET_SHOW_RESULTS", payload: status });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
