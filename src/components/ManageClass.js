import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Others

// Components
import ListEvaluationItem from './ListEvaluationItem.js';

// Selectors
import selectEvaluations from '../selectors/classEvaluations.js';

export class ManageClass extends React.Component {
    state = {
        notes: ''
    };
    onNotesChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({
            notes: notes
        }));
    };
    render() {
        return (
            <div className="container">
                <Link to={`/edit/${this.props.course.id}`}>Edit Class</Link>
                <h2>Class: {this.props.course.className}</h2>
                <h2>Professor: {this.props.course.profName}</h2>
                <h2>Professor Email: {this.props.course.profEmail}</h2>
                <h2>Todo List</h2>
                <textarea 
                    value={this.state.notes}
                    onChange={this.onNotesChange}
                >
                </textarea>
                <h2>Upcoming Events</h2>
                {
                    this.props.evaluations.map((evaluation) => {
                        return <ListEvaluationItem 
                            id={this.props.course.id}
                            key={evaluation.id}
                            evaluation={evaluation}
                            />
                    })
                }
                <Link to={`/${this.props.match.params.id}/create`}>Add Evaluation</Link>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => {
    const course = state.classes.find((course) => course.id === props.match.params.id);
    const evaluations = selectEvaluations(course, state.evaluations);
    return {
        course: course,
        evaluations: evaluations
    };
};

export default connect(mapStateToProps)(ManageClass);