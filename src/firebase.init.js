// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo2ra9yfb4akXqstOTX-3LhzWO_Ufqy-s",
  authDomain: "ema-john-simple-356d8.firebaseapp.com",
  projectId: "ema-john-simple-356d8",
  storageBucket: "ema-john-simple-356d8.appspot.com",
  messagingSenderId: "329251201037",
  appId: "1:329251201037:web:b390f3d99578c2418ab544",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
