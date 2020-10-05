
export const add_item = (item = {}) => ({
    type: 'ADD_ITEM',
    item: item
});

export const remove_item = ( {itemName} = {} ) => ({
    type: 'REMOVE_ITEM',
    itemName: itemName
});

export const remove_all = () => ({
    type: 'REMOVE_ALL'
});