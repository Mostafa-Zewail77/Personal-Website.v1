import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'


function Footer() {
  return (
    <Container className=' text-center d-md-none p-4 '>
        <Row className="links  m-auto align-items-center justify-content-center ">
          <Col xs={2}> <a href='https://www.linkedin.com/in/mostafahassan-dev/'target='_blank' rel='noopener noreferrer' > <BsLinkedin title='LinkedIn'/></a> </Col>
          <Col xs={2}> <a href='https://github.com/Mostafa-Zewail77' target='_blank' rel='noopener noreferrer'> <BsGithub title='GitHub'/></a> </Col>
          <Col xs={2}> <a href='https://www.instagram.com/mustafa_hassan77/'target='_blank' rel='noopener noreferrer'> <BsInstagram title='Instagram'/></a> </Col>      
          <Col xs={2}> <a href='https://www.facebook.com/profile.php?id=100006284646611'target='_blank' rel='noopener noreferrer'> <BsFacebook title='Facebook'/></a> </Col>      
      </Row>
    </Container>
  )
}

export default Footer