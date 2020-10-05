import React from 'react';

const AddOption = (props) => (
    <div>
        <form onSubmit={props.onFormSubmit}>
                <input
                    type="text" 
                    placeholder="Option"
                    name="option"
                >
                </input>
                <button>Add Option</button>
        </form>
    </div>
);

export default AddOption;