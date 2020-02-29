import React from "react";

const RenderElementsRecursively = (item, depth) => {
  if (item.constructor === Array) {
    const keys = Object.keys(item[0]);
    return (
      <table>
        <thead
          style={{
            color: "white",
            background: "black"
          }}
        >
          <tr>
            {keys.map((key, index) => {
              let label = key.replace(/([A-Z])/g, " $1");
              label = label.charAt(0).toUpperCase() + label.slice(1);
              if (label !== "Id") {
                return <th key={index}>{label}</th>;
              } else {
                return <></>;
              }
            })}
          </tr>
        </thead>
        <tbody>
          {item.map((prop, index) => {
            const keys = Object.keys(prop);
            return (
              <tr
                key={index}
                style={index % 2 === 0 ? { background: "lightgrey" } : {}}
              >
                {keys.map((k, index) => {
                  console.log(k);
                  if (prop[k]) {
                    if (prop[k].constructor !== Object) {
                      console.log(k);
                      if (k !== "id") {
                        return <td key={index}>{prop[k]}</td>;
                      } else {
                        return <></>;
                      }
                    } else {
                      return (
                        <td key={index}>
                          {RenderElementsRecursively(prop[k], depth + 1)}
                        </td>
                      );
                    }
                  } else {
                    return <></>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else if (item.constructor === Object) {
    const objectKeys = Object.keys(item);

    return (
      <table
        style={{
          listStyle: "none",
          maxWidth: "500px"
        }}
        className={`depth-${depth}`}
      >
        {objectKeys.map((key, index) => {
          let label = key.replace(/([A-Z])/g, " $1");
          label = label.charAt(0).toUpperCase() + label.slice(1);
          if (item[key] !== null) {
            if (key !== "id" && key !== "rewards") {
              return (
                <tbody key={index}>
                  <tr
                    key={index}
                    style={{ marginRight: "20px" }}
                    className={`sublist ${key}`}
                  >
                    <th className={key}>{label}</th>
                    <td>
                      {item[key].length !== 0 ? (
                        RenderElementsRecursively(item[key], depth + 1)
                      ) : (
                        <>N/A</>
                      )}
                    </td>
                  </tr>
                </tbody>
              );
            } else {
              return <React.Fragment key={index}></React.Fragment>;
            }
          } else {
            return (
              <React.Fragment key={index}>
                <thead>
                  <tr>
                    <th>
                      <strong className={key}>{label}</strong>:{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>N/A</td>
                  </tr>
                </tbody>
              </React.Fragment>
            );
          }
        })}
      </table>
    );
  } else {
    return item;
  }
};

export default RenderElementsRecursively;
