// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNZmfD3y1GdiFQgLs23b1qsfztnrN-l_o",
  authDomain: "fir-todo-app-5a841.firebaseapp.com",
  projectId: "fir-todo-app-5a841",
  storageBucket: "fir-todo-app-5a841.appspot.com",
  messagingSenderId: "1070207211135",
  appId: "1:1070207211135:web:44cca88e57ae08849c914a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
export const db = getFirestore(app)