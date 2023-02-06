import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const ProductItemComponent = ({
  id,
  title,
  subtitle,
  image,
}) => {

  return (
    <div>
      <Card style={{ width: "100%" }} className='card-product'>
        <Link to={`/sneaker_detail/${id}`}>
          <Card.Img variant="top" src={image} className='card-product-image' />
        </Link>
        <Card.Body>
          <Card.Title className='fs-4'>{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>

          <Link to={`sneaker_detail/${id}`}>
            <Button
              className="px-4 border-0 "
              id="btn-buy"
              style={{ backgroundColor: "#ff0000"}}
            >
              Comprar
            </Button>
          </Link>
          <Link to={`/sneaker_detail/${id}`}></Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductItemComponent