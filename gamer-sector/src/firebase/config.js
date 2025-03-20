
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAW8OKX9RIdxdmnd4sV2D-hFlaXB1VZths",
  authDomain: "react-gamer-sector.firebaseapp.com",
  projectId: "react-gamer-sector",
  storageBucket: "react-gamer-sector.firebasestorage.app",
  messagingSenderId: "883471815577",
  appId: "1:883471815577:web:cef95c7c8a11d2100c3908",
  measurementId: "G-JZ9HCP8X0D"
};
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp);
export const FirestoreDB = getFirestore( FirebaseApp );
export const FirebaseAnalytics = getAnalytics( FirebaseApp );