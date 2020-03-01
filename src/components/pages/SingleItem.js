import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleItem } from "../../actions";
import ReactLoading from "react-loading";
import RenderElementsRecursively from "../partials/RenderElementsRecursively";

const SingleItem = ({ match }) => {
  const listType = match.params.listType;
  const itemID = match.params.id;

  const requestedItem = useSelector(state => state.singleItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleItem(listType, itemID));
  }, [listType, itemID, dispatch]);

  const item = requestedItem.object;

  return item ? (
    <section className="container">
      {RenderElementsRecursively(item)}
    </section>
  ) : (
    <>
      <div>Loading...</div>
      <ReactLoading type={"bubbles"} color={"grey"} height={50} width={50} />
    </>
  );
};

export default SingleItem;
