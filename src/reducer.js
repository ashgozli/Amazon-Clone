import { iconButtonClasses } from "@mui/material";

//Create an empty data layer
export const initialState = {
    basket: [],
};

//Selector Function: allows the basket to tally and add the item value prices  
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id == action.id
            );
            let newBasket = [...state.basket];

            if (index >= 1) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(
                    `Cannot remove product (id: ${action.id}) 
                    as it is not in the cart!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }

        default:
            return state;
    }
};

export default reducer;