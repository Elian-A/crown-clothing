// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzmBVBlr4hiBLjR8OSxz0hX5fnhuJ7oZM",
  authDomain: "crown-5c5b2.firebaseapp.com",
  projectId: "crown-5c5b2",
  storageBucket: "crown-5c5b2.appspot.com",
  messagingSenderId: "1093731440816",
  appId: "1:1093731440816:web:7fd570212a24337a8a8375",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createUserAuthWithEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User Created");
  } catch (err) {
    console.error(err);
  }
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  try {
    const userAuth = await signInWithEmailAndPassword(auth, email, password);
    console.log(userAuth);
  } catch (err) {
    console.error(err);
  }
};

export const updateAuthState = (callback) => onAuthStateChanged(auth, callback);

export const userSignOut = () => signOut(auth);
