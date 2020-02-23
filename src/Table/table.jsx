import React from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import {
  pushData,
  pushFile,
  deleteItem,
  addItem,
  updateItem
} from "../redux/push/action";
const SimpleTable = props => {
  return (
    <MaterialTable
      title={"Editable Table"}
      columns={props.column}
      data={props.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              props.dispatch(addItem(newData, props.column));
            });
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                props.dispatch(updateItem(newData, oldData));
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                props.dispatch(deleteItem(oldData));
              }
            });
          })
      }}
      options={props.options}
      actions={[
        {
          tooltip: "Remove All Selected Users",
          icon: "delete",
          onClick: (evt, data) =>
            alert("You want to delete " + data.length + " rows")
        }
      ]}
    />
  );
};
export default SimpleTable;
