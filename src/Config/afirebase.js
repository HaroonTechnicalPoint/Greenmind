// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhQxuUUhBI3YAjFI9DvAq091I9VFS1MOw",
  authDomain: "greenmind-3efd3.firebaseapp.com",
  projectId: "greenmind-3efd3",
  storageBucket: "greenmind-3efd3.firebasestorage.app",
  messagingSenderId: "366681273568",
  appId: "1:366681273568:web:ce24e9c59f8e57999f0c85",
  measurementId: "G-R4MRZPKX5S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
export const auth = getAuth(app);