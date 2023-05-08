// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth,signInWithPopup,FacebookAuthProvider } from "firebase/auth";
import { getFirestore ,collection, addDoc ,getDocs  ,doc, updateDoc ,deleteDoc,setDoc} from "firebase/firestore";
 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3B9IY13slXmHPevFNKeECO5mdmAUonC4",
  authDomain: "projecttest-2eb97.firebaseapp.com",
  projectId: "projecttest-2eb97",
  storageBucket: "projecttest-2eb97.appspot.com",
  messagingSenderId: "303465273517",
  appId: "1:303465273517:web:e2ce7422518590a7484e24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth ;

export const provider=new GoogleAuthProvider(app);
export const provider2=new FacebookAuthProvider(app);
const db = getFirestore(app);
export {app,db,getFirestore ,collection, setDoc ,addDoc ,getDocs ,doc, updateDoc ,deleteDoc};

const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  const uid = user.uid;
}

// export const signInWithGoogle=()=>{
//   signInWithPopup (auth,provider)
//   .then((result)=>{
//     const name=result.user.displayName;
//     const email=result.user.email;
//     const profilePic=result.user.photoURL;
    
//     navigation.navigate("Register");
//     localStorage.setItem("name",name);
//     localStorage.setItem("email",email);
//     localStorage.setItem("profilePic",profilePic);

    
//   })  
//   .cath((error)=>{
//       console.log(error);
//   });
// }