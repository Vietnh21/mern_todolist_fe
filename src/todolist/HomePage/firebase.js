import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/compat/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuQbnkUY02T4yqgY0G-2MWI_KVotz3zFQ",
  authDomain: "viet-618ae.firebaseapp.com",
  projectId: "viet-618ae",
  storageBucket: "viet-618ae.appspot.com",
  messagingSenderId: "714875396799",
  appId: "1:714875396799:web:38b9278181da0858d5dc0a",
  measurementId: "G-Y0QS42X5XT",
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
export default firebase;
