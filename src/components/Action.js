import React from 'react';

const Action = (props) => (
    <div>
        <button 
            disabled={!props.valid > 0}
            onClick={props.onChooseBest}
        >
            What Should I Do?
        </button>
    </div>
);

export default Action;