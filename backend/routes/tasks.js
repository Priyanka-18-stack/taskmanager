const express = require("express")
const router=express.Router();
const Task=require("../models/Task")
const authMiddleware = require("../middleware/auth")

router.post("/",authMiddleware, async (req, res) => {
  try{
    const task=new Task({
      userId: req.user.id,
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      priority: req.body.priority
    })
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Failed to create task" });
  }
});
router.get("/", authMiddleware, async (req, res) => {
  try {
     const tasks = await Task.find({userId:req.user.id }).sort({ updatedAt: -1 })
     res.json({ message: "Tasks fetched successfully", tasks });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});
router.put("/:id", authMiddleware, async (req, res) => {
  try{
    const task = await Task.findOneAndUpdate(
      {_id:req.params.id, userId:req.user.id },
      req.body,
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try{
    await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

module.exports = router;
