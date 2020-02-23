import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ListSection from "../partials/ListSection";
import {
  fetchMonsters,
  fetchArmors,
  fetchWeapons,
  fetchDecorations
} from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const List = ({ match }) => {
  const listType = match.params.listType;

  const monsters = useSelector(state => state.monsters);
  const armors = useSelector(state => state.armors);
  const weapons = useSelector(state => state.weapons);
  const decorations = useSelector(state => state.decorations);

  const dispatch = useDispatch();

  useEffect(() => {
    switch (listType) {
      case "monsters":
        return dispatch(fetchMonsters());

      case "armor":
        return dispatch(fetchArmors());

      case "weapons":
        return dispatch(fetchWeapons());

      case "decorations":
        return dispatch(fetchDecorations());

      default:
        return "";
    }
  }, [dispatch, listType]);

  const ListLoader = ({ list }) => {
    return (
      <>
        <div>
          <Link to="/">Back To Home</Link>
        </div>
        {list ? (
          <ListSection listType={listType} itemsArray={list.items} />
        ) : (
          <>Loading...</>
        )}
      </>
    );
  };

  switch (listType) {
    case "monsters":
      return <ListLoader list={monsters} />;

    case "armor":
      return <ListLoader list={armors} />;

    case "weapons":
      return <ListLoader list={weapons} />;

    case "decorations":
      return <ListLoader list={decorations} />;

    default:
      return <>Nothing to see here...</>;
  }
};

export default List;
