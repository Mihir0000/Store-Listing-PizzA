import React, { Fragment } from "react";
import "./Cart.css";
import MetaData from "../Layout/MetaData";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    addItemsToCart,
    removeItemsFromCart,
} from "../../redux/actions/cartActions";
import CartItemCard from "./CartItemCard";

const Cart = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);

    const increaseQuantity = (product, quantity) => {
        const newQty = quantity + 1;
        dispatch(addItemsToCart(product, newQty));
    };

    const decreaseQuantity = (product, quantity) => {
        const newQty = quantity - 1;
        if (1 >= quantity) {
            return;
        }
        dispatch(addItemsToCart(product, newQty));
    };

    const deleteCartItems = (id) => {
        dispatch(removeItemsFromCart(id));
    };

    const checkOutHandler = () => {
        alert("This function is not created yet");
    };

    return (
        <Fragment>
            <MetaData title="Cart Item" />
            {cartItems.length === 0 ? (
                <div className="emptyCart">
                    <RemoveShoppingCartIcon />

                    <Typography>No Product In Your Cart</Typography>
                    <Link to="/products">View Products</Link>
                </div>
            ) : (
                <Fragment>
                    <div className="cartPage">
                        <div className="cartHeader">
                            <p>Product</p>
                            <p>Quality</p>
                            <p>Subtotal</p>
                        </div>

                        {cartItems &&
                            cartItems.map((item) => (
                                <div
                                    className="cartContainer"
                                    key={item.product.id}
                                >
                                    <CartItemCard
                                        item={item.product}
                                        deleteCartItems={deleteCartItems}
                                    />
                                    <div className="cartInput">
                                        <button
                                            onClick={() =>
                                                decreaseQuantity(
                                                    item.product,
                                                    item.quantity
                                                )
                                            }
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            readOnly
                                        />
                                        <button
                                            onClick={() =>
                                                increaseQuantity(
                                                    item.product,
                                                    item.quantity
                                                )
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className="cartSubtotal">{`₹${
                                        item.product.price * item.quantity
                                    }`}</p>
                                </div>
                            ))}

                        <div className="cartGrossProfit">
                            <div></div>
                            <div className="cartGrossProfitBox">
                                <p>Gross Total</p>
                                <p>{`₹${cartItems.reduce(
                                    (acc, item) =>
                                        acc +
                                        item.quantity * item.product.price,
                                    0
                                )}`}</p>
                            </div>
                            <div></div>
                            <div className="checkOutBtn">
                                <button onClick={checkOutHandler}>
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Cart;
