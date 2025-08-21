// src/components/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4">
      {/* Illustration with bounce animation */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
        alt="Dashboard Illustration"
        className="w-32 h-32 mb-6 drop-shadow-lg animate-bounce"
      />

      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-3 text-center drop-shadow">
        Welcome to Your Dashboard
      </h1>
      <p className="text-lg mb-10 text-center opacity-90">
        Stay organized, manage tasks, and achieve more every day.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/task-manager")}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:scale-105 transform transition"
        >
          Go to Task Manager
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:scale-105 transform transition"
        >
          Register
        </button>
      </div>
    </div>
  );
}
