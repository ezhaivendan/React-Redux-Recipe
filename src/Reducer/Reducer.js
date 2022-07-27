const getLocalStoreData = JSON.parse(localStorage.getItem('recipe')) || [];
const getCartInfo = JSON.parse(localStorage.getItem('cartInfo')) || [];
const initialState =  { recipe: getLocalStoreData, cartInfo: getCartInfo };
//const initialState =  { recipe: [] };
export const RecipieReducer = ( state = initialState, action) => {
    const { item, type } = action;
    switch(type) {
        case 'ADD_RECIPE':
            localStorage.setItem('recipe', JSON.stringify([...state.recipe, item]));
            return {
                ...state, 
                recipe: [
                    ...state.recipe,
                    item
                ]
            };
        
        case 'ADD_CART':
        localStorage.setItem('cartInfo', JSON.stringify([...state.cartInfo, item]));
            return {
                ...state, 
                cartInfo: [
                    ...state.cartInfo,
                    item
                ]
            };
        
        case 'REMOVE_CART_ITEM':
            localStorage.setItem('cartInfo', JSON.stringify(item));
            return {
                ...state,
                cartInfo: item
            };

        default:
            return state;
    }
}
