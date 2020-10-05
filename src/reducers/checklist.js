const checklistDefaultState = [];

export default (state = checklistDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.item
            ];
        case 'REMOVE_ITEM':
            return state.filter(({itemName}) => itemName != action.itemName);
        case 'REMOVE_ALL':
            return [];
        default:
            return state
    };
};