import React from 'react';
import { Link } from 'react-router-dom';

export const ListClassItem = (props) => (
    <Link to={`${props.aClass.id}`}>
        <div>
            <h3>{props.aClass.className}</h3>
        </div>
    </Link>
);

export default ListClassItem;