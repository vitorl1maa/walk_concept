import React, { useContext } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Tag } from 'phosphor-react';

import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

const ProductItemComponent = ({
  id,
  title,
  subtitle,
  price,
  image,
  promotion,
  sizes,

}) => {

  const value = useContext(DataContext);
  const addCart = value.addCart;
  

  return (
    <div>
      <Card style={{ width: "100%" }} className="products">
        <Link to={`/sneaker_detail/${id}`}>
          <Card.Img variant="top" src={image} />
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
    

          <Button
            className="px-4 border-0"
            style={{ backgroundColor: "#8758FF" }}
            onClick={() => addCart(id)}
          >
            Comprar
          </Button>
          <Link to={`/sneaker_detail/${id}`}>
            <Button
              className="px-4 border-0"
              style={{ backgroundColor: "#8758FF" }}
            >
              Ver
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductItemComponent