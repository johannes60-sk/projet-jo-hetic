import { useState, React } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Statistics from "./pages/Statistics";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import AdminRoute from "./components/routes/AdminRoute";

function App() {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/statistics" element={<ProtectedRoute><Statistics></Statistics></ProtectedRoute>}/>
        <Route path="/admin-dashboard" element={<AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;