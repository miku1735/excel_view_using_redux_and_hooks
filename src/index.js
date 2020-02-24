import React from "react";
import ReactDOM from "react-dom";
import Base from "./Components/Base.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <Base />
  </Provider>,
  document.getElementById("root")
);
