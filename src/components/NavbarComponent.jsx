
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import {Bag, UserCircle} from 'phosphor-react'



function NavbarComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <Navbar
        style={{ background: "#000000" }}
        expand="lg"
        className="py-4"
        id="navbar"
      >
        <Container container>
          <Navbar.Brand href="#" style={{ color: "#ffff" }}>
            Walk Concept
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ background: "#ffff" }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100vh" }}
              navbarScroll
            >
              <Nav.Link href="/" style={{ color: "#ffff" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#action2" style={{ color: "#ffff" }}>
                Ofertas
              </Nav.Link>
              <Nav.Link href="#" style={{ color: "#ffff" }}>
                Lançamentos
              </Nav.Link>
              <Nav.Link href="#" style={{ color: "#ffff" }}>
                Em estoque
              </Nav.Link>
            </Nav>
            <div className="d-flex nav-icons">
              <Nav.Link className="px-3 nav-link-bag" onClick={handleShow}>
                <Bag size={40} color="#ffff" />
                <span>0</span>
              </Nav.Link>
              <div>
                <Offcanvas className='w-75' show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <Nav.Link href="#/link">
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