import axios from 'axios';

const BASE_URL = "http://127.0.0.1:8000/api/";

const registerUser = (data) => {
  return axios.post(`${BASE_URL}register/`, data);
};

const loginUser = (data) => {
  return axios.post(`${BASE_URL}login/`, data);
};

const getAllUsers = () => {
  return axios.get(`${BASE_URL}users/`);
};

const updateUser = (id, data) => {
  return axios.put(`${BASE_URL}update/${id}/`, data);
};

const deleteUser = (id) => {
  return axios.delete(`${BASE_URL}delete/${id}/`);
};

export {
  registerUser,
  loginUser,
  getAllUsers,
  updateUser,
  deleteUser,
};