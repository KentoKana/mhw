import React from "react";

const Table = ({ headings, children }) => {
  return (
    <table>
      <thead>
        <tr>
          {headings.map((heading, index) => {
            return <th key={index}>{heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {children.map((component, index) => {
            return <td key={index}>{component}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
