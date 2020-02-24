import {
  PUSH_DATA,
  PUSH_FILE,
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_ITEM,
  DEL_MULTIPLE
} from "./actionType";

import { checkAllFull } from "./checkAllFull";
import { initialState } from "./initialState";

export const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_DATA:
      return {
        ...state,
        data: action.payload
      };

    case PUSH_FILE:
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
    case DEL_MULTIPLE:
      let data2 = [...state.data];
      for (let i = 0; i < action.payload.length; i++) {
        data2 = data2.filter(val => val.id !== action.payload[i].id);
      }
      return {
        ...state,
        data: [...data2]
      };

    default:
      return state;
  }
};
