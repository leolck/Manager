import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { startLogout } from '../actions/auth.js';

export const Header = (props) => {
    const onLogout = () => {
        props.dispatch(startLogout());
    };
    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <Link 
                        className="header__title"
                        to="/home"
                    >
                        <h1>School Manager</h1>
                    </Link>
                    <button 
                        className="button button--link"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    id: state.auth.uid,
    displayName: state.auth.displayName,
    email: state.auth.email
});

export default connect(mapStateToProps)(Header);