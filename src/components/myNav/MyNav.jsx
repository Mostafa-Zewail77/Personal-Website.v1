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
              // href='#about'
              spy={true}
              smooth={true}
              duration={50}
              offset={-565}
            >
              About
            </Link>
            
            <Link
              activeClass="active"
              className="nav-link"
              to="projects"
              // href='#projects'
              spy={true}
              smooth={true}
              duration={50}
              offset={-563}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              className="nav-link"
              to="contact"
              // href='#contact'
              spy={true}
              smooth={true}
              duration={50}
              offset={-560}
            >
              Contact
            </Link> 
          </Nav>
         
        </Navbar>
      );
    };

export default MyNav