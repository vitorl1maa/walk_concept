import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { Tag } from 'phosphor-react';

const ProductItemComponent = ({
  id,
  title,
  subtitle,
  price,
  image,
  promotion,
  sizes,

}) => {
  return (
    <div >
          <Card style={{ width: '100%'}} className='products'>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
             {subtitle}
            </Card.Text>
              {/* {
                sizes?.map(({size, id}) => (
                    <ul key={id}>
                      <li key={size}>{size}</li>
                    </ul>
                )) 
              } */}
            <Link to='/detail'>
              <Button className='px-4 border-0' style={{backgroundColor: '#8758FF'}}>Comprar</Button>
            </Link>
            </Card.Body>
          </Card>
    </div>
  )
}

export default ProductItemComponent