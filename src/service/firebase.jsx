// Esto fue copiado desde https://console.firebase.google.com/ cuando se creó la DB "productos"
//
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl0HOoEPQz8BUtQL-x53XAd_1qBELPfyQ",
  authDomain: "coder-scz-88190.firebaseapp.com",
  projectId: "coder-scz-88190",
  storageBucket: "coder-scz-88190.firebasestorage.app",
  messagingSenderId: "627636914963",
  appId: "1:627636914963:web:4d77223866d7758d79a8e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);  // Import getFirestore from 'firebase/firestore' to use this line