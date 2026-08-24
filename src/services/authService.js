import axios from "axios";

const API = "https://6a87353970fbbd308f98cbeb.mockapi.io/api/v1/users";

export const getUsers = () => {
  return axios.get(API);
};

export const getUsersById = (id) => {
  return axios.get(`${API}/${id}`);
};

export const getUsersByPhoneAndPass = (phoneNumber, password) => {
  return axios.get(`${API}?phoneNumber=${phoneNumber}&password=${password}`);
};

