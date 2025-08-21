const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Allow multiple frontend origins
const allowedOrigins = [
  "https://taskmanager-otqc-git-main-priyankas-projects-c93a9431.vercel.app",
  "https://taskmanager-ty8q-git-main-priyankas-projects-c93a9431.vercel.app"
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like Postman)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Body parser
app.use(express.json());

// Serve static files (like manifest.json) publicly
app.use(express.static(path.join(__dirname, "public")));

// Example auth route
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  // Dummy auth example
  if(email === "test@test.com" && password === "1234") {
    return res.json({ token: "fake-jwt-token" });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
