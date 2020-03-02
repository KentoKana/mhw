import React from "react";

const Materials = ({ materials }) => {
  if (materials) {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((material, index) => {
              return (
                <tr key={index}>
                  <td>{material.item.name}</td>
                  <td>{material.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  } else {
    return <></>;
  }
};

export default Materials;
