import { LOADING_START, LOADING_END } from "./types";

const loadingStart = property => {
  return {
    type: LOADING_START,
    property
  };
};
const loadingEnd = property => {
  return {
    type: LOADING_END,
    property
  };
};
export { loadingStart, loadingEnd };
