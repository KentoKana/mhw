import React from "react";

const Weaknesses = ({ weaknesses }) => {
  const stars = numberOfStars => {
    let array = [];
    for (let i = 0; i < numberOfStars; i++) {
      array.push(<i className="fas fa-star" key={i}></i>);
    }
    return array;
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
                  {stars(weakness.stars).map(star => {
                    return star;
                  })}
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
