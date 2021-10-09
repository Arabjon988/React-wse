import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCYrF5-ny8wXTEfWK-4vYus7WhmLFK_SEU",
    authDomain: "f-project-461a2.firebaseapp.com",
    projectId: "f-project-461a2",
    storageBucket: "f-project-461a2.appspot.com",
    messagingSenderId: "814530891374",
    appId: "1:814530891374:web:b0b5f3dd7d2a907b57a07f",
    measurementId: "G-CKF1TDETM4"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}