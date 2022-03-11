import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Home/ProductCard";
import MetaData from "../Layout/MetaData";
import "./Products.css";

const Products = () => {
    const { products } = useSelector((state) => state.allProducts);

    return (
        <Fragment>
            <MetaData title="PRODUCTS -- PizzA" />
            <h2 className="productsHeading">Products</h2>
            <div className="products">
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </Fragment>
    );
};

export default Products;
