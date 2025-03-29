// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9006e.firebaseapp.com",
  projectId: "mern-blog-9006e",
  storageBucket: "mern-blog-9006e.firebasestorage.app",
  messagingSenderId: "636742830976",
  appId: "1:636742830976:web:1f5f8bfd7413e7238e8f65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);