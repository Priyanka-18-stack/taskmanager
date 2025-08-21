const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Replace with your Netlify frontend URL
const allowedOrigins = [
  "https://your-netlify-site.netlify.app"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow Postman or server requests
    if (!allowedOrigins.includes(origin)) {
      return callback(new Error("CORS blocked by backend"), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Parse JSON
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("MongoDB connection error:", err));
