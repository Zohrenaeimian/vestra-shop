import axios from "axios";

const API = "http://localhost:3000/users";

export const getUsers = () => {
  return axios.get(API);
};

export const getUsersById = (id) => {
  return axios.get(`${API}/${id}`);
};

export const getUsersByPhoneAndPass = (phoneNumber, password) => {
  return axios.get(`${API}?phoneNumber=${phoneNumber}&password=${password}`);
};

