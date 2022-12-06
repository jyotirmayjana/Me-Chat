// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCmBiXU5idPqy5uzntL3lrOdTt0Z0V3as",
  authDomain: "mechat-63f20.firebaseapp.com",
  projectId: "mechat-63f20",
  storageBucket: "mechat-63f20.appspot.com",
  messagingSenderId: "328942596156",
  appId: "1:328942596156:web:1cd1be00ebcbabb1581339",
  measurementId: "G-XPWZDGJNFQ",
};

//register firebase
let registerFirebase = () => {
  return initializeApp(firebaseConfig);
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore();

export { auth, storage, db, registerFirebase };
