import React from "react";
/**
 * Wraps <tr> and <th> or <td> elements around its children
 * @prop {JSX} children JSX expression to wrap the tr with
 * @prop {String} rowType Required. td, th
 * @prop {String} className class name of the table row element
 */
const TableRow = ({ children, rowType, className }) => {
  switch (rowType) {
    case "th":
      return (
        <tr className={className}>
          {children.map((child, index) => {
            return <th key={index}>{child}</th>;
          })}
        </tr>
      );

    case "td":
      return (
        <tr className={className}>
          {children.map((child, index) => {
            return <td key={index}>{child}</td>;
          })}
        </tr>
      );

    default:
      return;
  }
};

export default TableRow;
