import React, { Component } from "react";
import SimpleTable from "../Table/table";
import { useSelector, useDispatch } from "react-redux";

const Internal = () => {
  let internalProps = {
    column: useSelector(state => state.columns_tab2),
    data: useSelector(state => state.data),
    dispatch: useDispatch(),
    actions: [],
    options: {
      exportButton: true
    }
  };
  return (
    <div>
      <SimpleTable {...internalProps} />
    </div>
  );
};
export default Internal;
