import {
  PUSH_DATA,
  PUSH_FILE,
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_ITEM
} from "./actionType";

export const pushData = data => {
  return {
    type: PUSH_DATA,
    payload: data
  };
};
export const pushFile = file => {
  // console.log(file);
  return {
    type: PUSH_FILE,
    payload: file
  };
};

export const deleteItem = data => {
  return {
    type: DELETE_ITEM,
    payload: data
  };
};

export const addItem = (data, len) => {
  return {
    type: ADD_ITEM,
    payload: data,
    colLength: len
  };
};

export const updateItem = (newData, oldData) => {
  return {
    type: UPDATE_ITEM,
    newData: newData,
    oldData: oldData
  };
};
