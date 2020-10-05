import React from 'react';
import { Link } from 'react-router-dom'

// Others

export default class ClassForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: props.aClass ? props.aClass.className : '',
            profName: props.aClass ? props.aClass.profName : '',
            profEmail: props.aClass ? props.aClass.profEmail: '',
            error: ''
        };
    };
    onClassChange = (e) => {
        const className = e.target.value;
        this.setState(() => ({
            className: className
        }));
    };
    onProfNameChange = (e) => {
        const profName = e.target.value;
        this.setState(() => ({
            profName: profName
        }));
    };
    onProfEmailChange = (e) => {
        const profEmail = e.target.value;
        this.setState(() => ({
            profEmail: profEmail
        }));
    };
    onHandleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.className || !this.state.profName || !this.state.profEmail) {
            this.setState(() => ({
                error: "Please fill in all of the blanks."
            }));
        } else {
            // Clear the error
            this.setState(() => ({
                error: ''
            }));
            this.props.onSubmit({
                className: this.state.className,
                profName: this.state.profName,
                profEmail: this.state.profEmail
            });
        };
    };
    render() {
        return (
            <div className="container">
                {
                    this.state.error &&
                    <h5>{this.state.error}</h5>
                }
                <form onSubmit={this.onHandleSubmit}>
                    <input 
                        autoFocus
                        type="text"
                        placeholder="Class Code"
                        value={this.state.className}
                        onChange={this.onClassChange}
                    >
                    </input>
                    <input 
                        type="text"
                        placeholder="Instructor Name"
                        value={this.state.profName}
                        onChange={this.onProfNameChange}
                    >
                    </input>
                    <input 
                        type="email" 
                        placeholder="Instructor Email"
                        value={this.state.profEmail}
                        onChange={this.onProfEmailChange}
                    >
                    </input>
                    <button>Save Class</button>
                    <Link to='/'>Cancel</Link>
                </form>
            </div>
        );
    };
};