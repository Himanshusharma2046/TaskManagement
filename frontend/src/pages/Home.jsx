import React, { useEffect, useState } from 'react';
import { getTasks, addTask, deleteTask } from '../services/taskService';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await getTasks();
        setTasks(response.data);
    };

    const handleAddTask = async (title) => {
        const response = await addTask(title);
        setTasks([...tasks, response.data]);
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id)); // Ensure `_id` is used
    };
    

    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <div className="max-w-xl mx-auto bg-white shadow p-5 rounded">
                <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
                <TaskForm onAdd={handleAddTask} />
                <TaskList tasks={tasks} onDelete={handleDeleteTask} />
            </div>
        </div>
    );
};

export default Home;
