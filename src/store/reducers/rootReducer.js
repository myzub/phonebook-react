import { combineReducers } from "redux";
import phonebook from "./phonebook";
import modal from "./modal";

export default combineReducers({
  phonebook,
  modal,
});
