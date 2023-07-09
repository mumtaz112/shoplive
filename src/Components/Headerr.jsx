import React from 'react'
import Container from 'react-bootstrap/Container';
import row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Badge from 'react-bootstrap/Badge';
import {Link} from 'react-router-dom'
function Headerr() {
  return (

    <>
    <header>
      
      <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
             <div className='info'>
              <p>FREE SHIPPING ON ALL U.S ORDERS OVER $50</p>  
             </div>
            </div>
            <div className='col-md-6'>
        <div className='main d-flex float-end'>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       USD
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">CAD</Dropdown.Item>
        <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
        <Dropdown.Item href="#/action-3">EUR</Dropdown.Item>
        <Dropdown.Item href="#/action-3">GBP</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       USD
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">CAD</Dropdown.Item>
        <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
        <Dropdown.Item href="#/action-3">EUR</Dropdown.Item>
        <Dropdown.Item href="#/action-3">GBP</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown className='last-drp'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       USD
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">CAD</Dropdown.Item>
        <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
        <Dropdown.Item href="#/action-3">EUR</Dropdown.Item>
        <Dropdown.Item href="#/action-3">GBP</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
    
                </div>
        </div>
        </div>  
        <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#"><h3>Colo<span>Shop</span></h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className=" w-100 d-flex justify-content-end" navbarScroll>
            <Link className="text-decoration-none mx-2 text-dark" to="/" >Home</Link>
            <Link  className="text-decoration-none mx-2 text-dark" to="/AllProduct">Shop</Link>
            <Nav.Link href="#action2">Promotion</Nav.Link>
            <Nav.Link href="#action2">Pages</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>
            <Link  className="text-decoration-none mx-2 text-dark" to="/ContactUs">Contact Us</Link>
          </Nav>
          <div className="site-icons">
        <ul>
        <li><a href='#'><BsSearch/></a></li>
        <li><a href='#'><AiOutlineUser/></a></li>
        <li><a href='#'><AiOutlineShoppingCart className='last-icon'/><Badge bg="secondary">9</Badge></a></li>    
        </ul>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
             
     </header>
     
     </>
     
  )
}

export default Headerr