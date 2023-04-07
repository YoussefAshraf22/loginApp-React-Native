// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCfyfjA9t8mHU1MwUtj9rtbSbcG4uRyChA',
  authDomain: 'test-b3f67.firebaseapp.com',
  projectId: 'test-b3f67',
  storageBucket: 'test-b3f67.appspot.com',
  messagingSenderId: '932276523867',
  appId: '1:932276523867:web:efad9590d1c632d284007e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
