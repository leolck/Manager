// Firebase
import database from '../firebase/firebase.js';

export const add_class = (aClass = {}) => ({
    type: 'ADD_CLASS',
    class: aClass
});

export const start_add_class = ({ className = '',  profName = '', profEmail = ''}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const aClass = {className, profName, profEmail};
        return database.ref(`users/${uid}/classes`).push(aClass).then((ref) => {
            dispatch(add_class({
                id: ref.key,
                ...aClass
            }));
        });
    };
};

export const edit_class = (id, updates) => ({
    type: 'EDIT_CLASS',
    id: id,
    updates: updates
});

export const start_edit_class = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
;        return database.ref(`users/${uid}/classes/${id}`).update(updates).then(() => {
            dispatch(edit_class(id, updates));
        });
    };
};

export const set_classes = (classes) => ({
    type: 'SET_CLASSES',
    classes: classes
});

export const start_set_classes = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/classes`).once('value').then((snapshot) => {
            const classes = [];
            snapshot.forEach((childSnapshot) => {
                classes.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(set_classes(classes));
        });
    };  
}; 

export const remove_class = ({ id } = {}) => ({
    type: 'REMOVE_CLASS',
    id: id
});

export const start_remove_class = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/classes/${id}`).remove().then(() => {
            dispatch(remove_class({ id }))
        })
    };
};


