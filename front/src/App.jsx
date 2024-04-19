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
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/statistics" element={<ProtectedRoute><Statistics></Statistics></ProtectedRoute>}/>
        <Route path="/admin-dashboard" element={<AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>}/>
      </Routes>
    </BrowserRouter>
=======
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<ProtectedRoute isAuthenticated={isAuthenticated} />} />
        </Routes>
      </BrowserRouter>
>>>>>>> master
  );
}

export default App;
