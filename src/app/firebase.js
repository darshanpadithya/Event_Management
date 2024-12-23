// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Only import if using Firestore
import { getDatabase } from "firebase/database"; // Only import if using Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyDwzsVzvFav8Mp5QZxEAcY6IDygtMRqSfU",
  authDomain: "webnot-3e5de.firebaseapp.com",
  projectId: "webnot-3e5de",
  storageBucket: "webnot-3e5de.firebasestorage.app",
  messagingSenderId: "877969883",
  appId: "1:877969883:web:1e412888968005c2bda7fe",
};

// Initialize Firebase app (singleton pattern)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Firebase services
const auth = getAuth(app);
const db = getFirestore(app); // Comment out if not using Realtime Database

export { app, auth, db }; // Remove firestore and database if not using them
