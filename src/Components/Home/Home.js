import React, { Fragment, useEffect } from "react";
import MouseIcon from "@material-ui/icons/Mouse";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../Layout/MetaData";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";

const Home = () => {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.allProducts);
    if (products[0]) {
        var homeProducts = [products[0], products[1], products[2], products[3]];
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios
                .get(
                    "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
                )
                .catch((err) => {
                    console.log("Error", err);
                });
            dispatch(setProducts(response.data));
        };

        fetchProducts();
    }, [dispatch]);

    return (
        <Fragment>
            <MetaData title="PizzA HOME" />
            <div className="banner">
                <p>Welcome to PizzA HousE</p>
                <h1>FIND AMAZING PizzA BELLOW</h1>
                <a href="#container">
                    <button>
                        Scroll <MouseIcon />
                    </button>
                </a>
            </div>
            <h2 className="homeHeading">Best Seller's & Customer Choise</h2>

            <div className="container" id="container">
                {homeProducts &&
                    homeProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </Fragment>
    );
};

export default Home;
