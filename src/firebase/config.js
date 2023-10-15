// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuic31at6YAzUVKwk25PtJOx08yo7ze1M",
  authDomain: "fir-login-80369.firebaseapp.com",
  projectId: "fir-login-80369",
  storageBucket: "fir-login-80369.appspot.com",
  messagingSenderId: "965205948523",
  appId: "1:965205948523:web:02f025eb47f151dd1a592e",
  measurementId: "G-QC58TRQ9GK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);