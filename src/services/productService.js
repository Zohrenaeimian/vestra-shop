import axios from "axios";

const API = "https://6a87353970fbbd308f98cbeb.mockapi.io/api/v1/products";

export const getProducts = () => {
  return axios.get(API);
};

export const getProductById = (id) => {
  return axios.get(`${API}/${id}`);
};

export const getProductsByCategory = (category) => {
  return axios.get(`${API}?category=${category}`);
};