import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Contact() {
  return (
   
        <Container id='contact' className='text-center section__padding'>
            
            <Row>
                <Col>
            
                   <h2 style={{
                    whiteSpace: 'nowrap',
                    color: 'var(--color-heading)',
                    fontSize: 'var(--fs-heading)', 
                    fontWeight: 'bold',
                   }}>Get In Touch</h2>

                   <p className='py-1 m-auto' style={{maxWidth:'450px',color:'var(--color-text)',fontSize:'var(--fs-md)'}}>Whether you have an idea for a project or just want to chat,feel free to shoot me an email!</p>
                   <a href='mailto:mostafahasan.dev@gmail.com'target='_blank' rel='noopener noreferrer'>
                        <button className='custom-btn mt-2' style={{padding: '1rem 1.25rem'}} > 
                            Say Hello
                        </button>
                   </a> 
                </Col>
            </Row>
        </Container>

  )
}

export default Contact