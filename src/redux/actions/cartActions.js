import { CartActionType } from "../constants/action-types";
//Add to cart
export const addItemsToCart = (product, quantity) => {
    return {
        type: CartActionType.ADD_TO_CART,
        payload: { product, quantity },
    };
};

// Remove from cart
export const removeItemsFromCart = (id) => {
    return {
        type: CartActionType.REMOVE_CART_ITEM,
        payload: id,
    };
};
