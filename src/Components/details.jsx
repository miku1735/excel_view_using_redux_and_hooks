import React, { Component } from "react";
import SimpleTable from "../Table/table";
import "./css/index.css";
import { useSelector, useDispatch } from "react-redux";
import { delMultiple } from "../redux/push/action";
const Detail = props => {
  let detailProps = {
    column: useSelector(state => state.columns_tab1),
    data: useSelector(state => state.data),
    dispatch: useDispatch(),
    options: { selection: true },
    actions: [
      {
        tooltip: "Remove All Selected Users",
        icon: "delete",
        onClick: (evt, data) => {
          alert("You want to delete " + data.length + " rows");
          detailProps.dispatch(delMultiple(data));
        }
      }
    ]
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
