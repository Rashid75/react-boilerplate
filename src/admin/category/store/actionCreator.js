import service from "../../service/category";
import { addCategory } from "./action";
import { loadingStart, loadingEnd } from "../../../app";
import Toast from "../../../services/toast";

const fetch = () => {
  return dispatch => {
    Toast.info("Fetching categories. Hold on !");
    dispatch(loadingStart("fetch"));
    return service.fetchCategories().finally(() => {
      Toast.dismiss();
      dispatch(loadingEnd("fetch"));
    });
  };
};
const post = data => {
  return dispatch => {
    dispatch(loadingStart("post"));
    Toast.info("Saving data. Hold on !");
    return service.postCategory(data).finally(() => {
      Toast.dismiss();
      dispatch(loadingEnd("post"));
    });
  };
};

const remove = node => {
  return dispatch => {
    dispatch(loadingStart("remove"));
    Toast.info("Removing category. Hold on !");
    return service.removeCategory(node).finally(() => {
      Toast.dismiss();
      dispatch(loadingEnd("remove"));
    });
  };
};
export { fetch, post, remove, addCategory };
