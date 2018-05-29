import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore'
import { addExpense, removeExponse, editExpense } from './actions/expenses';
import { getVisibleExpenses } from './selectors/expenses';

import { setTextFilter } from './actions/filters';

import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

console.log(store.getState());
store.dispatch(addExpense({
    description: 'Water Bill', 
    note: 'This is for Water Bil', 
    amount: 30, 
    createdAt: 0 
}));
store.dispatch(addExpense({
    description: 'Gas Bill', 
    note: 'This is for Gas Bil', 
    amount: 10, 
    createdAt: 0 
}));
store.dispatch(setTextFilter('Water'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expences, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
