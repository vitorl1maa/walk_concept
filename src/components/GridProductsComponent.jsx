import { useContext } from 'react';

import { DataContext } from '../context/DataContext'
import ProductItemComponent from './ProductItemComponent';

import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const GridCardsComponents = () => {

  const value = useContext(DataContext);
  const [products] = value.products

  console.log(products)

  return (
    <div id='content-produtcs' >
      {
        products.map(products => (
              <ProductItemComponent 
                key={products.id}
                id={products.id}
                title={products.title}
                subtitle={products.subtitle}
                price={products.price}
                image={products.image}
                promotion={products.promotion}
                sizes={products.sizes}
                
              />
              
        ))
      }
      
    </div>
  )
}

export default GridCardsComponents


{/* <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/025350P1.jpg" />
          <Card.Body>
            <Card.Title>Air Jordan 1 Retro High OG</Card.Title>
            <Card.Text>
              Chicago
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/025348ID.jpg" />
          <Card.Body>
            <Card.Title>Air Jordan 5 Retro</Card.Title>
            <Card.Text>
              Aqua
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/025285CT.jpg" />
          <Card.Body>
            <Card.Title>Air Force 1 x UNDEFEATED</Card.Title>
            <Card.Text>
              Multicolor
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/024813P1.jpg" />
          <Card.Body>
            <Card.Title>Air Jordan 11</Card.Title>
            <Card.Text>
              Cherry
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/025358ID.jpg" />
          <Card.Body>
            <Card.Title>Lunar Force Duckboot</Card.Title>
            <Card.Text>
              Black Gum
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/025279CT.jpg" />
          <Card.Body>
            <Card.Title>Zoom Freak 4</Card.Title>
            <Card.Text>
              Barrier Reef
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/025290ID.jpg" />
          <Card.Body>
            <Card.Title>Air Force 1 x Slam Jam</Card.Title>
            <Card.Text>
              Black and Off Noir
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/0253497T.jpg" />
          <Card.Body>
            <Card.Title>Dunk Low</Card.Title>
            <Card.Text>
              Wolf Grey and Pure Platinum
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/0245727T.jpg" />
          <Card.Body>
            <Card.Title>Women's Air Jordan 1</Card.Title>
            <Card.Text>
              Twist 2.0
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/0253593X.jpg" />
          <Card.Body>
            <Card.Title>Air Max Scorpion</Card.Title>
            <Card.Text>
              Wheat
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/025282CT.jpg" />
          <Card.Body>
            <Card.Title>Nike SB Dunk Low</Card.Title>
            <Card.Text>
              Sandy
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/024756BP.jpg" />
          <Card.Body>
            <Card.Title>Terra Forma x Off-White™️</Card.Title>
            <Card.Text>
              Wheat and Green Strike
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/02457515.jpg" />
          <Card.Body>
            <Card.Title>Air Force 1 x AMBUSH</Card.Title>
            <Card.Text>
              Game Royal and Vivid Sulfur
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/02449651.jpg" />
          <Card.Body>
            <Card.Title>Air Jordan 4</Card.Title>
            <Card.Text>
              Midnight Navy
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/0244767T.jpg" />
          <Card.Body>
            <Card.Title>Air Max 1</Card.Title>
            <Card.Text>
              Duck Anthracite
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/0245077T.jpg" />
          <Card.Body>
            <Card.Title>Zoom Cortez x SACAI</Card.Title>
            <Card.Text>
              Iron Grey
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/0244813X.jpg" />
          <Card.Body>
            <Card.Title>Air More Uptempo</Card.Title>
            <Card.Text>
              Limestone and Valerian Blue
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/02447815.jpg" />
          <Card.Body>
            <Card.Title>PG 6</Card.Title>
            <Card.Text>
              Hot Wheels
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-3'>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://imgnike-a.akamaihd.net/768x768/023708ID.jpg" />
          <Card.Body>
            <Card.Title>Hot Step Air Terra Humara ’99 OG</Card.Title>
            <Card.Text>
              Black and University Gold
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col> */}