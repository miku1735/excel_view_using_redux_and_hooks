import Check from "../../Components/check";
import React, { Component } from "react";

export const initialState = {
  file: {},
  columns_tab1: [
    { title: "FULL_NAME", field: "fullName" },
    { title: "Disease", field: "Disease" },
    { title: "Time_Passed", field: "timePassed", type: "numeric" },
    { title: "Medicine_Taken", field: "medicineTaken" }
  ],
  columns_tab2: [
    { title: "FULL_NAME", field: "fullName", editable: "never" },
    { title: "Disease", field: "Disease", editable: "never" },
    {
      title: "Time_Passed",
      field: "timePassed",
      type: "numeric",
      editable: "never"
    },
    { title: "Medicine_Taken", field: "medicineTaken", editable: "never" },
    {
      title: "Doctor_Name",
      field: "Doctor",
      lookup: { 1: "Sourabh", 2: "Ritesh", 3: "Sajan" }
    },
    { title: "Hospital_Name", field: "hospitalName" },
    { title: "Appointment_Date", field: "appointmentDate", type: "date" },
    {
      title: "Custom_Component",
      field: "customComponent",
      editComponent: props => <Check />
    }
  ],
  data: [
    {
      fullName: "MAYANK",
      Disease: "MAD",
      timePassed: 23,
      medicineTaken: "Nothing"
    }
  ]
};
