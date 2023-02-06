import { Link } from 'react-router-dom';
import CartComponent from './CartComponent';
import { DataContext } from '../context/DataContext';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

import {Bag, UserCircle, List} from 'phosphor-react'


function NavbarComponent({name, ...props}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const value = useContext(DataContext);
  const [cart] = value.cart;


  return (
    <div>
      <Navbar
        style={{ background: "#000000" }}
        expand="lg"
        className="py-4"
        id="navbar"
      >
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div href="/" style={{ color: "#ffff" }}>
              <span
                style={{ fontFamily: "Permanent Marker", fontSize: "1.5rem" }}
                
              >
                <span
                  style={{ color: "#ff0000", fontFamily: "Permanent Marker" }}
                  
                >
                  W
                </span>
                alk Concept
              </span>
            </div>
          </Link>
          <Nav.Link
            className="px-3 nav-link-bag cart-icon"
            style={{ display: "none" }}
          >
            <Bag size={40} color="#ffff" onClick={handleShow} />
            <span>{cart.length}</span>
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll">
            <List size={32} color="#ffff" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100vh" }}
              navbarScroll
            >
              <Link
                to="/"
                className="d-flex align-items-md-center px-md-5"
                style={{ textDecoration: "none" }}
              >
                <span
                  style={{ color: "#ffff", textDecoration: "none" }}
                  className="px-md-5 fs-5"
                >
                  Home
                </span>
              </Link>
              <Link
                to="/calendar"
                style={{ color: "#ffff", textDecoration: "none" }}
              >
                <span className="px-md-5 fs-5">Calendario</span>
              </Link>
            </Nav>
            <div className="d-flex nav-icons">
              <Nav.Link className="px-3 nav-link-bag cart-icon-mobile">
                <Bag size={40} color="#ffff" onClick={handleShow} />
                <span>{cart.length}</span>
              </Nav.Link>
              <div>
                <Offcanvas
                  id="offcanvas"
                  show={show}
                  onHide={handleClose}
                  {...props}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="border-bottom w-100 pb-2">
                      <h3>Seu Carrinho</h3>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <CartComponent />
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <Nav.Link href="#">
                <UserCircle size={40} color="#ffff" />
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}


export default NavbarComponent