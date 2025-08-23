**Task Manager**

## 📌 Project Description  

### 🔹 Application Description
The **Task Manager App** is a full-stack web application that allows users to register, log in, and manage their daily tasks.  
Each user has a secure account where they can:  

- **Add, update, and delete tasks**  
- **Mark tasks as complete or incomplete**  
- **Pin important tasks for quick access**  
- **Automatically sort tasks based on pinned status, priority, and alphabetically** 

---

### 🔹  Technologies  Used
- **React** → For building a fast, interactive, and responsive user interface. I chose React because of its component-based architecture and React Hooks, which make managing state simple.  
- **TailwindCSS** → For clean and responsive styling with minimal custom CSS.  
- **Node.js + Express.js** → To create a scalable and RESTful backend API. Express makes it easy to define routes and middleware for authentication and task management.  
- **MongoDB Atlas** → A NoSQL database that handles JSON-like documents. It’s flexible and works well with JavaScript-based applications.  
- **JWT (JSON Web Tokens)** → For secure authentication and authorization. It ensures that only logged-in users can access their tasks.  
- **bcrypt** → To hash and store passwords securely.  

---

### 🔹 Challenges Faced  
- **Authentication & Authorization** → Ensuring JWT tokens were properly generated, stored, and verified across frontend and backend.  
- **Connecting Frontend & Backend** → Handling CORS issues and making sure API requests from React reached the Express server without errors.  
- **Database Relations** → Managing user-task relationships so that tasks remain specific to each logged-in user.  
- **UI Responsiveness** → Designing a simple but effective layout that works across devices.  

---

### 🔹 Future Features to Implement  
- **Due Dates & Reminders** → Notify users about upcoming or overdue tasks.  
- **Search & Filter** → Allow searching tasks by keywords and filtering by status or date range.  
- **Task Categories/Tags** → Organize tasks into categories for better productivity.  
- **Dark Mode** → Add theme customization for better user experience.  
- **Mobile App Version** → Extend functionality to a React Native mobile app.  
## ⚙️ How to Install and Run the Project  
---
## ⚙️ How to Install and Run the Project 
### 🔹 Run Locally  

- **Clone the Repository**  
  - `git clone https://github.com/your-username/task-manager.git`  
  - `cd task-manager`  

- **Backend Setup**  
  - Navigate to backend folder → `cd backend`  
  - Install dependencies → `npm install`  
  - Create a **.env** file inside backend folder with:  
    - `PORT=5000`  
    - `MONGO_URI=your_mongodb_connection_string`  
    - `JWT_SECRET=your_jwt_secret_key`  
  - Start backend server → `npm start`  
  - Backend runs on → **http://localhost:5000**  

- **Frontend Setup**  
  - Navigate to frontend folder → `cd frontend`  
  - Install dependencies → `npm install`  
  - Start frontend → `npm start`  
  - Frontend runs on → **http://localhost:3000**  

---

### 🔹 Access Deployed Version  

- **Frontend (Netlify):** 👉 [https://voluble-profiterole-0a266a.netlify.app/home](https://voluble-profiterole-0a266a.netlify.app/home)  
- **Backend (Render):** 👉 [https://taskmanager-foya.onrender.com](https://taskmanager-foya.onrender.com)
## 📸 Screenshots  

- **Home Page**  
  ![Home Page]<img width="1536" height="806" alt="Screenshot (14)" src="https://github.com/user-attachments/assets/c17f4ef7-74a9-4b4c-90f5-582a80a145d0" />

- **Login Page**  
  ![Login Page]<img width="1645" height="785" alt="Screenshot (16)" src="https://github.com/user-attachments/assets/0315eca5-72da-4ee2-bd95-d21ae9f39a52" />
  

- **Register Page**  
  ![Register Page]<img width="1536" height="737" alt="Screenshot (15)" src="https://github.com/user-attachments/assets/0ad8b458-1076-451c-b4e0-32a195233593" />

- **Dashboard (Task Manager)**  
  ![Dashboard]<img width="1536" height="824" alt="Screenshot (17)" src="https://github.com/user-attachments/assets/9151700a-118c-4c8f-af21-a1cbb5de4f49" />
 

---
