import { createContext, useEffect, useState } from "react";
import data from "../mocks/Data.js";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const product = data.items
    if (product) {
      setProducts(product)
      
    } else {
      setProducts([])
    }

  }, []);

  // Adiciona item no carrinho
  const addCart = (id) => {
    const check = cart.every(item => {
      return item.id !== id;
    })
    if(check) {
      const data = products.filter(product => {
        return product.id === id
      })
      setCart([...cart, ...data])
    } else {
      alert('Você já possui esse item no seu carrinho')
    }
  }

  // Guardar estado do carrinho no local store
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) {
      setCart(dataCart);
    }
  }, []);

  useEffect(() => {
  localStorage.setItem("dataCart", JSON.stringify(cart));
  console.log("Data stored: ", JSON.parse(localStorage.getItem("dataCart")));
}, [cart]);


  useEffect(()=> {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + (item.price * item.quantity)
      }, 0)
      setTotal(res);
    }
    
    
    getTotal()
  }, [cart])

  const value = {
    products: [products],
    addCart: addCart,
    cart: [cart, setCart],
    total: [total, setTotal]
  }

  return (
    <DataContext.Provider value={value}>
        {props.children}
    </DataContext.Provider>
  )
};