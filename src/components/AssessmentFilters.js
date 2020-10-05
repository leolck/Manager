import React from 'react';
import { connect } from 'react-redux';

// actions
import { sort_by_date, sort_by_weight } from '../actions/filters';

export class AssessmentFilters extends React.Component {
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.dispatch(sort_by_date());
        } else if (e.target.value === 'weight') {
            this.props.dispatch(sort_by_weight());
        };
    };
    render() {
        return (
            <div className="container">
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value='date'>Date</option>
                    <option value='weight'>Weight</option>
                </select>
            </div>
        ); 
    };
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(AssessmentFilters);