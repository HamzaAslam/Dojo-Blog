import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm_gaP9C2VaHE3IoYs2yyUGjnMC_gQ8B8",
  authDomain: "dojoblog-5f9f1.firebaseapp.com",
  projectId: "dojoblog-5f9f1",
  storageBucket: "dojoblog-5f9f1.appspot.com",
  messagingSenderId: "106031261612",
  appId: "1:106031261612:web:ddd7f9e492a371ba223c09",
  measurementId: "G-Y831X0V4C1",
};
// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore for project
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFireStore, timestamp };
