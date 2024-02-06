// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "collborative-doc.firebaseapp.com",
  projectId: "collborative-doc",
  storageBucket: "collborative-doc.appspot.com",
  messagingSenderId: "791198758607",
  appId: "1:791198758607:web:0b61569c57ea2b374c69ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export  const db =getFirestore(app)
export const storage = getStorage(app)

