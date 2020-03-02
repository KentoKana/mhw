import React from "react";
const Assets = ({ assets, headings }) => {
  if (assets) {
    return (
      <table>
        <thead>
          <tr>
            <th>Male</th>
            <th>Female</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {assets.imageMale ? (
                <img src={assets.imageMale} alt={assets.name} />
              ) : (
                <p>Resource Not Available</p>
              )}
            </td>
            <td>
              {assets.imageFemale ? (
                <img src={assets.imageFemale} alt={assets.name} />
              ) : (
                <p>Resource Not Available</p>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    return <></>;
  }
};

export default Assets;
