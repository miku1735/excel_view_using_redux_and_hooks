import React, { Component, useState } from "react";
import Nav from "./nav";
import Internal from "./internal";
import Details from "./details";
import XLSX from "xlsx";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { pushData, pushFile } from "../redux";

const Base = props => {
  let onChange = ({ target: { files } }) => {
    props.pushFile(files[0]);
  };

  let getData = () => {
    const reader = new FileReader();
    reader.onload = e => {
      // console.log(reader);
      const res = reader.result;
      const wb = XLSX.read(res, { type: "binary" });
      // console.log(wb);
      const sn = wb.SheetNames[0];
      // console.log(sn);
      const ws = wb.Sheets[sn];
      // console.log(ws);
      let data = XLSX.utils.sheet_to_json(ws);
      // setState({ data: data });
      data = data.map((val, idx) => {
        return { ...val, id: idx + 1 };
      });
      props.pushData(data);
      // console.log(state.data);
    };
    reader.readAsBinaryString(props.file);
  };

  return (
    <Router>
      <div>
        <Nav />
        <Redirect from="/" to="details" />
        <Route path="/details">
          <Details onChange={onChange} getData={getData} />
        </Route>
        <Route path="/internal" component={Internal}>
          <Internal onChange={onChange} getData={getData} />
        </Route>
      </div>
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    file: state.file,
    columns: state.columns,
    data: state.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    pushData: data => dispatch(pushData(data)),
    pushFile: file => dispatch(pushFile(file))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Base);
