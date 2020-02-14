import React, { Component } from "react";
import XLSX from "xlsx";
class Detail extends Component {
  render() {
    return (
      <div>
        <input type="file" className="form-control" id="file"></input>
        <input type="submit" value="Upload" />
      </div>
    );
  }
}

export default Detail;
