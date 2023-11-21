import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  //useselector to access the state value
  const wishlist = useSelector((state)=>state.wishlistReducer)
  console.log(wishlist);
  const cart = useSelector((state)=>state.cartReducer)
  console.log(cart);

  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
    <Container>
      <Navbar.Brand href="#home"><i class="fa-solid fa-cart-shopping" style={{color:'#ffffff'}}> </i><Link to={'/'} style={{textDecoration:'none',color:'white'}}> E-Kart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border border-secondary ms-3 mt-2'><i class="fa-solid fa-heart" style={{color:'red'}}></i><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}> Wishlist  <Badge bg="secondary" className='rounded ms-2'>{wishlist.length}</Badge></Link></Nav.Link>
          <Nav.Link className='btn border border-secondary rounded ms-3 mt-2'><i class="fa-solid fa-cart-shopping fa-flip-horizontal" style={{color: '#ffdb57'}}></i><Link to={'/cart'} style={{textDecoration:'none',color:'white'}}> Cart  <Badge bg="secondary" className='rounded ms-3'>{cart.length}</Badge></Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>  )
}

export default Header