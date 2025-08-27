// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiF9KwjweTAmQyOHAkOS1oy-ns2nWIuOY",
  authDomain: "locusstoregremio.firebaseapp.com",
  projectId: "locusstoregremio",
  storageBucket: "locusstoregremio.firebasestorage.app",
  messagingSenderId: "714478847095",
  appId: "1:714478847095:web:fc3cc07331d6858b477272",
  measurementId: "G-W505WCJF14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);