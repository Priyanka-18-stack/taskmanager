const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const authMiddleware = require("../middleware/auth");

// Create task
router.post("/", authMiddleware, async (req, res) => {
  try {
    const task = new Task({
      userId: req.user.id,
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      priority: req.body.priority,
    });
    await task.save();
    res.status(201).json({ message: "Task created successfully", task });
  } catch (err) {
    res.status(500).json({ message: "Failed to create task" });
  }
});

// Get tasks
router.get("/", authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id }).sort({ updatedAt: -1 });
    res.json({ message: "Tasks fetched successfully", tasks });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
});

// Update task
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    res.json({ message: "Task updated successfully", task });
  } catch (err) {
    res.status(500).json({ message: "Failed to update task" });
  }
});

// Delete task
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete task" });
  }
});

module.exports = router;
