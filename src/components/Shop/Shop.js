import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getStoredCart();
    console.log(storedCart);
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
      setCart(savedCart);
      // addedProduct.quantity = storedCart[id];
      // setCart([...cart, addedProduct]);
    }
    /* if (storedCart) {
      setCart(JSON.parse(storedCart));
    } */
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const existsProduct = cart.find(
      (product) => product.id === selectedProduct.id
    );
    if (!existsProduct) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      existsProduct.quantity = existsProduct.quantity + 1;
      newCart = [...rest, existsProduct];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
    // setCart([...cart, product]); //another way
  };

  return (
    <div className="shop-container">
      {/* <h3>This is for products: {products.length}</h3> */}
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
