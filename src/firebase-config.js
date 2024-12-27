import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoSsp4wHbbd1PCGNXZ7j3BumHSzONThyM",
  authDomain: "clinic-cf47e.firebaseapp.com",
  projectId: "clinic-cf47e",
  storageBucket: "clinic-cf47e.firebasestorage.app",
  messagingSenderId: "1074076686890",
  appId: "1:1074076686890:web:00a634128b65f0f8b40153",
  measurementId: "G-RM5333Q0CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)