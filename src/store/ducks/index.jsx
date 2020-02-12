import { combineReducers } from "redux";

import coordinates from "./coordinates";
import address from "./address";
import weather from "./weather";

export default combineReducers({
  coordinates,
  address,
  weather
});
