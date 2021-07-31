import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBelDp9diZ2dx8E81YbTX_OkVm00QrbwAY",
    authDomain: "gallery-vue3.firebaseapp.com",
    projectId: "gallery-vue3",
    storageBucket: "gallery-vue3.appspot.com",
    messagingSenderId: "94634436654",
    appId: "1:94634436654:web:1efee470338a2eb2bbd7bf"
};

firebase.initializeApp(firebaseConfig);

//definitions
const repo = firebase.storage();
const database = firebase.firestore();
const date = firebase.firestore.FieldValue.serverTimestamp;

export { repo, database, date }