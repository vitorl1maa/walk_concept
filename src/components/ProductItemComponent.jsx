import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const ProductItemComponent = ({
  id,
  title,
  subtitle,
  price,
  image,
  promotion,



}) => {
  return (
    <div>
      <Row>
        <Col className='p-3'>
          <Card style={{ width: '100%' }} className='products'>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
             {subtitle}
            </Card.Text>
            <Link to='/detail'>
              <Button >Comprar</Button>
            </Link>
            <span>{promotion}</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductItemComponent