import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
      });
      alert("User registered successfully!");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    }
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600">
      {/* Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Home
      </button>

      {/* Signup Card */}
      <div className="w-full p-6 m-auto bg-white rounded-xl shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
          Sign up
        </h1>

        <form className="mt-6" onSubmit={handleSignup}>
          {/* Email */}
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md 
              focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md 
              focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Submit */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="mt-8 text-xs font-light  text-center text-gray-100">
          <span className="font-medium text-gray-500"> Already have an account?{" "}</span>
          <button
            onClick={() => navigate("/login")}
            className="font-medium text-blue-600 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
