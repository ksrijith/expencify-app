import uuid from 'uuid';
export const addExpense = (
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

export const removeExponse = (
    {
        id
    } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    expence: {
        id
    }
});

export const editExpense = (
    {
        id,
        updates
    } = {}
) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
