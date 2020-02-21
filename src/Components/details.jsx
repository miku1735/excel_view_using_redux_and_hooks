import React, { Component } from "react";
import XLSX from "xlsx";
import SimpleTable from "../Table/table";
class Detail extends Component {
  render() {
    return (
      <div>
        <SimpleTable />
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
      </div>
    );
  }
}

export default Detail;
