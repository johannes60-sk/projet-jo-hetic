import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Header from "./components/Header";

function App() {

  const [isLogged, setIsLogged] = useState(true);

  const deleteCookie = () => {
    for (let cookie of document.cookie.split(";")) {
      if (cookie.trim().startsWith("jwt=")) {
        console.log('cookie')
        const newCookie = cookie.replace("jwt=", "");
        document.cookie = `jwt=${newCookie}; expires=Thu, 01 Jan 1970 00:00:00 UTC}`;
      }
    }
  }
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = document.cookie.split(';').find((cookie) => cookie.includes('jwt'));
        if (!token) {
          setIsLogged(false);
          console.log('no token')
          // return <Navigate to="/Login" replace />;
        } else {
          const response = await fetch("http://localhost:3000/users/verify", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": token.substring(5),
            },
          })

          const data = await response.json();
          console.log(data.result);
          setIsLogged(data.result);
          !data.result && deleteCookie();
        }
      } catch (error) {
        setIsLogged(false);
        console.error("Error:", error);
        deleteCookie();
      }
    }

    checkAuth();
  }, []);

  return (
      <BrowserRouter>
        <Header isLogged={isLogged} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/*" element={<ProtectedRoute isLogged={isLogged} />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
