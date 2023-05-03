// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJnrGvr2PY_R01bhrcgCV7-KiD_wOAccU",
  authDomain: "midtermacitivity.firebaseapp.com",
  projectId: "midtermacitivity",
  storageBucket: "midtermacitivity.appspot.com",
  messagingSenderId: "1052463843703",
  appId: "1:1052463843703:web:39be2df8d797a581223972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db };
export { auth };