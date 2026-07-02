import axios from "axios";

const API = "http://localhost:3000/products";

export const getProducts = () => {
  return axios.get(API);
};

export const getProduct = (id) => {
  return axios.get(`${API}/${id}`);
};

export const getProductById = (id) => {
  return axios.get(
    `http://localhost:3000/products/${id}`
  );
};

export const getProductsByCategory = (category) => {
  return axios.get(
    `http://localhost:3000/products?category=${category}`
  );
};