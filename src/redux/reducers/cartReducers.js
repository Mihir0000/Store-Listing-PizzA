import { CartActionType } from "../constants/action-types";
export const cartReducer = (state = { cartItems: [] }, { type, payload }) => {
    switch (type) {
        case CartActionType.ADD_TO_CART:
            const item = payload;

            const isItemExist = state.cartItems.find(
                (i) => i.product === item.product
            );
            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((i) =>
                        i.product === isItemExist.product ? item : i
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case CartActionType.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (i) => i.product.id !== payload
                ),
            };
        default:
            return state;
    }
};
