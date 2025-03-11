import axios from 'axios';

const API_URL = 'https://taskmanagement-backend1-minp.onrender.com'; //backend deployed

export const getTasks = async () => axios.get(API_URL);
export const addTask = async (title) => axios.post(API_URL, { title });
export const deleteTask = async (id) => axios.delete(`${API_URL}/${id}`);
