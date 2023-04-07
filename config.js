//firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//Ur web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCYFPyLy_gCxKL_cLcqSLjhcJTu2tsWuXc',
  authDomain: 'login-register-7080b.firebaseapp.com',
  projectId: 'login-register-7080b',
  storageBucket: 'login-register-7080b.appspot.com',
  messagingSenderId: '456040720906',
  appId: '1:456040720906:web:cc57b22c15d0c394934df3',
  measurementId: 'G-ZYQM64NC5D',
};

//My Special Key
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
