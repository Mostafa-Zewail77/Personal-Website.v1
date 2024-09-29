import React, { useState } from 'react'
import { Col, Collapse, Container, Row } from 'react-bootstrap';
import { badges, certifications } from '../../constants/constants';
import './Certifications.css'
import Heading from '../heading/Heading';
import { FiEye } from 'react-icons/fi';
import { FaAngleDown } from "react-icons/fa";
import { BsArrowLeftShort } from 'react-icons/bs';
import {MdVerified } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
function Certifications() {

    const [activeIndex, setActiveIndex] = useState(1);
    const [openBadges, setOpenBadges] = useState([]);
    const toggleAccordion = (index) => {
        setActiveIndex( activeIndex === index ? (index === 0 ? 1 : 0)  : index);
    }
   
    const toggleShow = (index) => {

        // If the index is already in the openBadges array, remove it (hide the description)
        // Otherwise, add it to the array (show the description)
        setOpenBadges((prev) =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    }

   
    return (
        <>
         <Helmet>
            <title>Certifications | Mostafa Hassan</title>
         </Helmet>
        
        <Container className='section__padding'>
            <Link to="/" className='back-link d-inline-block mb-5' aria-label="back">
                <BsArrowLeftShort className='arrow' /> <span>Mostafa Hassan</span>
            </Link>
            <div className="badges px-1 m-1 px-md-3 m-md-3">

                <div className="badges-header d-flex justify-content-between "
                    onClick={() => toggleAccordion(1)}>
                    <Heading sectionHeader= 'Badges' />
                    <FaAngleDown className={`accordion-icon ${activeIndex === 1 ? 'rotate' : ''}`} />
                </div>
                <Collapse in={activeIndex === 1}>
                    <div>
                    {badges.map((badge,index) =>(
                        <Row key={badge.id} className="p-lg-3 align-items-start " >
                            <Col  sm={4} lg={2} className='py-3 d-none d-sm-flex justify-content-center' >
                                <img src={badge.badge} alt={badge.title} className='w-75' />
                            </Col>
                            <Col  sm={8} lg={10} className='badge-info py-3' >
                                <h4>{badge.title}</h4>
                                
                                <div 
                                    className='d-flex align-items-center justify-content-start mb-3'
                                    style={{fontSize:"var(--fs-xxs)",
                                    fontFamily:"var(--font-mono)",
                                    }}>

                                    <MdVerified className='me-2' style={{color:"orange",fontSize:"var(--fs-sm)"}} /> 
                                    Verfide by Credly 
                                </div>
                            
                                <ul className='topics list-unstyled d-flex flex-wrap'>
                                    {badge.skills.map((skill, index) => (
                                        <li key={`${badge.id}-${index}`} >
                                            {skill}
                                        </li>
                                    ))}
                                
                                </ul>
                                <p>Provider: {badge.issuer}</p>
                                <p>Issued: {badge.date}</p>
                                <div>
                                    <div className='d-flex align-items-start'>
                                        <p className='me-3 show-description' onClick={()=>toggleShow(index)} >
                                            {openBadges.includes(index) ? 'Hide Description' : 'Show Description'}
                                        </p>
                                        <span style={{color:"var(--color-heading)"}}className='me-3'>•</span>
                                        <p>
                                            <Link className="badg-link" to={badge.credentialURL} target='_blank'>View Certification Link</Link> 
                                        </p>
                                    </div>
                                
                                    <Collapse in={openBadges.includes(index)}>
                                        <p style={{ color: "var(--color-text)" }}>
                                            {badge.description} 
                                            <Link className="badg-link" to={badge.credentialURL} target='_blank'> Learn more</Link>
                                        </p>  
                                    </Collapse>
                                </div>
                            </Col>
                            <div className='divider'/>
                        </Row>
                        ))
                        
                    }
                    </div>       
                </Collapse>
            </div>
 
            <div className="certifications px-1 m-1 px-md-3 m-md-3">
                <div className="certifications-header d-flex justify-content-between "
                    onClick={() => toggleAccordion(0)}>
                    <Heading sectionHeader= 'Certifications'/>
                    <FaAngleDown className={`accordion-icon ${activeIndex === 0 ? 'rotate' : ''}`} />
                </div>
                <Collapse in={activeIndex === 0}>
                        <Row className="certifications-grid g-3 justify-content-center" >
                        {certifications.map((cert) => (
                            <Col key={cert.id}
                                  
                                    xs={12} md={6} lg={3} 
                                    className='d-flex justify-content-center'
                                    as="a" 
                                    href={cert.credentialURL} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    >
                                    <div className="certificate-card m-0 p-0 position-relative">
                                        <img src={cert.image} alt={cert.title}  loading='lazy'/>
                                        <div className="overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                                            <div className='eye d-flex align-items-center justify-content-center'>
                                                <FiEye/>
                                            </div>
                                            <div className="certificate-title d-flex align-items-center justify-content-center text-center position-absolute">
                                                <p className='m-0' >{cert.title}</p>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </Col>
                        ))}
                        </Row>
                </Collapse>
               
            </div>

      
        
        </Container>
        </>    
      );
}

export default Certifications