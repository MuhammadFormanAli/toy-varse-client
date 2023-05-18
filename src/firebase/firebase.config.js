
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBT7cOgQR5mNEZqFnBXwChpbYu9u9Q0NGY",
  authDomain: "toy-verse-c7d78.firebaseapp.com",
  projectId: "toy-verse-c7d78",
  storageBucket: "toy-verse-c7d78.appspot.com",
  messagingSenderId: "1039028019649",
  appId: "1:1039028019649:web:75fc9c9bcf028869758f40"


  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




export default app;
