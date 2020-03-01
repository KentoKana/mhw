import React from "react";

const Weaknesses = ({ weaknesses }) => {
  const Stars = ({ numberOfStars }) => {
    return [...Array(numberOfStars)].map((e, index) => (
      <i className="fas fa-star" key={index}></i>
    ));
  };
  if (weaknesses) {
    return (
      <table>
        <tbody>
          {weaknesses.map((weakness, index) => {
            return (
              <tr key={index}>
                <td>{weakness.element}</td>
                <td>
                  <Stars numberOfStars={weakness.stars} />
                </td>
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

export const WeaknessesHeading = "Weaknesses";
export default Weaknesses;
