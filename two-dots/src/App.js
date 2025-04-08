import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import NavBar from "./components/NavBar";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} onLogoutClick={handleLogout} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
        <Route 
          path="/welcome" 
          element={isLoggedIn ? <Welcome /> : <Navigate to="/login" />}
        />
        {/* Catch all routes and redirect to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
