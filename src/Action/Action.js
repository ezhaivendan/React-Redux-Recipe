let id = 0;
export const ADD_RECIPE  = (recipe) => ({
    type : 'ADD_RECIPE',
    item: {id: ++id, ...recipe}
})

export const ADD_CART  = (recipe) => ({
    type : 'ADD_CART',
    item: recipe
})

export const REMOVE_CART_ITEM  = (item) => ({
    type : 'REMOVE_CART_ITEM',
    item : item
})
