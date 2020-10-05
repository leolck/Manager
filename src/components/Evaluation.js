import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Evaluation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: ''
        };
    };
    onNotesChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({
            notes: notes,
            questions: '',
            answers: ''
        }));
    };
    render() {
        return (
            <div className="container">
                <Link to={`/${this.props.match.params.id}/edit/${this.props.match.params.ideval}`}>Edit Evaluation</Link>
                <div>
                    <h3>Notes</h3>
                    <textarea value={this.state.notes} onChange={this.onNotesChange}></textarea>
                </div>
                <div>
                    <h3>Questions</h3>
                </div>
            </div>
        );
    };
};

export default connect()(Evaluation);