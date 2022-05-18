import { combineReducers } from "redux";
import languageReducer from "../language/reducer";

const allReducers = combineReducers({
  languageReducer,
});
export default allReducers;
