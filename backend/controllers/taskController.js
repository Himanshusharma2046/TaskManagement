import Task from "../models/Task.js";
import mongoose from "mongoose";


// Get all tasks
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Add a new task
export const addTask = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ error: "Title is required" });
        }

        const newTask = new Task({ title });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Delete a task
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Received request to delete task with ID: ${id}`);

        if (!mongoose.Types.ObjectId.isValid(id)) {
            console.log("Invalid Task ID");
            return res.status(400).json({ error: "Invalid Task ID" });
        }

        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            console.log(`Task with ID ${id} not found`);
            return res.status(404).json({ error: "Task not found" });
        }

        console.log("Task deleted successfully");
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ error: "Server Error" });
    }
};

