import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const Product_Context = createContext();

const Product_Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://mocki.io/v1/535c90e9-d045-4d9a-9235-9f0937f5273a")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // adding items to cart

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productInCart = cart.find(p => p.id === product.id);
    if (productInCart) {
      const updatedCart = cart.map(p =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCart(updatedCart);
    } else {
      const newProduct = { ...product, quantity: 1 };
      setCart([...cart, newProduct]);
    }
  };

  // incrementing quantity

  const incrementQuantity = (id) => {
    const updatedItem = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setCart(updatedItem);
  };

  // removing quantity

  const decrementQuantity = (id) => {
    const updatedItem = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1 <= 0 ? 1 : item.quantity - 1,
        };
      } else {
        return item;
      }
    });
    setCart(updatedItem);
  };

  // removing items 
  const removeItem = (id) => {
    const remove = cart.filter((p) => p.id !== id)
    setCart(remove)
  }

  // search names 

  const [search,setSearch] = useState('')

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  // making review page

  const [page,setPage] = useState({})

  const reviewPage = (product) => {
    setPage(product)
  } 

  // console.log(page)

  // console.log(cart);
  return (
    <Product_Context.Provider
      value={{
        products,
        addToCart,
        cart,
        incrementQuantity,
        decrementQuantity,
        removeItem,
        search,
        handleInput,
        page,
        reviewPage
      }}
    >
      {children}
    </Product_Context.Provider>
  );
};

export default Product_Provider;
