// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore ,collection, addDoc ,getDocs  ,doc, updateDoc ,deleteDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPVtn9Q_tLSBrurfxUZ23hvfo57iUG0HQ",
  authDomain: "cart-6d660.firebaseapp.com",
  projectId: "cart-6d660",
  storageBucket: "cart-6d660.appspot.com",
  messagingSenderId: "498597854635",
  appId: "1:498597854635:web:171813e10204eb4cc426ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app,db,getFirestore ,collection, addDoc ,getDocs ,doc, updateDoc ,deleteDoc};