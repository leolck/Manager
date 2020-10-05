import React from 'react';
import { connect } from 'react-redux';

// Actions

// Others
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export class EvaluationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            evaluationType: this.props.evaluation ? this.props.evaluation.evaluationType : 'assignment',
            dueDate: this.props.evaluation ? moment(this.props.evaluation.dueDate) : moment(),
            weight: this.props.evaluation ? this.props.evaluation.weight : '',
            targetedUnits: this.props.evaluation ? this.props.evaluation.targetedUnits : '',
            calendarFocused: false
        };
    };
    
    onDateChange = (dueDate) => {
        if(dueDate) {
            this.setState(() => ({
                dueDate: dueDate
            }));
        };
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendarFocused: focused
        }));
    };

    onTypeChange = (e) => {
        const evaluationType = e.target.value;
        this.setState(() => ({
            evaluationType: evaluationType
        }));
    };

    onWeightChange = (e) => {
        const weight = e.target.value;
        this.setState(() => ({
            weight: weight
        }));
    };

    onUnitsChange = (e) => {
        const targetedUnits = e.target.value;
        this.setState(() => ({
            targetedUnits: targetedUnits
        }));
    };

    onSubmit = (e) => {
        e.preventDefault(); 
        this.props.onSubmit(
            {
                course: this.props.course.className,
                evaluationType: this.state.evaluationType,
                dueDate: this.state.dueDate.valueOf(),
                weight: this.state.weight,
                targetedUnits: this.state.targetedUnits
            }
        );
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <select
                        onChange={this.onTypeChange}
                        autoFocus={true}
                        required={true}
                        value={this.state.evaluationType}
                    >
                        <option value="assignment">Assignment</option>
                        <option value="quiz">Quiz</option>
                        <option value="midterm">Midterm</option>
                        <option value="final">Final</option>
                    </select>
                    <div>
                        <SingleDatePicker 
                            date={this.state.dueDate}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                        />
                    </div>
                    <input
                        placeholder="Weight (%)"
                        onChange={this.onWeightChange}
                        required={true}
                        value={this.state.weight}
                    >
                    </input>
                    <input 
                        placeholder="Targeted Units"
                        onChange={this.onUnitsChange}
                        value={this.state.targetedUnits}
                    >
                    </input>
                    <button>Submit</button>
                </form>
            </div>
        );
    };
};

export default connect()(EvaluationForm);
