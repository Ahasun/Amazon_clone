// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoKZZexigqRv4ZPcalBeNrdRCr3a4BiHg",
  authDomain: "clone-b8941.firebaseapp.com",
  projectId: "clone-b8941",
  storageBucket: "clone-b8941.appspot.com",
  messagingSenderId: "702106213730",
  appId: "1:702106213730:web:519cf7dff6b9f4d464e03b",
  measurementId: "G-R9RQ29ZTG9"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export {db,auth};