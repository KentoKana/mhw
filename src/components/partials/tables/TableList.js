import React from "react";
import TableRow from "../tables/TableRow";
/**
 * Creates a table for each heading  + child element in a single row.
 * @prop {Array} Array of headings.
 * @prop {Array} Array of jsx elements.
 *
 * The order of headings should match the order of elements in order to render them under the same column.
 */
const TableList = ({ headings, children }) => {
  return (
    <table>
      <thead>
        <TableRow rowType="th">
          {headings.map((heading, index) => {
            return <React.Fragment key={index}>{heading}</React.Fragment>;
          })}
        </TableRow>
      </thead>
      <tbody>
        <TableRow rowType="td">
          {children.map((component, index) => {
            return <React.Fragment key={index}>{component}</React.Fragment>;
          })}
        </TableRow>
      </tbody>
    </table>
  );
};

export default TableList;
