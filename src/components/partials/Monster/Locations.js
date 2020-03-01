import React from "react";

const Locations = ({ locations }) => {
  if (locations) {
    return (
      <table>
        <tbody>
          {locations.map((location, index) => {
            return (
              <tr key={index}>
                <td>{location.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return <></>;
  }
};

export const LocationsHeading = "Locations";

export default Locations;
