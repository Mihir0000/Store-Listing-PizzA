import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
    const { id, name, rating, price, img_url } = product;
    const options = {
        size: "small",
        value: rating,
        readOnly: true,
        precision: 0.5,
    };

    return (
        <Fragment>
            <Link className="productCard" to={`/product/${id}`} key={id}>
                <img src={img_url} alt={name} />
                <p>{name}</p>
                <div>
                    <Rating {...options} />
                </div>
                <span>{`₹${price}`}</span>
            </Link>
        </Fragment>
    );
};

export default ProductCard;
