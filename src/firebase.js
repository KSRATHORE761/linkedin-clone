import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCf1OaA5ZQYxQU1fVaHeBGhCugPW0F0MII",
  authDomain: "linkedin-clone-c3458.firebaseapp.com",
  projectId: "linkedin-clone-c3458",
  storageBucket: "linkedin-clone-c3458.appspot.com",
  messagingSenderId: "972804406796",
  appId: "1:972804406796:web:15054d860fc5d5abc6b829",
  measurementId: "G-56C7T5X99M"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider,db}