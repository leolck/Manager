import database from '../firebase/firebase.js';

export const add_evaluation = (id, evaluation) => ({
    type: 'ADD_EVALUATION',
    id: id,
    evaluation: evaluation
});

export const start_add_evaluation = (id, evaluation) => {
     return (dispatch, getState) => {
         const uid = getState().auth.uid;
         return database.ref(`users/${uid}/classes/${id}/evaluations`).push(evaluation).then((ref) => {
            dispatch(add_evaluation(id, {
                id: ref.key,
                ...evaluation
            }));
         });
     };
};

export const edit_evaluation = (ideval, updates) => ({
    type: 'EDIT_EVALUATION',
    ideval: ideval,
    updates: updates
});

export const start_edit_evaluation = (id, ideval, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`/users/${uid}/classes/${id}/evaluations/${ideval}`).update(updates).then(() => {
            dispatch(edit_evaluation(ideval, updates));
        });
    };
};

export const remove_evaluation = (ideval) => ({
    type: 'REMOVE_EVALUATION',
    ideval: ideval
});

export const start_remove_evaluation = (id, ideval) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/classes/${id}/evaluations/${ideval}`).remove().then(() => {
            dispatch(remove_evaluation(ideval));
        });
    };
};

export const set_evaluations = (evaluations) => ({
    type: 'SET_EVALUATIONS',
    evaluations: evaluations
});

export const start_set_evaluations = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/classes`).once('value').then((snapshot) => {
            const evaluations = [];
            snapshot.forEach((childSnapshot) => {
                childSnapshot.child("evaluations").forEach((evaluation) => {
                    evaluations.push({
                        id: evaluation.key,
                        ...evaluation.val()
                    });
                });
            });
            dispatch(set_evaluations(evaluations));
        });
    };
};