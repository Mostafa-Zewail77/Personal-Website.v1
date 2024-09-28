import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'


function Footer() {
  return (
    <Container className='footer text-center position-absolute pb-2 bottom-0 start-50 translate-middle-x'>
      <Row className="links d-md-none m-auto align-items-center justify-content-center ">
        <Col xs={2}> <a href='https://www.linkedin.com/in/mostafahassan-dev/'target='_blank' rel='noopener noreferrer' > <BsLinkedin title='LinkedIn'/></a> </Col>
        <Col xs={2}> <a href='https://github.com/mostafahassan-dev' target='_blank' rel='noopener noreferrer'> <BsGithub title='GitHub'/></a> </Col>
        <Col xs={2}> <a href='https://www.instagram.com/mustafa_hassan77/'target='_blank' rel='noopener noreferrer'> <BsInstagram title='Instagram'/></a> </Col>                
        <Col xs={2}> <a href='https://www.facebook.com/profile.php?id=100006284646611'target='_blank' rel='noopener noreferrer'> <BsFacebook title='Facebook'/></a> </Col>      
      </Row>
      <p className='m-auto font-monospace opacity-50 mt-4' 
        style={{
          color:"var(--color-text)", 
          fontSize:'var(--fs-xs)',
          lineHeight:'1.5', 
          maxWidth:'320px',
          wordSpacing:"-3px",
        }} >
        Inspired by <a href='https://brittanychiang.com' target='_blank' rel='noopener noreferrer' className='highlight-link'>Brittany Chiang</a>.
        Built with <span className='highlight'>React </span> 
        and <span className='highlight'>ReactBootstrap</span>, 
        deployed with <span className='highlight'>Vercel</span>.
      </p>
    </Container>
  )
}

export default Footer