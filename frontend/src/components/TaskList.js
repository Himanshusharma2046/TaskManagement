import React from 'react';

const TaskList = ({ tasks, onDelete }) => (
    <div className="space-y-4">
        {tasks.map((task) => (
            <div
                key={task._id}
                className="bg-white p-4 shadow rounded flex justify-between items-center"
            >
                <span>{task.title}</span>
                <button
                    onClick={() => onDelete(task._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        ))}
    </div>
);

export default TaskList;
