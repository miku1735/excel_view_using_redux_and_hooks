import { PUSH_DATA, PUSH_FILE, DELETE_ITEM } from "./actionType";

const initialState = {
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
    default:
      return state;
  }
};
