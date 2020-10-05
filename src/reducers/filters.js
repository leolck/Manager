const filtersDefaultState = { sortBy: 'date' }

export default (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'sort_by_date':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'sort_by_weight':
            return {
                ...state,
                sortBy: 'weight'
            };
        default: {
            return state;
        };
    };
};