import React, { createContext, useState, useEffect, useMemo } from 'react';

// Create a context
export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    let [loader,setLoader ] = useState(false);
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
        finally{
          setLoader(false)
        }
      };
      setLoader(true)
      fetchProducts();
    }, []);
  
    // Function to add a new product
    const addProduct = (newProduct) => {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    };
  
    // Function to remove a product by ID
    const removeProduct = (productId) => {
      setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
    };

    const editProduct = (productId, updatedProduct) => {
      setProducts((prevProducts) => 
        prevProducts.map(product => 
          product.id === productId ? { ...product, ...updatedProduct } : product
        )
      );
    };

    const obj = useMemo(() => ({ products,loader, addProduct, removeProduct ,editProduct }), [products,loader]);
    return (
      <GlobalStateContext.Provider value={obj}>
        {children}
      </GlobalStateContext.Provider>
    );
  };
  