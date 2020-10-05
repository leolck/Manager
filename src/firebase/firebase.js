import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCBkhMDdEjhNsr_lDQ7bYgPEbCSqzZZ66Y",
    authDomain: "todo-d565d.firebaseapp.com",
    databaseURL: "https://todo-d565d.firebaseio.com",
    projectId: "todo-d565d",
    storageBucket: "todo-d565d.appspot.com",
    messagingSenderId: "121545529566",
    appId: "1:121545529566:web:a1e92850672ee5caf34a4f",
    measurementId: "G-34GXDQRXBC"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }; 