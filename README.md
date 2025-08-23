**Task Manager**

## 📌 Project Description  

### 🔹 What the Application Does  
The **Task Manager App** is a full-stack web application that allows users to register, log in, and manage their daily tasks.  
Each user has a secure account where they can:  

- **Add, update, and delete tasks**  
- **Mark tasks as complete or incomplete**  
- **Pin important tasks for quick access**  
- **Automatically sort tasks based on pinned status, priority, and alphabetically** 

---

### 🔹 Why I Used the Technologies  
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
