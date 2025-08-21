const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  title: { type: String, required: true },                
  description: { type: String },                         
  status: {
  type: String,
  enum: ["pending", "in progress", "done"], // lowercase
  default: "pending"
},
priority: {
  type: String,
  enum: ["none", "normal", "high", "starred"], // lowercase
  default: "none"
}

}, { timestamps: true });     

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
