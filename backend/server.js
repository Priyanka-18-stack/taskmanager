const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config()
const app=express()
app.use(cors())
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});
app.use(express.json())
app.use("/api/auth",require("./routes/auth"))
app.use("/api/tasks", require("./routes/tasks"))
mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("MongoDB Connected")
  app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })
.catch((err) => console.log(err))
