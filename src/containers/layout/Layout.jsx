import React from 'react'

import { About, Contact, Footer, Profile, Projects } from '../../containers';
import {  Corner } from '../../components';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';


function Layout({data}) {

  return (
    <>
     <Helmet>
        <title>Mostafa Hassan</title>
     </Helmet>
    <Container>
          <Corner/>
          <Row  className='px-lg-4 mx-lg-4'>
            <Col lg={5} >
              <Profile avatar={data[0].owner.avatar_url } /> 
            </Col>

            <Col lg={7}>
              <About/>
              <Projects/>
              <Contact/>
              <Footer/>
            </Col>
          </Row>
          
    </Container>
    </>
  )
}

export default Layout;