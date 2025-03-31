import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCjZS-CeKqqj8ozg9T0To2xtPVsFYUwzEA",
  authDomain: "swiggy-project-9b8b8.firebaseapp.com",
  projectId: "swiggy-project-9b8b8",
  storageBucket: "swiggy-project-9b8b8.firebasestorage.app",
  messagingSenderId: "853000414707",
  appId: "1:853000414707:web:194c8dafe7fc13eb369e86",
  measurementId: "G-XXZW3GQPVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()
