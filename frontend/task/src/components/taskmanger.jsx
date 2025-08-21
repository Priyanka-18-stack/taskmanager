import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default function App() {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [task, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "none",
  });
  const [editId, setEditId] = useState(null);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getPriorityEmoji = (priority) => {
    if (priority === "high") return "🔥";
    if (priority === "starred") return "⭐";
    if (priority === "normal") return "📌";
    return "";
  };

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_URL}/tasks`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTask(res.data);
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  useEffect(() => {
    if (token) fetchTasks();
  }, [token]);

  // Save or update task
  const handleSave = async () => {
    if (!taskInput.title.trim()) return;

    try {
      if (editId) {
        const res = await axios.put(
          `${API_URL}/tasks/${editId}`,
          taskInput,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setTask(task.map((t) => (t._id === editId ? res.data : t)));
        setEditId(null);
      } else {
        const res = await axios.post(`${API_URL}/tasks`, taskInput, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTask([...task, res.data]);
      }
      setTaskInput({ title: "", description: "", status: "pending", priority: "none" });
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  // Start editing
  const handleEdit = (id) => {
    const toEdit = task.find((t) => t._id === id);
    setTaskInput(toEdit);
    setEditId(id);
  };

  // Delete task
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTask(task.filter((t) => t._id !== id));
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  // Toggle status
  const handleStatusChange = async (id, checked) => {
    const updatedStatus = checked ? "done" : "pending";
    try {
      const res = await axios.put(
        `${API_URL}/tasks/${id}`,
        { status: updatedStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTask(task.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  // Sort tasks
  const sortedTasks = [...task].sort((a, b) => {
    const priorityOrder = { high: 3, starred: 2, normal: 1, none: 0 };
    const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
    if (priorityDiff !== 0) return priorityDiff;

    const titleDiff = a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    if (titleDiff !== 0) return titleDiff;

    const statusOrder = { pending: 1, "in progress": 2, done: 3 };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          📋 Task Manager
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>

      <input
        type="text"
        placeholder="Title"
        className="border px-3 py-2 w-full mb-2"
        value={taskInput.title}
        onChange={(e) => setTaskInput({ ...taskInput, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        className="border px-3 py-2 w-full mb-2"
        value={taskInput.description}
        onChange={(e) => setTaskInput({ ...taskInput, description: e.target.value })}
      />
      <select
        className="border px-3 py-2 w-full mb-2"
        value={taskInput.status}
        onChange={(e) => setTaskInput({ ...taskInput, status: e.target.value })}
      >
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <select
        className="border px-3 py-2 w-full mb-4"
        value={taskInput.priority}
        onChange={(e) => setTaskInput({ ...taskInput, priority: e.target.value })}
      >
        <option value="none">No Pin</option>
        <option value="normal">📌 Normal</option>
        <option value="high">🔥 High</option>
        <option value="starred">⭐ Starred</option>
      </select>
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4"
      >
        {editId ? "Update Task" : "Add Task"}
      </button>

      {sortedTasks.map((t) => (
        <div
          key={t._id}
          className={`p-4 border rounded mb-3 shadow-sm flex justify-between items-center ${
            t.priority !== "none"
              ? "border-purple-400 bg-purple-50"
              : "border-gray-300 bg-white"
          }`}
        >
          <div>
            {t.priority !== "none" && (
              <span className="text-xl mr-2">{getPriorityEmoji(t.priority)}</span>
            )}
            <span className="font-bold">{t.title}</span>
            <p className="text-sm text-gray-600">{t.description}</p>
            <div className="text-xs text-gray-500">Status: {t.status}</div>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="checkbox"
              checked={t.status === "done"}
              onChange={(e) => handleStatusChange(t._id, e.target.checked)}
            />
            <button
              onClick={() => handleEdit(t._id)}
              className="bg-yellow-300 px-2 py-1 rounded text-xs"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(t._id)}
              className="bg-red-400 px-2 py-1 rounded text-xs text-white"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <hr className="my-4" />
      <div className="counter mt-4">
        <div>
          Completed:{" "}
          <span className="text-green-600 font-bold">
            {task.filter((e) => e.status === "done").length}
          </span>{" "}
          | Uncompleted:{" "}
          <span className="text-red-600 font-bold">
            {task.filter((e) => e.status !== "done").length}
          </span>
        </div>
      </div>
    </div>
  );
}
