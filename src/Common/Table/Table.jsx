import React, { useState } from "react";
import "./Table.css";

const Table = ({ data, columns,maxHeight }) => {
  const[height,setheight]=useState(maxHeight)
  return (
    <div className="TableWhole">
      <div className="TableContainer" style={{maxHeight:height}}>
        <div className="table-container">
          <div className="table-row header">
            {columns.map((column, index) => (
              <div key={index} className="table-cell">
                {column.Header}
              </div>
            ))}
          </div>
          {data.map((row, rowIndex) => (
            <div className="table-row" key={rowIndex}>
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="table-cell">
                  {row[column.Datakey]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
