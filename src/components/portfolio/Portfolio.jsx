import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Portfolio.css'
import { projects } from '../../constants/constants'
import { FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Helmet } from 'react-helmet-async';


function Portfolio() {
  return (
    <>
    <Helmet>
      <title>Portfolio | Mostafa Hassan</title>
      <meta name="description" content="A diverse collection of the work I've done." />
    </Helmet>
    <Container  className='portfolio section__padding'>
        <Link to="/" className='back-link d-inline-block mb-3' aria-label="back">
            <BsArrowLeftShort className='arrow' /> <span>Mostafa Hassan</span>
        </Link>
        <div className="portfolio-header d-flex justify-content-center flex-column my-5 ">
            <div className="showcase-title">
                <p>Portfolio</p>                 
                <p style={{color:'var(--color-light)'}}>SHOWCASE</p>
            </div>
            <div className='portfolio-text text-center m-auto py-2'>
                A diverse collection of the work I've done.
                <p style={{fontSize:'var(--fs-xs)'}}>(more coming soon)  </p>
            </div>
        </div>
        <div className="divider">
            <hr/>
        </div>
        
        <Row className='portfolio-grid g-3 justify-content-center' >
        {projects.map((project) => (
                <Col key={project.id} 
                    xs={12} md={6} lg={3} 
                    className='d-flex justify-content-center'
                    as="a" 
                    href={project.visit} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    <div className="project-card m-0 p-0 position-relative">
                        <img src={project.image} alt={project.title}  loading='lazy'/>
                        <div className="overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                            <div className='eye d-flex align-items-center justify-content-center'>
                                <FiEye/>
                            </div>
                            <div className="project-title d-flex align-items-center justify-content-center text-center position-absolute">
                                <p className='m-0' >{project.title}</p>
                            </div>
                        </div>
                    
                    </div>
                </Col>
        ))}
        </Row>
    </Container >
    </>
  )
}

export default Portfolio