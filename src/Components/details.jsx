import React, { Component } from "react";
import SimpleTable from "../Table/table";
import "./css/index.css";
import { useSelector, useDispatch } from "react-redux";
const Detail = props => {
  let detailProps = {
    column: useSelector(state => state.columns_tab1),
    data: useSelector(state => state.data),
    dispatch: useDispatch(),
    options: {}
  };
  return (
    <div>
      <SimpleTable {...detailProps} />
      <div id="buttons">
        <input
          type="file"
          className="form-control"
          id="file"
          onChange={e => props.onChange(e)}
        ></input>
        <input
          type="submit"
          value="Upload"
          onClick={e => props.getData(e)}
          id="upload"
        />
      </div>
    </div>
  );
};

export default Detail;
