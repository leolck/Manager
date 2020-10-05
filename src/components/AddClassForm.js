import React from 'react';
// Components
import ClassForm from './ClassForm.js';
// Store
import { connect } from 'react-redux';
import { start_add_class } from '../actions/classes.js';

export class AddClassForm extends React.Component {
    onSubmit = (aClass) => {
        this.props.dispatch(start_add_class(aClass));
        this.props.history.push('/');
    };
    render() {
        return (
            <div className="container">
                <h1>Add Class</h1>
                <ClassForm onSubmit={this.onSubmit}/>
            </div>
        );
    };
};

export default connect()(AddClassForm);