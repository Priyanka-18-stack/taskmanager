import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/auth/register`, { email, password });
      alert("User registered successfully!");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    }
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600">
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 px-4 py-2 text-sm font-medium text-white
