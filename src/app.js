import React from 'react';
import ReactDOM from 'react-dom';
import { firebase } from './firebase/firebase.js'

// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';

// Router
import AppRouter, { history } from './routers/AppRouter.js';

// Actions
import { login, logout } from './actions/auth.js';
import { start_set_classes } from './actions/classes.js';
import { start_set_evaluations } from './actions/evaluations.js';
 
// Other
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    };
};

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid, user.displayName, user.email));
        store.dispatch(start_set_classes());
        store.dispatch(start_set_evaluations()).then(() => {
            renderApp();
            if(history.location.pathname === '/') {
                history.push('/home');
            };
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    };
});
