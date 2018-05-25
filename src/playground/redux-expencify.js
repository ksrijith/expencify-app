import { createStore, combineReducers } from 'redux';


const expencesReducerDefaultState = [];
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
};

// filters reducer

const filtersReducer = ( state = filterReducerDefaultState, action ) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Expences Reducer
const expencesReducer = ( state = expencesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expences: expencesReducer,
        filters: filtersReducer
    })    
);
console.log(store.getState());

const demoState = {
    expences: [{
        id: 'addasdsad',
        description: 'January Rent',
        note: 'This is the final payment for the address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}


