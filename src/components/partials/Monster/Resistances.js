import React from "react";

const Resistances = ({ resistances }) => {
  if (resistances) {
    return (
      <table>
        <tbody>
          {resistances.length > 0 ? (
            resistances.map((resistance, index) => {
              return (
                <tr key={index}>
                  <td>{resistance.element}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>N/A</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  } else {
    return <></>;
  }
};
export const ResistancesHeading = "Resistanes";

export default Resistances;
