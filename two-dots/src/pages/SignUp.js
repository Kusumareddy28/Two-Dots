import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom"; // <-- Add Link
import { motion } from "framer-motion";

export default function Signup({ onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("loggedIn", "true");
      onSignup();
      navigate("/welcome");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200">
      
      {/* Bouncing Circles FULL SCREEN behind */}
      <motion.div
        className="absolute w-48 h-48 bg-blue-300 rounded-full opacity-20"
        animate={{
          x: ["0vw", "80vw", "10vw", "90vw", "0vw"],
          y: ["90vh", "70vh", "10vh", "90vh", "0vh"]
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-56 h-56 bg-green-300 rounded-full opacity-20"
        animate={{
          x: ["90vw", "10vw", "80vw", "20vw", "0vw"],
          y: ["0vh", "30vh", "80vh", "40vh", "90vh"]
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      {/* Centered Signup Card */}
      <div className="flex items-center justify-center min-h-screen relative z-10 p-8">
        <div className="bg-white/20 backdrop-blur-lg shadow-xl rounded-lg p-10 max-w-md w-full border border-white/30">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
            Create Your Account
          </h2>

          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input 
              type="email" 
              placeholder="Email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-white/30 p-3 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/30 placeholder-gray-700"
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-white/30 p-3 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/30 placeholder-gray-700"
            />
            <button 
              type="submit" 
              className="bg-black/100 hover:bg-white/30 text-white py-3 rounded-md text-lg font-semibold transition-all shadow-md backdrop-blur-md"
            >
              Sign Up
            </button>
          </form>

          {/* Already have an account? */}
          <p className="mt-6 text-center text-gray-700">
            Already have an account?{" "}
            <Link 
              to="/login"
              className="text-blue-600 hover:underline font-semibold"
            >
              Login
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
}
