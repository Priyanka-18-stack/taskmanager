# **Task Manager App**

**_A full-stack application for managing tasks with authentication and CRUD features_**


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
- **Dark Mode** → Add theme customization for better user experience.  
- **Mobile App Version** → Extend functionality to a React Native mobile app.  
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

- **Register Page**  
  ![Register Page]<img width="1645" height="785" alt="Screenshot (16)" src="https://github.com/user-attachments/assets/0315eca5-72da-4ee2-bd95-d21ae9f39a52" />
  

- **Login page**  
  ![login Page]<img width="1536" height="737" alt="Screenshot (15)" src="https://github.com/user-attachments/assets/0ad8b458-1076-451c-b4e0-32a195233593" />

- **Dashboard (Task Manager)**  
  ![Dashboard]<img width="1536" height="824" alt="Screenshot (17)" src="https://github.com/user-attachments/assets/9151700a-118c-4c8f-af21-a1cbb5de4f49" />
 

---
## 🚀 How to Use the Project  

### 🔹 Step 1: Register an Account  
- Go to the **Register Page**.  
- Enter your **email** and **password**.  
- Your password will be securely hashed before saving in the database.  

### 🔹 Step 2: Login  
- Navigate to the **Login Page**.  
- Enter your registered **email** and **password**.  
- After login, a **JWT token** is generated and stored, allowing you to access your personal tasks.  

### 🔹 Step 3: Manage Your Tasks  
- **Add a Task** → Enter a title and description.  
- **Update a Task** → Edit the title, description, or status.  
- **Delete a Task** → Remove tasks you no longer need.  
- **Mark Complete/Incomplete** → Track your task progress.  
- **Pin Tasks** → Keep important tasks at the top.  
- **Automatic Sorting** → Tasks are auto-sorted by pinned status → priority → alphabetical order.  

### 🔹 Example Workflow  
1. Login to your account.  
2. Add a task: *“Complete Project Report”*.  
3. Pin the task so it stays at the top.  
4. Mark it as **complete** once done.  
---

### 🔹 Credentials (For Testing)  
If you want to test the project quickly, you can use:  
- **Email:** `testuser@example.com`  
- **Password:** `123456`  

*(Or register your own account from the Register page.)*  

---
## 🙌 Acknowledgements  
Thanks for checking out this project. I’m always open to feedback and improvements. 
⭐ If you found this useful, please give it a star to support my work!    

