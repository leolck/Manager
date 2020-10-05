const classesReducerDefaultState = [];

export default (state = classesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CLASS':
            return [
                ...state,
                action.class
            ];
        case 'EDIT_CLASS':
            return state.map((course) => {
                if (course.id === action.id) {
                    return {
                        ...course,
                        ...action.updates
                    };
                } else {
                    return course;
                };
            });
        case 'SET_CLASSES':
            return action.classes
        case 'REMOVE_CLASS':
            return state.filter(({ id }) => id !== action.id)
        default:
            return state;
    };
};