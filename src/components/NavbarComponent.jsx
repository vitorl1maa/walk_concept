import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Bag} from 'phosphor-react'

const NavbarComponent = () => {
  return (
    <div className='container-fluid'>
      <Navbar className='p-3 bg-white' expand="lg" id='navbar' >
        <Navbar.Brand href="#" bg-dark>Walk Concept</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className=''>Ofertas</Nav.Link>
            <Nav.Link href="#action2">Lançamentos</Nav.Link>
            <Nav.Link href="#action2">Em Estoque</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary" className='me-3'>Buscar</Button>
            <Nav.Link href="#action2"><Bag size={32} /></Nav.Link>
          </Form>
        </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default NavbarComponent