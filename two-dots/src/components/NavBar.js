import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { Link as ScrollLink } from "react-scroll"; 
import { Menu, X } from "lucide-react"; // You can use any hamburger icons or react-icons too

export default function NavBar({ onLogoutClick, isLoggedIn }) {
  const location = useLocation(); 
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // <-- New state for mobile menu

  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/welcome";

  const handleLogoClick = () => {
    if (isLoggedIn) {
      navigate("/welcome");
    } else {
      navigate("/");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black text-white px-8 py-4">
      <div className="flex justify-between items-center">

        {/* Clickable Logo */}
        <div 
          onClick={handleLogoClick}
          className="text-2xl font-bold cursor-pointer"
        >
          twodots
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">

          {!isAuthPage && (
            <>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:underline cursor-pointer"
              >
                About Us
              </ScrollLink>

              <ScrollLink
                to="join"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:underline cursor-pointer"
              >
                Join Us
              </ScrollLink>
            </>
          )}

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
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-4 md:hidden items-center">
          {!isAuthPage && (
            <>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={toggleMenu}
                className="hover:underline cursor-pointer"
              >
                About Us
              </ScrollLink>

              <ScrollLink
                to="join"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={toggleMenu}
                className="hover:underline cursor-pointer"
              >
                Join Us
              </ScrollLink>
            </>
          )}

          {isLoggedIn ? (
            <button
              onClick={() => {
                onLogoutClick();
                toggleMenu();
              }}
              className="border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                onClick={toggleMenu}
                className="border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={toggleMenu}
                className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
