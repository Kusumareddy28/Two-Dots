// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAV-f5qgoy2VisooELdEHcg0Qsu_h-Ggx4",
    authDomain: "two-dots-86395.firebaseapp.com",
    projectId: "two-dots-86395",
    storageBucket: "two-dots-86395.firebasestorage.app",
    messagingSenderId: "976773619445",
    appId: "1:976773619445:web:6c20fe6ddbc22d40fbefbc",
    measurementId: "G-QEBY3BY5ST"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
