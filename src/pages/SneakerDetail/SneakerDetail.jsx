import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { DataContext } from "../../context/DataContext";

import Button from "react-bootstrap/Button";

const SneakerDetail = () => {
  const [detail, setDetail] = useState([]);
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  const params = useParams();

  useEffect(() => {
    products.forEach(product => {
      if(product.id === parseInt(params.id)){
        setDetail(product)
      }
    })
  }, [params.id, products]);

  const formatCurrency = (value) => {
    return `R$ ${value?.toFixed(2).toString().replace(".", ",")}`;
  };

  return (
    <div id="sneaker-container">
      {
        <div className="details-body">
          <h1 className="pb-2">{detail.title}</h1>
          <h3 className="pb-2">{detail.subtitle}</h3>
          <div className="d-md-flex">
            <div className="row content-details-products">
              <img
                src={detail.image}
                alt=""
                className="p-0 card-image-details"
              />
              <img
                src={detail.image_bottom}
                alt=""
                className="p-0 card-image-details"
              />
              <img
                src={detail.image_left}
                alt=""
                className="p-0 card-image-details"
              />
              <img
                src={detail.image_top}
                alt=""
                className="p-0 card-image-details"
              />
            </div>
            <div className="body-details">
              <p className="fs-5 my-5">{detail.description}</p>
              <h3 className="my-5">Preço: {formatCurrency(detail.price)} </h3>
              <Button
                className="px-5 fs-3 border-0"
                style={{ backgroundColor: "#ff0000" }}
                onClick={() => addCart(detail.id)}
              >
                Comprar
              </Button>
              <p className="mt-3">Somente uma unidade por CPF</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default SneakerDetail