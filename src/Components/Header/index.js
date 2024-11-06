import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css'
const index = () => {
  return (
    <header>
        <Navbar expand="lg " className="bg-light sticky-top">
      <Container>
        <Navbar.Brand href="#" className='fw-bold '>GREENMIND</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto ms-lg-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
          <Nav className="ms-auto ms-lg-5">
            <Nav.Link href="#user"><i className="bi bi-person fs-4"></i></Nav.Link>
            <Nav.Link href="#cart"><i className="bi bi-cart2 fs-4"></i></Nav.Link>
            <Nav.Link href="#menu"><i className="bi bi-list fs-4"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default index
