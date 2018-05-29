
export const getVisibleExpenses = (expences, { startDate, endDate, text, sortBy }) => {
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
