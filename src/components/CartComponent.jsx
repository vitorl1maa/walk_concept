import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { Trash, ArrowFatUp, ArrowFatDown } from "phosphor-react";

import { DataContext } from '../context/DataContext';

const CartComponent = () => {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total] = value.total

  const formatCurrency = (value) => {
    return `R$ ${value.toFixed(2).toString().replace(".", ",")}`;
  };

  // remove itens do carrinho
  const handleRemove = (id) => {
    cart.forEach((item, index) => {
      if (item.id === id) {
        item.quantity = 1;
        cart.splice(index, 1);
      }
    });
    setCart([...cart]);
  };

  //soma itens no carrinho
  const sum = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      setCart([...cart]);
    });
  };

  // subtrai os itens do carrinho
  const subtract = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
      setCart([...cart]);
    });
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div>
          <h1 className="text-center">Carrinho vazio</h1>
          <p className='mx-5 text-center'>
            Navegue pela loja e encontre seu sneaker favorito.
          </p>
        </div>
      ) : (
        <>
          {cart.map((product) => (
            <div
              className="d-flex justify-content-between m-2 p-4 cart-items"
              style={{ backgroundColor: "#EAEAEA" }}
              key={product.id}
            >
              <div>
                <img src={product.image} alt="" className="w-100" />
              </div>
              <div className="w-100 px-4 cart-body-content ">
                <h2>{product.title} </h2>
                <h3>{product.subtitle} </h3>
                <p style={{ fontWeight: "600", padding: ".5rem 0" }}>
                  {formatCurrency(product.price)}
                </p>
                <p>Tamanho: 43</p>
                <div className="d-flex align-items-center">
                  <span className="d-flex align-items-center flex-column ">
                    <button className="border-0 bg-transparent">
                      <ArrowFatUp size={32} onClick={() => sum(product.id)} />
                    </button>
                    Quantidade: {product.quantity}
                    <button className="border-0 bg-transparent">
                      <ArrowFatDown
                        size={32}
                        onClick={() => subtract(product.id)}
                      />
                    </button>
                  </span>
                </div>
              </div>
              <div>
                <button
                  className="border-0 bg-transparent"
                  onClick={() => handleRemove(product.id)}
                >
                  <Trash size={32} />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-5">
            <h1>Total: {formatCurrency(total)} </h1>
            <Button>Finalizar compra</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartComponent