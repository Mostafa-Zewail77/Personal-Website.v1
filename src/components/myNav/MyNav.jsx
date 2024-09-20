import React from 'react'
import'./MyNav.css'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

function MyNav() {
  
    return (
        <Navbar bg="transparent" className='d-none d-lg-block'  >
         
          <Nav className="mt-4 flex-column">
            <Link
              activeClass="active"
              className="nav-link"
              to="about"
              spy={true}
              smooth={true}
              duration={50}
            >
              About
            </Link>
            
            <Link
              activeClass="active"
              className="nav-link"
              to="projects"
              spy={true}
              smooth={true}
              duration={50}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              className="nav-link"
              to="contact"
              spy={true}
              smooth={true}
              duration={50}
            >
              Contact
            </Link> 
          </Nav>
         
        </Navbar>
      );
    };

export default MyNav