import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth.js';
import classesReducer from '../reducers/classes.js';
import checklistReducer from '../reducers/checklist.js';
import evaluationsReducer from '../reducers/evaluations.js';
import filtersReducer from '../reducers/filters.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            checklist: checklistReducer,
            classes: classesReducer,
            evaluations: evaluationsReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};