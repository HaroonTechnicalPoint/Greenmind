import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom';
const index = () => {
  return (
    <header>
      <Navbar expand="lg " className="bg-light sticky-top">
        <Container>
          <Navbar.Brand  className='fw-bold '><Link className='text-decoration-none text-black' to='/'>GREENMIND</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto ms-lg-5">
              <Nav.Link ><Link className='text-decoration-none text-muted' to='/'>Home</Link></Nav.Link>
              <Nav.Link ><Link className='text-decoration-none text-muted' to='/products'>Products</Link></Nav.Link>
              <Nav.Link ><Link to='<>' className='text-decoration-none text-muted'>Contacts</Link></Nav.Link>
            </Nav>
            <Nav className="ms-auto ms-lg-5">
              <Nav.Link >
                <div class="dropdown">
                  <button class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    My Account
                  </button>
                  <ul class="dropdown-menu">
                  <Link className=' text-decoration-none text-black' to='Auth/login'><li><button class="dropdown-item" >Login</button></li></Link>
                  <Link className=' text-decoration-none text-black' to='Auth/register'><li><button class="dropdown-item" >Register</button></li></Link>
                    
                  </ul>
                </div>
              </Nav.Link>
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
