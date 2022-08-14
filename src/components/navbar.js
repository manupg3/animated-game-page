import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assets/css/styleheader.css';
import Button from 'react-bootstrap/Button';
import {Link, Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap'


export default function Header(){
  const [close, setClose] = useState(false);
  const closeNav = () => setClose(true);

  const handleClose = e =>{
  
    console.log("E TARGET", );
    
  }
const logo='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Quantum_Break_%E2%80%93_Game_logo.svg/2560px-Quantum_Break_%E2%80%93_Game_logo.svg.png'

  return(

        <Navbar collapseOnSelect expand="lg" bg="white" className="navbar" variant="dark">
  <Container>
  <Navbar.Brand ><img width="200px" src={logo} alt="ad" />   </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <LinkContainer to="/">
     <Nav.Link className="nav-link hover-underline-animation"  >Home</Nav.Link>
     </LinkContainer>
     <LinkContainer to="/history">
      <Nav.Link className="nav-link hover-underline-animation"  >History</Nav.Link>
      </LinkContainer>
      <NavDropdown className="nav-links hover-underline-animation" title="Platforms" id="collasible-nav-dropdown">
        <NavDropdown.Item >
        <LinkContainer to="/playstation">
           <Nav.Link  className="nav-link" >Playstation</Nav.Link>
           </LinkContainer>
     </NavDropdown.Item>
        <NavDropdown.Item > 
          <LinkContainer to="/xbox-one">
        <Nav.Link className="nav-link" >Xbox One</Nav.Link>
        </LinkContainer>
     </NavDropdown.Item>
        <NavDropdown.Item > 
        <LinkContainer to="/windows">
          <Nav.Link className="nav-link" to="/windows">PC</Nav.Link>
          </LinkContainer>
     </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item > 

     </NavDropdown.Item>
      </NavDropdown>

    </Nav>
    <Nav>
  
    <div className='container-button-header'>
                  <a className='' href="#"><span>¡Shop Now!</span></a>
                </div> 
        
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
   

    )
}