// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcjYyrJHE3yXW_vIpJy5A40DtAsosz4EE",
  authDomain: "coder-mariana.firebaseapp.com",
  projectId: "coder-mariana",
  storageBucket: "coder-mariana.firebasestorage.app",
  messagingSenderId: "580910059887",
  appId: "1:580910059887:web:6fda8837e3eb9d33b8989a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);