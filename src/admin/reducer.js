import { combineReducers } from "redux";
import categoryReducer from "./category/store/reducer";

const adminReducer = combineReducers({
  category: categoryReducer
});
export default adminReducer;
