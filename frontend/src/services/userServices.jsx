import axios from 'axios';
const BASE_URL = "http://127.0.0.1:8000/api/";

export const registerUser = (data) => {
    return axios.post(`${BASE_URL}register/`, data);
}

export const loginUser = (data) => {
    return axios.post(`${BASE_URL}login/`, data);
}

export const getAllUsers = () => {
    return axios.get(`${BASE_URL}users/`);
}

export const updateUser = (id, data) => {
    return axios.put(`${BASE_URL}update/${id}/`, data);
}

export const deleteUser = (id) => {
    return axios.delete(`${BASE_URL}delete/${id}/`);
}
