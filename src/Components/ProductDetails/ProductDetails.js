import React, { Fragment, useEffect, useState } from "react";
import "./ProductDetails.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../Layout/MetaData";
import { Rating } from "@material-ui/lab";
import { selectedProduct } from "../../redux/actions/productActions";
import { addItemsToCart } from "../../redux/actions/cartActions";

const ProductDetails = ({ match }) => {
    const dispatch = useDispatch();
    const productId = parseInt(match.params.id);

    const product = useSelector((state) => state.product);
    const [size, setSize] = useState("Medium");
    const [checked, setChecked] = React.useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const FetchProductDetails = async () => {
            const response = await axios
                .get(
                    "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
                )
                .catch((err) => {
                    console.log("Err", err);
                });
            let data;
            // console.log(response.data);
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].id === productId) {
                    data = response.data[i];
                }
            }
            dispatch(selectedProduct(data));
        };
        if (productId && productId !== "") {
            FetchProductDetails();
        }
    }, [productId, dispatch]);
    const options = {
        size: "medium",
        value: product.rating,
        readOnly: true,
        precision: 0.5,
    };
    // console.log(product.rating);

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        const qty = quantity + 1;
        setQuantity(qty);
    };

    const decreaseQuantity = () => {
        if (1 >= quantity) return;
        const qty = quantity - 1;
        setQuantity(qty);
    };
    const addToCartHandler = () => {
        setSuccess(true);
        dispatch(addItemsToCart(product, quantity));
    };

    return (
        <Fragment>
            <MetaData title={`${product.name} -- PizzA`} />
            <div className="ProductDetails">
                <div className="imageBlock">
                    <img
                        className="image"
                        key={product.id}
                        src={product.img_url}
                        alt={`${productId} Slide`}
                    />
                </div>

                <div className="detailsBlock">
                    <div className="detailsBlock-1">
                        <h2>{product.name}</h2>
                        <p>Product # {product.id}</p>
                    </div>
                    <div className="detailsBlock-2">
                        <Rating {...options} />
                    </div>
                    <div className="detailsBlock-3">
                        <h1>{`₹${product.price}`}</h1>
                        <div className="detailsBlock-3-1">
                            <div className="detailsBlock-3-1-1">
                                <button onClick={decreaseQuantity}>-</button>
                                <input
                                    readOnly
                                    type="number"
                                    value={quantity}
                                />
                                <button onClick={increaseQuantity}>+</button>
                            </div>
                            <button onClick={addToCartHandler}>
                                Add to Cart
                            </button>
                        </div>
                        {success && (
                            <span className="success">
                                Item Added Successfully
                            </span>
                        )}

                        <div className="detailsBlock-3-2">
                            <h3>Size: </h3>
                            <input
                                type="radio"
                                name="Regular"
                                value="Regular"
                                onChange={(e) => setSize("Regular")}
                                checked={size === "Regular"}
                            />
                            <span>Regular</span>
                            <input
                                type="radio"
                                name="Medium"
                                value="Medium"
                                onChange={(e) => setSize("Medium")}
                                checked={size === "Medium"}
                            />
                            <span>Medium</span>
                            <input
                                type="radio"
                                name="Large"
                                value="Large"
                                onChange={(e) => setSize("Large")}
                                checked={size === "Large"}
                            />
                            <span>Large</span>
                        </div>

                        <div className="detailsBlock-3-3">
                            <h3>Choose Topping(s) :</h3>
                            <input
                                type="checkbox"
                                defaultChecked={true}
                                onChange={() => setChecked(!checked)}
                            />
                            <span>Red Pepper</span>
                            <br />
                            <input
                                type="checkbox"
                                defaultChecked={false}
                                onChange={() => setChecked(!checked)}
                            />
                            <span>Onion</span>
                            <br />
                            <input
                                type="checkbox"
                                defaultChecked={false}
                                onChange={() => setChecked(!checked)}
                            />
                            <span>Grilled Mushroom</span>
                            <br />
                            <input
                                type="checkbox"
                                defaultChecked={false}
                                onChange={() => setChecked(!checked)}
                            />
                            <span>Extra Cheese</span>
                            <br />
                            <input
                                type="checkbox"
                                defaultChecked={false}
                                onChange={() => setChecked(!checked)}
                            />
                            <span>Black Olive</span>
                        </div>

                        <p>
                            Type:
                            <b className="type">
                                {product.isVeg === true
                                    ? "Vegetarian"
                                    : "Non Vegetarian"}
                            </b>
                        </p>
                    </div>

                    <div className="detailsBlock-4">
                        Description : <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductDetails;
