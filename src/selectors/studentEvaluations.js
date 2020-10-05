
export default (evaluations, { sortBy }) => {
    return evaluations.sort((a,b) => {
        if (sortBy === 'date') {
           return a.dueDate > b.dueDate ? 1 : -1 
        } else if (sortBy === 'weight') {
            return a.weight > b.weight ? 1 : -1
        };
    });
};