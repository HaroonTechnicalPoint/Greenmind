import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth';
import { message } from 'antd';



const Header = () => {

  const { isAuth, setContextState } = useContext(AuthContext)

  const navigate = useNavigate()
  const handelLogOut = () => {
    setContextState({ isAuth: false, user: {} })
    message.success('Logout Successfully')
    navigate('/Auth/login')
  }

  return (
    <header>
      <Navbar expand="lg " className="bg-light sticky-top">
        <Container>
          <Navbar.Brand className='fw-bold '><Link className='text-decoration-none text-black' to='/'>GREENMIND</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto ms-lg-5">
              <Nav.Link ><Link className='text-decoration-none text-muted' to='/'>Home</Link></Nav.Link>
              <Nav.Link ><Link className='text-decoration-none text-muted' to='/products'>Products</Link></Nav.Link>
              <Nav.Link ><Link to='/contact' className='text-decoration-none text-muted'>Contacts</Link></Nav.Link>
            </Nav>
            <Nav className="ms-auto ms-lg-5">
              <Nav.Link >
                <div class="dropdown">
                  <button class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    My Account
                  </button>
                  {!isAuth
                    ? <ul class="dropdown-menu">
                      <Link className=' text-decoration-none text-black' to='Auth/login'><li><button class="dropdown-item" >Login</button></li></Link>
                      <Link className=' text-decoration-none text-black' to='Auth/register'><li><button class="dropdown-item" >Register</button></li></Link>
                    </ul>
                    : <ul class="dropdown-menu">
                      <Link className=' text-decoration-none text-black' to='/dashboard'><li><button class="dropdown-item" >Dashboard</button></li></Link>
                      <Link className=' text-decoration-none text-black' to='orders'><li><button class="dropdown-item" >Orders</button></li></Link>
                      <Link className=' text-decoration-none text-black' ><li><button class="dropdown-item" onClick={handelLogOut} >Logout</button></li></Link>
                    </ul>

                  }
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

export default Header
