import { combineReducers } from "redux";
import { LOADING_START, LOADING_END } from "./types";
import adminReducer from "../../admin/reducer";

const appReducer = (state = { loading: {} }, action) => {
  switch (action.type) {
    case LOADING_START: {
      const loading = {};
      loading[action.property] = true;
      return { ...state, loading };
    }

    case LOADING_END: {
      const loading = {};
      delete loading[action.property];
      return { ...state, loading };
    }
    default:
      break;
  }
  return state;
};

const rootReducer = combineReducers({
  app: appReducer,
  admin: adminReducer,
  public: {}
});

export default rootReducer;
