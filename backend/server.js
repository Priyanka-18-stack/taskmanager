const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Dynamically allow frontend origins
app.use(cors({
  origin: function(origin, callback) {
    console.log("Request Origin:", origin); // Debug: see incoming origin

    // Allow requests from frontend or tools like Postman (no origin)
    const allowedOrigins = [
      "https://taskmanager-1-do6z.onrender.com", // add your current frontend
      "https://taskmanager-otqc-git-main-priyankas-projects-c93a9431.vercel.app",
      "https://taskmanager-ty8q-git-main-priyankas-projects-c93a9431.vercel.app"
    ];

    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);

    return callback(new Error("CORS policy does not allow this origin"), false);
  },
  credentials: true
}));

// Serve React build static files
app.use(express.static(path.join(__dirname, "build")));

// Example auth route
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  // Dummy authentication example
  if (email === "test@test.com" && password === "1234") {
    return res.json({ token: "fake-jwt-token" });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

// Serve React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
