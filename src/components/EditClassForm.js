import React from 'react';
import { connect } from 'react-redux';

// Components
import ClassForm from './ClassForm.js';

// Actions
import { start_edit_class } from '../actions/classes.js';
import { start_remove_class } from '../actions/classes.js';

export class EditClassForm extends React.Component {
    onSubmit = (updates) => {
        this.props.dispatch(start_edit_class(this.props.class.id, updates));
        this.props.history.push('/');
    };
    onRemove = (aClass) => {
        this.props.dispatch(start_remove_class(aClass))
        this.props.history.push('/');
    };
    render() {
        return (
            <div className="container">
                <h1>Edit Class</h1>
                <ClassForm 
                    aClass={this.props.class}
                    onSubmit={this.onSubmit}
                >
                </ClassForm>
                <button onClick={() => this.onRemove(this.props.class)}>Remove</button>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => ({
    class: state.classes.find((aClass) => aClass.id == props.match.params.id)
});

export default connect(mapStateToProps)(EditClassForm);

