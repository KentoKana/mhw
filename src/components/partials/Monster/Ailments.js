import React from "react";

const Ailments = ({ ailments }) => {
  if (ailments) {
    return (
      <table>
        <tbody>
          {ailments.length > 0 ? (
            ailments.map((ailment, index) => {
              return (
                <React.Fragment key={index}>
                  <tr>
                    <th>{ailment.name}</th>
                    <td>{ailment.description}</td>
                  </tr>
                </React.Fragment>
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

export const AilmentsHeading = "Ailments";

export default Ailments;
