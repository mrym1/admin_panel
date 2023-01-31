// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAN-RQQ9qZd0VHdWWfo3mRYQZwQZzmFAFI",
  authDomain: "project-945a7.firebaseapp.com",
  projectId: "project-945a7",
  storageBucket: "project-945a7.appspot.com",
  messagingSenderId: "333009218452",
  appId: "1:333009218452:web:58142591eff0cf15b33d81",
  measurementId: "G-9R6BF0BGQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
