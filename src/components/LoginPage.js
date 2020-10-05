import React from 'react';
import { connect } from 'react-redux';

// Actions
import { startLoginGoogle } from '../actions/auth.js';

export const LoginPage = (props) => {
    const onLogin = () => {
        props.dispatch(startLoginGoogle());
    };
    return (
        <div>
            <h1>Welcome! Login to get started.</h1>
            <button onClick={onLogin}>Login</button>
        </div>
    );
};

export default connect()(LoginPage);