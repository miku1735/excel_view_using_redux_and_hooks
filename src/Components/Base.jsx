import React, { Component, useState } from "react";
import Nav from "./nav";
import Internal from "./internal";
import Details from "./details";
import XLSX from "xlsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
var getData = (e, state, setState) => {
  /* Boilerplate to set up FileReader */
  const reader = new FileReader();
  reader.onload = e => {
    console.log(reader);
    const res = reader.result;
    const wb = XLSX.read(res, { type: "binary" });
    console.log(wb);
    const sn = wb.SheetNames[0];
    console.log(sn);
    const ws = wb.Sheets[sn];
    console.log(ws);
    const data = XLSX.utils.sheet_to_json(ws);
    setState({ data: data });
    console.log(state.data);
  };

  reader.readAsBinaryString(state.file);
};
export default function Base() {
  const [state, setState] = React.useState({
    file: {},
    columns: [
      { title: "FULL_NAME", field: "fullName" },
      { title: "Disease", field: "Disease" },
      { title: "Time_Passed", field: "timePassed", type: "numeric" },
      { title: "Medicine_Taken", field: "medicineTaken" },
      { title: "Doctor", field: "Doctor" }
    ],
    data: [
      {
        fullName: "MAYANK",
        Disease: "MAD",
        timePassed: 23,
        medicineTaken: "Nothing",
        Doctor: "Himself"
      }
    ]
  });
  let onChange = ({ target: { files } }) => {
    var column = state.columns;
    setState({
      columns: column,
      file: files[0]
    });
  };
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/details">
          <Details
            state={state}
            setState={setState}
            onChange={onChange}
            getData={getData}
          />
        </Route>
        <Route path="/internal" component={Internal}>
          <Internal
            state={state}
            setState={setState}
            onChange={onChange}
            getData={getData}
          />
        </Route>
      </div>
    </Router>
  );
}
