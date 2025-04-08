import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { Link as ScrollLink } from "react-scroll"; 

export default function NavBar({ onLogoutClick, isLoggedIn }) {
  const location = useLocation(); 
  const navigate = useNavigate();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/welcome";

  const handleLogoClick = () => {
    if (isLoggedIn) {
      navigate("/welcome"); // Stay on Welcome if logged in
    } else {
      navigate("/"); // Go Home if not logged in
    }
  };

  return (
    <nav className="flex justify-between items-center bg-black text-white px-8 py-4">
      
      {/* Clickable Logo */}
      <div 
        onClick={handleLogoClick}
        className="text-2xl font-bold cursor-pointer"
      >
        twodots
      </div>

      <div className="flex gap-6 items-center">

        {/* Show About Us and Join Us only if NOT on login/signup/welcome page */}
        {!isAuthPage && (
          <>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover: cursor-pointer"
            >
              About Us
            </ScrollLink>

            <ScrollLink
              to="join"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover: cursor-pointer"
            >
              Join Us
            </ScrollLink>
          </>
        )}

        {/* Login / Logout Buttons */}
        {isLoggedIn ? (
          <button
            onClick={onLogoutClick}
            className="border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 transition"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
