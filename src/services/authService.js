import axios from "axios";

const API = "/api/users";

export const getUsers = () => {
  return axios.get(API);
};

export const getUsersById = (id) => {
  return axios.get(`${API}/${id}`);
};

export const getUsersByPhoneAndPass = (phoneNumber, password) => {
  return axios.get(API, {
    params: { phoneNumber, password },
  });
};

export const registerUser = (userData) => {
  return axios.post(API, userData);
};
