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
import Athletes from "./pages/Athletes";
import Header from "./components/Header";

function App() {
  const isAuthenticated = true;

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<ProtectedRoute isAuthenticated={isAuthenticated} />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
