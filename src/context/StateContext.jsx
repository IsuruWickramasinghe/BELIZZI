import React, { createContext, useContext, useEffect, useState } from 'react';
import client from '../lib/client';


const Context = createContext();

export const StateContext = ({ children }) => {

  const [selectedQuantities, setSelectedQuantities] = useState(1);
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") return localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
  });
  const [totalPrice, setTotalPrice] = useState(() => {
    if (typeof window !== "undefined") return localStorage.getItem('totalPrice') !== null ? JSON.parse(localStorage.getItem('totalPrice')) : 0
  });
  const [totalQuantities, setTotalQuantities] = useState(() => {
    if (typeof window !== "undefined") return localStorage.getItem('totalQuantities') !== null ? JSON.parse(localStorage.getItem('totalQuantities')) : 0
  });


  const [selectedSize,setSelectedSize] = useState('')

  let foundProduct;


  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryProducts = '*[_type == "product"]';
        const docsProducts = await client.fetch(queryProducts);
        setProducts(docsProducts);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);





  // Add to cart or update cart
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          const isSelectedSizeExists = cartProduct.selectedSizeAndQuantities.find(
            (sizeObj) => sizeObj.size === selectedSize
          );
          if (isSelectedSizeExists) {
            isSelectedSizeExists.quantity += quantity;
          } else {
            cartProduct.selectedSizeAndQuantities.push({ size: selectedSize, quantity: quantity });
          }
          cartProduct.quantity += quantity;
        }
        return cartProduct;
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      product.selectedSizeAndQuantities = [{ size: selectedSize, quantity: quantity }];
      setCartItems([...cartItems, { ...product }]);
    }
    
    
  };

  // remove item from cart
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
    toast.success(`${product.name} Removed`)
  }

  // set local storage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('totalPrice', totalPrice);
    localStorage.setItem('totalQuantities', totalQuantities);
  }, [cartItems, totalPrice, totalQuantities]);

  // Quantities changers
  const changeQuantitiesMax = () => {
    setSelectedQuantities((prevSelectedQuantities) => prevSelectedQuantities + 1);
  };
  const changeQuantitiesMin = () => {
    setSelectedQuantities((prevSelectedQuantities) => {
      if (prevSelectedQuantities > 1) {
        return prevSelectedQuantities - 1;
      }
      return prevSelectedQuantities;
    });
  };

  // toggle cart item quantiity
  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)

    if(value === 'inc') {
      const updatedData = cartItems.map(item => (item._id === id ? { ...item, quantity: item.quantity + 1 } : item));
      setCartItems(updatedData);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        const updatedData = cartItems.map(item => (item._id === id ? { ...item, quantity: item.quantity - 1 } : item));
        setCartItems(updatedData);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }

  return (
    <Context.Provider
      value={{
        products,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        selectedQuantities,
        changeQuantitiesMax,
        changeQuantitiesMin,
        onAdd,
        onRemove,
        toggleCartItemQuanitity,
        selectedSize,
        setSelectedSize,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
