import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useProducts from "../hooks/useProducts";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);
  console.log(cart);

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
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    // console.log(selectedProduct);
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

///////
/*import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Questions from "../Questions/Questions";
import "./Store.css";
const Store = () => {
  const [cards, setCards] = useState([]);
  const [carts, setCarts] = useState([]);
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  console.log(cartList);
  const handleCartList = (id) => {
    const exist = cartList.find((cart) => cart == id);

    if (!exist) {
      setCartList([...cartList, id]);
    }
  };
  const chooseOne = () => {
    if (carts.length > 0) {
      let rand = parseInt(Math.round(Math.random() * carts.length));
      if (rand < 0) {
        rand = 0;
      }

      setCarts([carts[rand]]);
      setCartList([carts[rand]?.id]);
    }
  };
  const chooseAgain = () => {
    setCartList([]);
  };
  useEffect(() => {
    let tempCarts = [];
    for (const id of cartList) {
      const everyCart = cards.find((card) => card.id === id);
      tempCarts = [...tempCarts, everyCart];
    }
    setCarts(tempCarts);
  }, [cartList]);
  return (
    <div>
      <Header></Header>
      <main>
        <div className="card-container">
          {cards.length &&
            cards.map((card) => (
              <Card
                key={card?.id}
                card={card}
                handleCartList={handleCartList}
              ></Card>
            ))}
        </div>
        <div className="cart-container">
          <div className="cart-sticky">
            <h1>Selected Clothes</h1>
            {carts.length &&
              carts.map((cart) => <Cart key={cart?.id} cart={cart}></Cart>)}
            <div>
              <button onClick={chooseOne}>Choose 1 for me</button>
            </div>
            <div>
              <button onClick={chooseAgain}>Choose Again</button>
            </div>
          </div>
        </div>
      </main>
      <Questions></Questions>
    </div>
  );
};

export default Store;*/
