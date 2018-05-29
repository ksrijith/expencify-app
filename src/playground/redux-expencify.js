import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expence: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExponse = (
    {
        id
    } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    expence: {
        id
    }
});

const editExpense = (
    {
        id,
        updates
    } = {}
) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate: startDate
});
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate: endDate
});

const getVisibleExpenses = (expences, { startDate, endDate, text, sortBy }) => {
    return expences.filter( expence => {
        const startDateMatch = typeof startDate !== 'number' || expence.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expence.createdAt <= endDate;
        const textMatch = !expence.description || expence.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        switch (sortBy){
            case 'date':
                if (a.createdAt === b.createdAt) {
                    return 0;
                } if (a.createdAt > b.createdAt) {
                    return -1;
                } else {
                    return 1;
                }
            case 'amount':
                if (a.amount === b.amount) {
                    return 0;
                } if (a.amount > b.amount) {
                    return -1;
                } else {
                    return 1;
                }
        }

    });
};

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
        case 'SET_TEXT_FILTER': 
            return { ...state,  text: action.text };
        case 'SORT_BY_DATE': 
            return { ...state,  sortBy: 'date' };
        case 'SORT_BY_AMOUNT': 
            return { ...state,  sortBy: 'amount' };
        case 'SET_START_DATE': 
            return { ...state,  startDate: action.startDate };
        case 'SET_END_DATE': 
            return { ...state,  endDate: action.endDate };
        default:
            return state;
    }
};

// Expences Reducer
const expencesReducer = ( state = expencesReducerDefaultState, action) => {
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

const store = createStore(
    combineReducers({
        expences: expencesReducer,
        filters: filtersReducer
    })    
);

store.subscribe(() => {
    const state = store.getState();
    console.log(state);
    const visibleExpenses = getVisibleExpenses(state.expences, state.filters);
    console.log(visibleExpenses);
});

const rent = store.dispatch(addExpense( { description: 'Rent', amount: 300, createdAt: 1000 }));
const coffee = store.dispatch(addExpense( { description: 'Coffee', amount: 200, createdAt: 800 }));
// console.log(rent);
// store.dispatch(removeExponse({id: rent.expence.id }));
// store.dispatch(editExpense( {id: coffee.expence.id, updates: { amount: 10, note: 'New Note' } }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(105));
// store.dispatch(setEndDate(3));
store.dispatch(setTextFilter('re'));
store.dispatch(sortByDate());

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


