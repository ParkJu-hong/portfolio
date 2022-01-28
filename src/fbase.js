import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKGkxhrSD0HtkYi0ztVB3lmyrOWwAP388",
  authDomain: "jeju-98f58.firebaseapp.com",
  projectId: "jeju-98f58",
  storageBucket: "jeju-98f58.appspot.com",
  messagingSenderId: "410551051268",
  appId: "1:410551051268:web:5a0880c5d4b3ef7d8f0151",
  measurementId: "G-X3S1VHYCVZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();