import { combineReducers } from "redux";
import monstersReducer from "./monsters";
import armorsReducer from "./armors";
import weaponsReducer from "./weapons";
import decorationsReducer from "./decorations";
import singleItemReducer from "./singleItem";

const rootReducer = combineReducers({
  monsters: monstersReducer,
  armors: armorsReducer,
  weapons: weaponsReducer,
  decorations: decorationsReducer,
  singleItem: singleItemReducer
});
export default rootReducer;
