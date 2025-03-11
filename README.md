# Task Management App

A simple Task Management application with a React frontend and Node.js/Express.js backend. Users can create, view, and delete tasks. The app is styled using Tailwind CSS.

---

## Installation Instructions

### Backend Setup

1. Clone the repository and navigate to the backend folder:
   ```bash
   git clone <your-repo-url>
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The backend will run at [http://localhost:5000](http://localhost:5000).

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
   The frontend will run at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Backend (Node.js + Express.js)

#### `GET /tasks`
Fetch all tasks.
##### Response:
```json
[
  { "id": 1, "title": "Sample Task" }
]
```

#### `POST /tasks`
Add a new task.
##### Request Body:
```json
{ "title": "New Task" }
```

#### `DELETE /tasks/:id`
Delete a task by ID.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Deployment:**
  - **Frontend:** Netlify  
  - **Backend:** Render  

## Usage

1. Visit the frontend link: **[Task Management Frontend](#)**
2. Add tasks using the input field and button.
3. View tasks displayed in stylish rectangular boxes.
4. Delete tasks by clicking the red "Delete" button.

## Deployment Links

- **Frontend:** ['https://cheery-biscotti-6f135d.netlify.app/'](#)
- **Backend:** ['https://taskmanagement-backend1-minp.onrender.com'](#)

## Screenshot

![Screenshot (176)](https://github.com/user-attachments/assets/917d4975-0764-4078-a5ca-7b3a3f8b4e11)
![Screenshot (177)](https://github.com/user-attachments/assets/3e565fa2-32d7-4d51-a614-38756700a368)
![Screenshot (264)](https://github.com/user-attachments/assets/2575bb04-1be8-4cfd-9f07-fde0ba43b98d)




## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

