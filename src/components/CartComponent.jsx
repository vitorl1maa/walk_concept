import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext';
import { Link } from 'react-router-dom';

import { Button, Toast } from "react-bootstrap";
import { Trash, CheckCircle } from "phosphor-react";

const CartComponent = () => {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total] = value.total;
  const [selectedSize, setSelectedSize] = useState([]);

  const [show, setShow] = useState(false);

  
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
  
  
  const formatCurrency = (value) => {
    return `R$ ${value.toFixed(2).toString().replace(".", ",")}`;
  };

  const handleSizeSelection = (id) => {
    setSelectedSize({ ...selectedSize, [id]: true });
    
  };


  return (
    <div>
      {cart.length === 0 ? (
        <div>
          <h1 className="text-center">Carrinho vazio</h1>
          <p className="mx-5 text-center">
            Navegue pela loja e encontre seu sneaker favorito.
          </p>
        </div>
      ) : (
        <>
          {cart.map((product) => (
            <div
              className="d-flex justify-content-between m-2 p-4 cart-items "
              style={{ backgroundColor: "#EAEAEA" }}
              key={product.id}
            >
              <div>
                <img src={product.image} alt="" className="w-100" />
              </div>
              <div className="w-100 px-4 cart-body-content ">
                <h3 className="mt-4">{product.title} </h3>
                <h1>{product.subtitle} </h1>
                <p
                  className="fs-4"
                  style={{ fontWeight: "600", padding: ".5rem 0" }}
                >
                  {formatCurrency(product.price)}
                </p>
                <p className='fs-5'>
                  Tamanho:
                  <ul className="sizes-sneakers">
                    {product.sizes &&
                      product.sizes.map((size) => (
                        <li
                          key={size.id}
                          className={selectedSize[size.id] ? "selected" : ""}
                          onClick={() => handleSizeSelection(size.id)}
                        >
                          {size.size}
                        </li>
                      ))}
                  </ul>
                </p>
              </div>
              <div>
                <button
                  className="border-0 bg-transparent mt-3"
                  onClick={() => handleRemove(product.id)}
                >
                  <Trash size={32} />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-1">
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={5000}
              autohide
            >
              <Toast.Header>
                <strong
                  className="me-auto fs-4 d-flex align-items-center "
                  style={{ color: "#000000" }}
                >
                  <CheckCircle size={32} color="#14ff30" />
                  Compra Efetuada
                </strong>
                <small>1 min ago</small>
              </Toast.Header>
              <Toast.Body className="fs-4">
                Obrigado, sua compra est?? sendo processada!
              </Toast.Body>
            </Toast>
          </div>
          <div className="mt-5">
            <h1 className="mx-2 mb-3">Total: {formatCurrency(total)} </h1>
            <Button
              className="border-0 fs-4 mx-2"
              style={{ backgroundColor: "#ff0000" }}
              onClick={() => setShow(true)}
            >
              Finalizar compra
            </Button>
            <Link to="/">
              <Button
                className="border-0 fs-4 mx-2 my-3"
                style={{ backgroundColor: "#ff0000" }}
              >
                Continuar comprando
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartComponent