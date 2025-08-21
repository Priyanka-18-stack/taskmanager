import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const API_URL = process.env.REACT_APP_API_URL;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/auth/login`, { email, password });
      login(res.data.token);
      navigate("/task-manager");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600">
      <button
        onClick={() => navigate("/home")}
        className="absolute top-4 right-4 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Home
      </button>

      <div className="w-full p-6 m-auto bg-white rounded-xl shadow-lg lg:max-w-xl transform transition-all duration-700 ease-out opacity-100 translate-y-0 animate-fadeIn">
        <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
          Sign in
        </h1>

        <form className="mt-6" onSubmit={handleLogin}>
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-xs text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
