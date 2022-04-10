import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

import useProducts from "./useProducts";

const useCart = (products) => {
  //   const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        //another way
        // addedProduct.quantity =storedCart[id];
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return [cart, setCart];
};

export default useCart;
