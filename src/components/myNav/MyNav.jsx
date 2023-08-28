import React from 'react'
import'./MyNav.css'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

function MyNav() {

    return (
        <Navbar bg="transparent" className='d-none d-lg-block' >
         
            <Nav className="mt-4 flex-column">
              <Nav.Link as={Link} to="about" smooth={true} duration={50} spy={true} offset={-560} activeClass="active">
                About
              </Nav.Link> 
              <Nav.Link as={Link} to="projects" smooth={true} duration={50} spy={true} offset={-560} activeClass="active">
                Projects
              </Nav.Link> 
              <Nav.Link as={Link} to="contact" smooth={true} duration={50} spy={true} offset={-560} activeClass="active">
                Contact
              </Nav.Link>     
            </Nav>
         
        </Navbar>
      );
    };

export default MyNav