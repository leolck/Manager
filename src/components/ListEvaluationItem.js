import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


export const ListEvaluationItem = (props) => {
    return (
        <Link to={`/${props.id}/${props.evaluation.id}`}>
            <div>
                <h3>{props.evaluation.evaluationType}</h3>
                <span>Due: {moment(props.evaluation.dueDate).format('MMM Do, YYYY')}</span>
            </div>
        </Link>
    );
};

export default ListEvaluationItem;

