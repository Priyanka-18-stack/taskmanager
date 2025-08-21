import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import HomePage from "./components/home";
import TaskManager from "./components/taskmanger"
import ProtectedRoute from "./components/ProtectedRoute"
import { AuthProvider } from "./context/AuthContext";
import ForgotPassword from"./pages/Forgotpassword"
import Signup from"./pages/Signup"
import ResetPassword from "./pages/Resetpassword"

export default function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/task-manager" element={<ProtectedRoute><TaskManager /></ProtectedRoute>} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}