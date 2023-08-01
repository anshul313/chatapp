// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnbDfmyVCb5sKzYnaG9quGhp5AxW7PyFs",
  authDomain: "chatapp-58eb3.firebaseapp.com",
  projectId: "chatapp-58eb3",
  storageBucket: "chatapp-58eb3.appspot.com",
  messagingSenderId: "1031354446447",
  appId: "1:1031354446447:web:4a8f0bdbefb332e418539a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();