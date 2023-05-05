import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDin0IB5VtU2z4ImDBtMOyM_ly5cWbZd3E",
  authDomain: "react-coder-728ad.firebaseapp.com",
  projectId: "react-coder-728ad",
  storageBucket: "react-coder-728ad.appspot.com",
  messagingSenderId: "770244263933",
  appId: "1:770244263933:web:7c2274f5b5f8525777a394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)