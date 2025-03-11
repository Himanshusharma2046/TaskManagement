# Task Management App

A simple Task Management application with a React frontend and Node.js/Express.js backend. Users can create, view, and delete tasks. The app is styled using Tailwind CSS.

## Features

- **Add Tasks**: Add new tasks to your task list.
- **View Tasks**: View all tasks in a user-friendly interface.
- **Delete Tasks**: Remove tasks you no longer need.
- **Responsive UI**: Designed with Tailwind CSS for a modern and responsive design.

---

## Links

- **Frontend Deployment**: [Task Management Frontend](https://cheery-biscotti-6f135d.netlify.app/)
- **Backend Deployment**: [Task Management Backend](https://taskmanagement-backend1-minp.onrender.com/)

---

## Installation Instructions

### Backend Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd backend
Install dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
npm start
The backend will run at http://localhost:5000.

Frontend Setup
Navigate to the frontend directory:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the React app:

bash
Copy
Edit
npm start
The frontend will run at http://localhost:3000.

API Endpoints
Backend (Node.js + Express.js)
GET /tasks
Fetch all tasks.
Response:

json
Copy
Edit
[
  { "id": 1, "title": "Sample Task" }
]
POST /tasks
Add a new task.
Request Body:

json
Copy
Edit
{ "title": "New Task" }
DELETE /tasks/:id
Delete a task by ID.

Tech Stack
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Deployment:
Frontend: Netlify
Backend: Render
Usage
Visit the frontend link: Task Management Frontend
Add tasks using the input field and button.
View tasks displayed in stylish rectangular boxes.
Delete tasks by clicking the red "Delete" button.
Screenshot

Contributing
Fork the repository.
Create a new branch:
bash
Copy
Edit
git checkout -b feature-name
Commit your changes:
bash
Copy
Edit
git commit -m "Add some feature"
Push to the branch:
bash
Copy
Edit
git push origin feature-name
Open a pull request.


