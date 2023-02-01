import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Bag, UserCircle} from 'phosphor-react'
function NavbarComponent() {
  return (
    <div>
      <Navbar style={{background: '#000000'}} expand="lg" className='py-4' id='navbar'>
      <Container container>
        <Navbar.Brand href="#" style={{color: '#ffff'}}>Walk Concept</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{background: '#ffff'}} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100vh' }}
            navbarScroll
          >
            <Nav.Link href="/" style={{color: '#ffff'}}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{color: '#ffff'}}>Ofertas</Nav.Link>
            <Nav.Link href="#" style={{color: '#ffff'}}>Lançamentos</Nav.Link>
            <Nav.Link href="#" style={{color: '#ffff'}}>Em estoque</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button 
              style={{
               backgroundColor: '#DDDDDD', 
               color: '#000000',
               border: 'none',
              }} 
            >
              Search
            </Button>
          </Form>
          <div className='d-flex nav-icons'>
            <Nav.Link className='px-3 nav-link-bag' href="#/link"><Bag size={40}
            color='#ffff'
            /><span>0</span></Nav.Link>
            <Nav.Link href="#/link"><UserCircle size={40}
            color='#ffff'
            /></Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent