import axios from "axios";

const BASE_URL = "http://localhost:5000";

const service = {
  postCategory: data => {
    return axios.post(`${BASE_URL}/api/category`, data, {
      onUploadProgress: progressEvent => {
        console.log(
          Math.floor((progressEvent.loaded * 100) / progressEvent.total)
        );
      }
    });
  },
  fetchCategories: () => {
    return axios.get(`${BASE_URL}/api/category`);
  },
  removeCategory: category => {
    return axios.delete(`${BASE_URL}/api/category`, { data: category });
  }
};

export default service;
