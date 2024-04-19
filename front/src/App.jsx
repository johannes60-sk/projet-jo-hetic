import { useState, React } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Statistics from "./pages/Statistics";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import AdminRoute from "./components/routes/AdminRoute";
import Athletes from "./pages/Athletes";
import Header from "./components/Header";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/*" element={<ProtectedRoute />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
