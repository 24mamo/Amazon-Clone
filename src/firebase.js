// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCi_uwKF9cYNP9vrIirCrCqg0UgFAl8Atg",
    authDomain: "clone-50f0c.firebaseapp.com",
    projectId: "clone-50f0c",
    storageBucket: "clone-50f0c.appspot.com",
    messagingSenderId: "874096729721",
    appId: "1:874096729721:web:370f8fa2a8413e2293fea8",
    measurementId: "G-36JVZ42ZFP"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
