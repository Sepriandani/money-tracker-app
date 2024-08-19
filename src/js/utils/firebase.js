// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjtRxRhyYluGPBUuDcUl7ydN4itda4PJo",
  authDomain: "money-tracker-app-6a48e.firebaseapp.com",
  projectId: "money-tracker-app-6a48e",
  storageBucket: "money-tracker-app-6a48e.appspot.com",
  messagingSenderId: "100300623813",
  appId: "1:100300623813:web:847dc3cd4988618e1085ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };