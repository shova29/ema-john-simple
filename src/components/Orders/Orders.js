import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();

  const handleRemoveProduct = (product) => {
    console.log(product);
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  const handleRemoveAllProduct = () => {
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="review-item-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          {/*  <Link to="/inventory">
            <button>Proceed Checkout</button>
          </Link> */}
          <button onClick={() => navigate("/inventory")}>
            Proceed Checkout
          </button>
          <button onClick={() => handleRemoveAllProduct()}>Clear Cart</button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
