// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsddvzU0BmjIi4jVYZynwEshGlhmN5muc",
  authDomain: "kayo-915ba.firebaseapp.com",
  projectId: "kayo-915ba",
  storageBucket: "kayo-915ba.firebasestorage.app",
  messagingSenderId: "994360419130",
  appId: "1:994360419130:web:3904123066f16655332603",
  measurementId: "G-PT6CXLH36S"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// Firebase Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword };
// Initialize Firestore
export const db = getFirestore(app);