import { ADD_CATEGORY, UPDATE_CATEGORIES, FETCH_CATEGORIES } from "./types";

const categoryReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES: {
      return { ...state, categories: action.payload };
    }
    case ADD_CATEGORY: {
      return { ...state, categories: [...state.categories, action.payload] };
    }
    case UPDATE_CATEGORIES: {
      return { ...state, categories: action.payload };
    }
    default:
      break;
  }

  return state;
};

export default categoryReducer;
