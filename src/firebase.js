// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtE--1md-BSpTPKrc5q98-97yNFFgWYCM",
  authDomain: "hack-ccelerate.firebaseapp.com",
  projectId: "hack-ccelerate",
  storageBucket: "hack-ccelerate.appspot.com",
  messagingSenderId: "518283002473",
  appId: "1:518283002473:web:61e3aa5f73fce31af318f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);