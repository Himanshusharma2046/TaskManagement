import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task"
                className="flex-1 border border-gray-300 rounded px-3 py-2 shadow"
            />
            <button
                type="submit"
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
                Add
            </button>
        </form>
    );
};

export default TaskForm;
