import { createContext, useEffect, useState } from "react";
import data from "../Data/Data.js";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const product = data.items
    if (product) {
      setProducts(product)
      
    } else {
      setProducts([])
    }

  }, []);

  const value = {
    products: [products]
  }

  return (
    <DataContext.Provider value={value}>
        {props.children}
    </DataContext.Provider>
  )
};