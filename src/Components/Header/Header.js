import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import HomeIcon from "@material-ui/icons/HomeTwoTone";
import StoreIcon from "@material-ui/icons/StoreTwoTone";
import CartIcon from "@material-ui/icons/ShoppingCartTwoTone";

const Header = () => {
    return (
        <Fragment>
            <div className="header">
                <div className="logo">
                    <h2>PizzA</h2>
                </div>
                <div className="container-header">
                    <Link to="/">
                        <HomeIcon />
                    </Link>
                    <Link to="/products">
                        <StoreIcon />
                    </Link>
                    <Link to="/cart">
                        <CartIcon />
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;
