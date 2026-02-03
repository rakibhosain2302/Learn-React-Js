import React from "react";
import Column from "./column.jsx";

const table = () => {
  return (
    <>
      <table className="table table-striped table-hover">
        <tbody>
          <tr>
            <Column />
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default table;
