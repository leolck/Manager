import React from 'react';
import moment from 'moment';

export const ListAssessments = (props) => {
    return (
        <div>
            <h4>{props.evaluation.course} : upcoming {props.evaluation.evaluationType} worth {props.evaluation.weight}%</h4>
            <h4>Due date: {moment(props.evaluation.dueDate).format('MMMM Do, YYYY')}</h4>
        </div>
    );
};

export default ListAssessments;