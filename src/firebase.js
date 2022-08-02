import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABLeRC5Ym5zu93GRehUKdb_uUpmQlJUSo",
    authDomain: "reels-abeec.firebaseapp.com",
    projectId: "reels-abeec",
    storageBucket: "reels-abeec.appspot.com",
    messagingSenderId: "1063698860105",
    appId: "1:1063698860105:web:a80cbda8160de2e5615798"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()