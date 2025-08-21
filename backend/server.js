const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve Vite frontend (dist folder)
const buildPath = path.join(__dirname, "../frontend/task/dist");
app.use(express.static(buildPath));

// API routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));

// Catch-all for frontend routes (but ignore API routes)
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// MongoDB connection and server start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
