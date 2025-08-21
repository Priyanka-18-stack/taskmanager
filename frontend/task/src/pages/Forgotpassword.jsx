import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleForgot(e) {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/auth/forgot-password`, { email });
      setMessage(res.data.message);
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
      setMessage("");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center text-blue-700">
          Forgot Password
        </h2>
        <form onSubmit={handleForgot} className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Enter your email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            required
          />
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-600"
          >
            Send Reset Link
          </button>
        </form>
        {message && <p className="mt-2 text-green-600">{message}</p>}
        {error && <p className="mt-2 text-red-600">{error}</p>}
      </div>
    </div>
  );
}
