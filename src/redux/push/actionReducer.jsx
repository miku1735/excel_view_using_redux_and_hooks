import {
  PUSH_DATA,
  PUSH_FILE,
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_ITEM
} from "./actionType";
import Popup from "../../Components/css/popup";

const initialState = {
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
    { title: "Appointment_Date", field: "appointmentDate", type: "date" }
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
const checkAllFull = (payload, len) => {
  console.log(Object.keys(payload).length, len);
  if (Object.keys(payload).length === len) return false;
  return true;
};

export const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_DATA:
      return {
        ...state,
        data: action.payload
      };

    case PUSH_FILE:
      console.log(action.payload);
      return {
        ...state,
        file: action.payload
      };

    case DELETE_ITEM:
      return {
        ...state,
        data: state.data.filter(val => val.id !== action.payload.id)
      };

    case ADD_ITEM:
      if (checkAllFull(action.payload, Object.keys(action.colLength).length)) {
        window.alert("Can't Update,Dont Have All Columns");
        return { ...state };
      }
      return {
        ...state,
        data: state.data.concat(action.payload)
      };

    case UPDATE_ITEM:
      const data1 = [...state.data];
      data1[data1.indexOf(action.oldData)] = action.newData;

      return {
        ...state,
        data: [...data1]
      };

    default:
      return state;
  }
};
