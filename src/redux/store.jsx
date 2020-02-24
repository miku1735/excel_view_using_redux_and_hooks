import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { actionReducer } from "./push/actionReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  actionReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
