import React from 'react';
import { createBrowserHistory as createHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';
import PublicRoute from './PublicRoute.js';

// Components
import LoginPage from '../components/LoginPage.js';
import HomePage from '../components/HomePage.js';
import NotFound from '../components/NotFound.js';
import Todo from '../components/Todo.js';
import Manager from '../components/Manager.js';
import AddClassForm from '../components/AddClassForm.js';
import EditClassForm from '../components/EditClassForm.js';
import ManageClass from '../components/ManageClass.js';
import AddEvaluationForm from '../components/AddEvaluationForm.js';
import Evaluation from '../components/Evaluation.js';
import EditEvaluationForm from '../components/EditEvaluationForm.js';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true}></PublicRoute>
                <PrivateRoute path="/home" component={HomePage}></PrivateRoute>
                <PrivateRoute path='/todo' component={Todo}></PrivateRoute>
                <PrivateRoute path="/manager" component={Manager}></PrivateRoute>
                <PrivateRoute path="/create" component={AddClassForm}></PrivateRoute>
                <PrivateRoute path="/edit/:id" component={EditClassForm}></PrivateRoute>
                <PrivateRoute path="/:id" component={ManageClass} exact={true}></PrivateRoute>
                <PrivateRoute path="/:id/create" component={AddEvaluationForm}></PrivateRoute>
                <PrivateRoute path="/:id/:ideval" component={Evaluation} exact={true}></PrivateRoute>
                <PrivateRoute path="/:id/edit/:ideval" component={EditEvaluationForm}></PrivateRoute>
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;