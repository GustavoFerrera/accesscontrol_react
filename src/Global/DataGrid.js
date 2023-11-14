import React from "react";
import "./DataGrid.css";
const DataGrid = ({ csv }) => {
  if (!csv) {
    return null;
  }

  return (
    <table className="total">
      <thead>
        <tr>
          {csv.header.map((headerName) => (
            <th key={headerName}>{headerName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {csv.data.map((row, index) => (
          <tr key={index}>
            {row.map((col) => (
              <td key={col}>{col}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataGrid;
