
const evaluationDefaultState = [];

export default (state = evaluationDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EVALUATION':
            return [
                ...state,
                action.evaluation
            ];
        case 'EDIT_EVALUATION':
            return state.map((evaluation) => {
                if(evaluation.id === action.ideval) {
                    return {
                        ...evaluation,
                        ...action.updates
                    };
                } else {
                    return evaluation;
                };
            });
        case 'SET_EVALUATIONS':
            return action.evaluations
        case 'REMOVE_EVALUATION':
            return state.filter((evaluation) => evaluation.id !== action.ideval);
        default:
            return state
    };
};