import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleItem } from "../../actions";
import ReactLoading from "react-loading";

const SingleItem = ({ match }) => {
  const listType = match.params.listType;
  const itemID = match.params.id;

  const requestedItem = useSelector(state => state.singleItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleItem(listType, itemID));
  }, [listType, itemID, dispatch]);

  const item = requestedItem.object;

  const RenderElementsRecursively = item => {
    if (item.constructor === Array) {
      return item.map(prop => {
        return RenderElementsRecursively(prop);
      });
    } else if (item.constructor === Object) {
      const objectKeys = Object.keys(item);
      return (
        <ul>
          {objectKeys.map((key, index) => {
            if (item[key] !== null) {
              const text = key;
              const label = text.replace(/([A-Z])/g, " $1");
              const finalLabel = label.charAt(0).toUpperCase() + label.slice(1);
              console.log(key, item);

              return (
                <li key={index}>
                  <strong>{finalLabel}</strong>:{" "}
                  {RenderElementsRecursively(item[key])}
                </li>
              );
            }
          })}
        </ul>
      );
    } else {
      return item;
    }
  };

  return item ? (
    RenderElementsRecursively(item)
  ) : (
    <>
      <div>Loading...</div>
      <ReactLoading type={"bubbles"} color={"grey"} height={50} width={50} />
    </>
  );
};

export default SingleItem;
