import React, { Component } from "react";
import XLSX from "xlsx";
import SimpleTable from "../Table/tab1";
class Detail extends Component {
  render() {
    return (
      <div>
        <input
          type="file"
          className="form-control"
          id="file"
          onChange={e => this.props.onChange(e)}
        ></input>
        <input
          type="submit"
          value="Upload"
          onClick={e => this.props.getData(e)}
        />
        <SimpleTable />
      </div>
    );
  }
}

export default Detail;
