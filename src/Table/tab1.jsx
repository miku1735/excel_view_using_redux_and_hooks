import React from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { pushData, pushFile, deleteItem } from "../redux/push/action";
const SimpleTable = props => {
  console.log({ props });
  return (
    <MaterialTable
      title="Editable Table"
      columns={props.columns}
      data={props.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              props.pushData(prevState => {
                console.log(prevState);
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                props.pushData(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              props.deleteItem(oldData);
            });
          })
      }}
    />
  );
};
const mapStateToProps = state => {
  console.log({ state });
  return {
    file: state.file,
    columns: state.columns,
    data: state.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    pushData: data => dispatch(pushData(data)),
    pushFile: file => dispatch(pushFile(file)),
    deleteItem: item => dispatch(deleteItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTable);
