import React from 'react';

// Components
import SelectedModal from './SelectedModal.js'

export default class OptionsSummary extends React.Component {
    render() {
        return (
            <div>
                <h4>Options</h4>
                <button onClick={this.props.onRemoveAll}>Remove All</button>
                {
                    this.props.options.length == 0 && 
                    <h3>Please add an option to get started.</h3>
                }
                <ol>
                    {
                        this.props.options.map((option) => (
                            <div key={option}>
                                <li>{option}</li>
                                <button onClick={() => this.props.onRemoveOption(option)}
                                >
                                    X
                                </button>
                            </div>
                        ))
                    }
                </ol>
                {
                    this.props.choice !== -1 && 
                    <h2>{this.props.options[this.props.choice]}</h2>
                }
            </div>
        );
    }
};
