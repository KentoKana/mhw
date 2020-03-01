import React from "react";
import { Link } from "react-router-dom";

const ListSection = ({ itemsArray, listType }) => {
  return (
    <section className="list">
      {itemsArray ? (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
            </tr>
            {itemsArray.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Link
                      to={`/list/${listType}/${item.name
                        .toLowerCase()
                        .replace("'", "")
                        .split(" ")
                        .join("-")}/${item.id}`}
                    >
                      {item.name}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <>Loading...</>
      )}
    </section>
  );
};

export default ListSection;
