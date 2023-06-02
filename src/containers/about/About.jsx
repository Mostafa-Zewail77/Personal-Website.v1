import React from 'react'
import './About.css'
import { Heading } from '../../components'
import { Col, Row } from 'react-bootstrap'

function About() {
  return (
    <section id='about' className='section__padding'>
        <Heading sectionHeader= 'About Me'/>

        <p>Hello! My name is Mostafa, and I'm a self-taught software developer passionate about creating things that live on the Internet.  
           I started learning how to code with zero experience and quickly discovered my love for programming.<br/>
           I enjoy the process of taking an idea and turning it into a functioning application. <br/>
           Through personal projects and online courses, I have developed expertise in the frontend field.
        </p>
        <p>    
           I'm eager to collaborate with others and contribute to meaningful projects that make a difference in the user's experience.
           I'm always willing to learn and grow as a software developer. I am passionate about staying up-to-date with the latest trends and technologies in the field, and I am dedicated to enhancing my skills through continuous learning and professional development.
        </p>
        <p> Here are some technologies I’ve been working with:</p>
        <Row className=' techs pe-5'>
          <Col sm={5} >
            <p>HTML &amp; CSS</p>
            <p>JavaScript (ES6+)</p>
            <p>Bootstrap</p>
          </Col>
          <Col sm={5} >
            <p>Git &amp; GitHub </p>
            <p>React</p>
            <p>Material UI (MUI)</p>
          </Col>
        </Row>
    </section>
  )
}

export default About