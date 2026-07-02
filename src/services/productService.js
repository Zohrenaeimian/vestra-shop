import axios from "axios";

const API = "http://localhost:3000/products";

export const getProducts = () => {
  return axios.get(API);
};

export const getProduct = (id) => {
  return axios.get(`${API}/${id}`);
};