
import { firebase, googleAuthProvider } from '../firebase/firebase.js';

export const login = (uid, displayName, email) => ({
    type: 'LOGIN',
    uid: uid,
    displayName: displayName,
    email: email
});

export const startLoginGoogle = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};