import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAsHLr8O7gluL3-3f9BTymydG7fzVpJ4zQ",
    authDomain: "instagram-clone-93c21.firebaseapp.com",
    projectId: "instagram-clone-93c21",
    storageBucket: "instagram-clone-93c21.appspot.com",
    messagingSenderId: "607045442335",
    appId: "1:607045442335:web:7c9ec10c1d446391602e2a",
    measurementId: "G-LPPYKCKDWW"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}