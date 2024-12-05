// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtlpu3ivqAp-1dj8_iS8VRTZBLykH9RsA",
  authDomain: "e-commerce-store-0.firebaseapp.com",
  projectId: "e-commerce-store-0",
  storageBucket: "e-commerce-store-0.firebasestorage.app",
  messagingSenderId: "63920784018",
  appId: "1:63920784018:web:6e7a0c42fba2d76ae01c4b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
