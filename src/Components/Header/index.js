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
                <div class="dropdown ">
                  <button class="btn px-0 text-muted border-0 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    My Account
                  </button>
                  {!isAuth
                    ? <ul class="dropdown-menu border-0 bg-light">
                      <Link className=' text-decoration-none text-muted' to='Auth/login'><li><button class="dropdown-item border-0 px-0 text-muted" >Login</button></li></Link>
                      <Link className=' text-decoration-none text-muted' to='Auth/register'><li><button class="dropdown-item border-0 px-0 text-muted " >Register</button></li></Link>
                    </ul>
                    : <ul class="dropdown-menu border-0 bg-light">
                      <Link className=' text-decoration-none text-muted' to='/dashboard'><li><button class="dropdown-item border-0 px-0  text-muted" >Dashboard</button></li></Link>
                      <Link className=' tex~~t-decoration-none text-muted' to='orders'><li><button class="dropdown-item border-0 px-0 text-muted " >Orders</button></li></Link>
                      <Link className=' text-decoration-none text-muted' ><li><button class="dropdown-item border-0 px-0 text-muted " onClick={handelLogOut} >Logout</button></li></Link>
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
