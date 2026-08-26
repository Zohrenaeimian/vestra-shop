import axios from "axios";

const API = "/api/products";

export const getProducts = () => {
  return axios.get(API);
};

export const getProductById = (id) => {
  return axios.get(`${API}/${id}`);
};

export const getProductsByCategory = (category) => {
  return axios.get(API, {
    params: { category },
  });
};
