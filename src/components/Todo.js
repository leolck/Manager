import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

// Components
import Header from './Header.js';
import Action from './Action.js';
import AddOption from './AddOption.js';
import OptionsSummary from './OptionsSummary.js';

// Actions

export class Todo extends React.Component {
    state = {
        options: [],
        choice: -1,
        error: undefined
    }
    // Check the validity of the submitted input - accept or deny it
    onHandleOption = (option) => {
        if (!option) {
            return "You need to enter a valid option.";
        } else if (this.state.options.includes(option)) {
            return "You already entered this option. Enter something unique.";
        } else {
            this.setState((prevState) => ({
                options: prevState.options.concat(option)
            }));
        };
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        const submission = e.target.elements.option.value.trim();   
        const error = this.onHandleOption(submission);
        // Keep track of whether or not the user has entered something incorrectly
        this.setState(() => ({
            error: error
        }));
        // Reset the textbox
        if (!error) {
            e.target.elements.option.value = ''
        };
    };
    onRemoveOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    };
    // Remove all user-inputted submissions
    onRemoveAll = () => {
        this.setState(() => ({
            options: []
        }));
    };
    onChooseBest = () => {
        this.setState((prevState) => ({
            choice: Math.floor(Math.random() * prevState.options.length),
        }));
    }
    render() {
        return (
            <div className="container">
                <Header />
                <h1>To Do List</h1>
                <Link to="/manager">Manager</Link>
                <OptionsSummary 
                    options={this.state.options}
                    choice={this.state.choice}
                    onRemoveAll={this.onRemoveAll}
                    onRemoveOption={this.onRemoveOption}
                >
                </OptionsSummary>
                <AddOption onFormSubmit={this.onFormSubmit}></AddOption>
                <Action 
                    onChooseBest={this.onChooseBest}
                    valid={this.state.options.length}
                >
                </Action>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    checklist: state.checklist
});

export default connect(mapStateToProps)(Todo);