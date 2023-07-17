import React from "react";

export default function Table(props) {
  const table = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    border: "3px solid red",
  };
  return (
    <React.Fragment>
      <h2> TableData</h2>

      <table style={table}>
        <tr>
          <th> company </th>
          <th>Location</th>
        </tr>
        <tr>{props.children}</tr>
      </table>
    </React.Fragment>
  );
}
