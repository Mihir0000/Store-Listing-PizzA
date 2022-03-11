import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducers";
import { cartReducer } from "./cartReducers";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: cartReducer,
});

export default reducers;
