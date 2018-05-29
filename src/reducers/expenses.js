const expensesReducerDefaultState = [];

// Expences Reducer
export default ( state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [ ...state, action.expence ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.expence.id );
        case 'EDIT_EXPENSE':
            return state.map( (expence) => {
                if (expence.id === action.id) {
                    return { ...expence, ...action.updates };
                } else {
                    return expence;
                }
            });
        default:
            return state;
    }
};
