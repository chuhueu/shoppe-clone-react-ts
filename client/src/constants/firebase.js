import firebase from "firebase/compat/app";
import "firebase/storage";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF2m5m57xg_ortfBPdzdrdidWCwKT7sjM",
  authDomain: "shopee-bhsoft-upload.firebaseapp.com",
  projectId: "shopee-bhsoft-upload",
  storageBucket: "shopee-bhsoft-upload.appspot.com",
  messagingSenderId: "571847159061",
  appId: "1:571847159061:web:b5df4eb1cfc490f241cd1c",
  measurementId: "G-7S322HHQKJ",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
