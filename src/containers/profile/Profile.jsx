import React from 'react'
import './Profile.css'

import { Col, Container, Row  } from 'react-bootstrap'
import{BsFacebook,BsGithub,BsLinkedin ,BsInstagram} from 'react-icons/bs'
import { MyNav } from '../../components'

function Profile({ avatar}) {
  return (
    <Container className='profile section__padding sticky-top d-flex flex-column justify-content-lg-between  '>
      <Row className='mt-5 mt-lg-0'>
        <Col className="pe-4 pe-lg-0 d-flex flex-column flex-md-row-reverse align-items-center justify-content-between flex-lg-column align-items-lg-start ">
          <div className="avatar me-md-5 ">
            <img src={avatar} alt="avatar"/>
          </div>
          <div className=" text-center text-md-start">
            <h2>Mostafa Hassan</h2>
            <p> I'm a front-end developer focused on creating visually appealing interfaces and delivering seamless user experiences.</p>
            
            <a href="https://drive.google.com/uc?export=download&id=1ho8EpcqJ9jySt8CxJ-PRgtWepBJAmzyp&confirm=no_antivirus&export?format=pdf"
              download="Mostafa_Hassan_Resume.pdf" >
              <button  className='custom-btn mt-1'>
                Resume
              </button>
            </a>
          </div>
         
          <MyNav />
        </Col>
      </Row>    
      <Row className="links mt-4 max-width d-none d-md-flex ">
        <Col xs={2}> <a href='https://www.linkedin.com/in/mostafahassan-dev/'target='_blank' rel='noopener noreferrer'> <BsLinkedin title='LinkedIn'/></a> </Col>
        <Col xs={2}> <a href='https://github.com/Mostafa-Zewail77' target='_blank'rel='noopener noreferrer' > <BsGithub title='GitHub'/></a> </Col>
        <Col xs={2}> <a href='https://www.instagram.com/mustafa_hassan77/'target='_blank' rel='noopener noreferrer'> <BsInstagram title='Instagram'/></a> </Col>      
        <Col xs={2}> <a href='https://www.facebook.com/profile.php?id=100006284646611'target='_blank' rel='noopener noreferrer'> <BsFacebook title='Facebook'/></a> </Col>      
      </Row>
  

     
    </Container>
  )
}

export default Profile