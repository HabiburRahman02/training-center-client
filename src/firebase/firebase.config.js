// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjrWmIe83GFSHOckbnVMW0S8_0oSc76iE",
  authDomain: "training-center-89394.firebaseapp.com",
  projectId: "training-center-89394",
  storageBucket: "training-center-89394.appspot.com",
  messagingSenderId: "53474122523",
  appId: "1:53474122523:web:6765de4890c504720991be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;