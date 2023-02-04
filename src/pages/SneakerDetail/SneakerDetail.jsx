import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { DataContext } from "../../context/DataContext";

const SneakerDetail = () => {
  const [detail, setDetail] = useState([]);
  const value = useContext(DataContext);
  const [products] = value.products;
  const params = useParams();

  useEffect(() => {
    products.forEach(product => {
      if(product.id === parseInt(params.id)){
        setDetail(product)
      }
    })
  }, [params.id, products]);

  const formatCurrency = (value) => {
    return `R$ ${value.toFixed(2).toString().replace(".", ",")}`;
  };

  return (
    <div className="p-3">
      {
        <div className="mt-5 details-body">
          <h1 className="pb-2">{detail.title}</h1>
          <h3 className="pb-2">{detail.subtitle}</h3>
          <div className="d-md-flex">
            <div id="content-details-products" className="row">
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
              <p className="fs-5 mb-5">{detail.description}</p>
              <h2>Preço:{formatCurrency(detail.price)} </h2>
              <h3>Tamanho:</h3>
              <ul className="d-md-flex sizes-sneakers">
                {detail.sizes &&
                  detail.sizes.map((size) => (
                    <li key={size.id}>{size.size}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default SneakerDetail