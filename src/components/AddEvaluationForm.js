import React from 'react';
import { connect } from 'react-redux';

// Components
import EvaluationForm from './EvaluationForm.js';

// Actions
import { start_add_evaluation } from '../actions/evaluations.js';


export const AddEvaluationForm = (props) => {
    const onSubmit = (evaluation) => {
        props.dispatch(start_add_evaluation(props.course.id, evaluation));
        props.history.push('/');
    }
    return (
        <div className="container">
            <h1>Add Evaluation</h1>
            <EvaluationForm 
                course={props.course}
                onSubmit={onSubmit}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    course: state.classes.find((course) => course.id === props.match.params.id)
});

export default connect(mapStateToProps)(AddEvaluationForm);