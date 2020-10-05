import React from 'react'
import { Link } from 'react-router-dom';

// Store
import { connect } from 'react-redux';

// Components
import Header from './Header.js';
import ListClassItem from './ListClassItem.js';
import ListAssessments from './ListAssessments.js';
import AssessmentFilters from './AssessmentFilters.js';

// Actions
import selectEvaluations from '../selectors/studentEvaluations.js';


export class Manager extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <h2>Upcoming Assessments This Week</h2>
                <AssessmentFilters />
                {
                    this.props.evaluations.map((evaluation) => {
                        return <ListAssessments 
                            key={evaluation.id} 
                            evaluation={evaluation}/>
                    })
                }
                <Link to="/create">Add Class</Link>
                {
                    this.props.classes.map((aClass) => {
                        return <ListClassItem key={aClass.id} aClass={aClass}/>
                    })
                }
            </div>
        );
        
    };
};

const mapStateToProps = (state) => ({
    classes: state.classes,
    evaluations: selectEvaluations(state.evaluations, state.filters)
});

export default connect(mapStateToProps)(Manager);