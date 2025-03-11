import axios from 'axios';

const API_URL = 'https://taskmanagement-backend-0rn2.onrender.com';

export const getTasks = async () => axios.get(API_URL);
export const addTask = async (title) => axios.post(API_URL, { title });
export const deleteTask = async (id) => axios.delete(`${API_URL}/${id}`);
