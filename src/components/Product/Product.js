import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

//another way
/* const Product = ({handleAddToCart , product}) => {
   const { name, img, ratings, seller, price } = product;
} */

//this is the way
const Product = (props) => {
  //   console.log(props.product);
  //   const { handleAddToCart , product} = props;
  // const { name, img, ratings, seller, price } = product;
  const { name, img, ratings, seller, price } = props.product;
  return (
    <div className="product">
      <img src={img} alt=""></img>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
      </div>
      {/*  <button
        onClick={() => handleAddToCart(product)}
        className="button-cart"
      ></button> */}
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className="button-cart"
      >
        <p className="button-text">Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
