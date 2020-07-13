import { ADD_CATEGORY, POST_CATEGORIES, FETCH_CATEGORIES } from "./types";

const fetchCategories = data => {
  return {
    type: FETCH_CATEGORIES,
    payload: data
  };
};
const postCategories = data => {
  return {
    type: POST_CATEGORIES,
    payload: data
  };
};
const updateCategories = data => {
  return {
    type: FETCH_CATEGORIES,
    payload: data
  };
};
const addCategory = data => {
  return {
    type: ADD_CATEGORY,
    payload: data
  };
};

export { addCategory, postCategories, fetchCategories, updateCategories };
