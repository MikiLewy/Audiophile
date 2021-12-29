import React, { useState, useEffect } from 'react';
import { useProducts } from 'hooks/useProducts';
import { useLocation } from 'react-router';

export const ProductsContext = React.createContext({
  currentProduct: [],
  counter: 1,
  handleCounterChange: () => {},
  cartsProducts: [],
  setCartsProducts: () => {},
  isAdded: false,
  setIsAdded: () => {},
  setCounter: () => {},
  productsCount: [],
  setProductsCount: () => {},
  productsPrice: [],
  setProductsPrice: () => {},
  productsQuantity: [],
  setProductsQuantity: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
});

const ProductsProvider = ({ children }) => {
  const [cartsProducts, setCartsProducts] = useState([]);
  const [productsPrice, setProductsPrice] = useState([]);
  const [productsQuantity, setProductsQuantity] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [counter, setCounter] = useState(1);
  const { pathname } = useLocation();
  const products = useProducts();

  useEffect(() => {
    const [...matchingProduct] = products.filter((product) => `/${product.category}/${product.id}` === pathname);
    setCurrentProduct(matchingProduct);
  }, [pathname, products]);
  useEffect(() => {
    const total = productsPrice.reduce((prevValue, currentValue, i) => {
      return prevValue ? prevValue + currentValue.price * productsQuantity[i].counter : currentValue.price * productsQuantity[i].counter;
    }, 0);
    setTotalPrice(total);
  }, [productsPrice, productsQuantity]);

  const handleCounterChange = (type) => {
    switch (type) {
      case '+':
        return setCounter(counter + 1);
      case '-':
        if (counter === 1 || counter < 1) return;
        return setCounter(counter - 1);
      default:
        return counter;
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        currentProduct,
        counter,
        cartsProducts,
        setCartsProducts,
        handleCounterChange,
        isAdded,
        setIsAdded,
        setCounter,
        productsQuantity,
        setProductsQuantity,
        productsPrice,
        setProductsPrice,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
