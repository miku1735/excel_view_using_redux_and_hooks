import { PUSH_DATA, PUSH_FILE, DELETE_ITEM } from "./actionType";

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
