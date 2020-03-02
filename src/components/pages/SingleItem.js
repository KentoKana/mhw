import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleItem } from "../../actions";
import ReactLoading from "react-loading";
import Monster from "../partials/Monster/Monster";
import Armor from "../partials/Armor/Armor";

const SingleItem = ({ match }) => {
  const listType = match.params.listType;
  const itemID = match.params.id;

  const requestedItem = useSelector(state => state.singleItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleItem(listType, itemID));
  }, [listType, itemID, dispatch]);

  const item = requestedItem.object;
  const RenderItem = ({ item }) => {
    switch (listType) {
      case "monsters":
        return <Monster monster={item} />;
      case "armor":
        return <Armor armor={item} />;
      default:
        return <>Hi</>;
    }
  };

  return item ? (
    <section className="container">
      <Link to={`/list/${listType}`}>Back To List</Link>
      <RenderItem item={item} />
    </section>
  ) : (
    <>
      <div>Loading...</div>
      <ReactLoading type={"bubbles"} color={"grey"} height={50} width={50} />
    </>
  );
};

export default SingleItem;
