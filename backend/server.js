const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Allow multiple frontend origins
const allowedOrigins = [
  "https://taskmanager-otqc-git-main-priyankas-projects-c93a9431.vercel.app",
  "https://taskmanager-ty8q-git-main-priyankas-projects-c93a9431.vercel.app",
  "https://taskmanager-1-do6z.onrender.com" // add your Render frontend URL
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like Postman)
    if(!origin) return callback(null, true);
    if(!allowedOrigins.includes(origin)) {
      return callback(new Error("CORS policy does not allow this origin"), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Body parser
app.use(express.json());

// Serve React build folder
app.use(express.static(path.join(__dirname, "build")));

// Example auth route
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  if(email === "test@test.com" && password === "1234") {
    return res.json({ token: "fake-jwt-token" });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

// Catch-all route to serve React app for any other route
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"), err => {
    if(err) {
      console.error("Error sending index.html:", err);
      res.status(500).send(err);
    }
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
