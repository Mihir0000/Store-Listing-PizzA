import React from "react";
import { Link } from "react-router-dom";
import "./CartItemCard.css";

const CartItemCard = ({ item, deleteCartItems }) => {
    return (
        <div className="CartItemCard">
            <img src={item.img_url} alt="img" />
            <div>
                <Link to={`/product/${item.id}`}>{item.name}</Link>
                <span>{`Price : ₹${item.price}`}</span>
                <p onClick={() => deleteCartItems(item.id)}>Remove</p>
            </div>
        </div>
    );
};

export default CartItemCard;
