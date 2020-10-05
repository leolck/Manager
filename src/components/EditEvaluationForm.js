import React from 'react';
import { connect } from 'react-redux';

// Components
import EvaluationForm from './EvaluationForm.js';

// Actions
import { start_edit_evaluation, start_remove_evaluation } from '../actions/evaluations.js';


export class EditEvaluationForm extends React.Component {
    onSubmit = (evaluation) => {
        this.props.dispatch(start_edit_evaluation(
            this.props.course.id, this.props.evaluation.id, evaluation
        ));
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.dispatch(start_remove_evaluation(
            this.props.course.id, this.props.evaluation.id
        ));
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="container">
                <h1>Edit Evaluation</h1>
                <EvaluationForm 
                    course={this.props.course}
                    evaluation={this.props.evaluation}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => ({
    course: state.classes.find((course) => course.id === props.match.params.id),
    evaluation: state.evaluations.find((evaluation) => evaluation.id === props.match.params.ideval)
});

export default connect(mapStateToProps)(EditEvaluationForm);