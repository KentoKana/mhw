import React from "react";

const Elements = ({ elements }) => {
  if (elements) {
    return (
      <table>
        <tbody>
          {elements.length > 0 ? (
            elements.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element}</td>
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

export const ElementsHeading = "Elements";

export default Elements;
