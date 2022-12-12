// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailLink } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDraije-CnGz-C7LeKNPGJUCcer4YfoBME",
  authDomain: "ngoapp-fb630.firebaseapp.com",
  projectId: "ngoapp-fb630",
  storageBucket: "ngoapp-fb630.appspot.com",
  messagingSenderId: "1069022086052",
  appId: "1:1069022086052:web:ad63fe7b60cc8f305b3731",
  measurementId: "G-PDJ3G3VQJN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
