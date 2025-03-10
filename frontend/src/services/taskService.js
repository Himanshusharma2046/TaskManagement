import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks';

export const getTasks = async () => axios.get(API_URL);
export const addTask = async (title) => axios.post(API_URL, { title });
export const deleteTask = async (id) => axios.delete(`${API_URL}/${id}`);
