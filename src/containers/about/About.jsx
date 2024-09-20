import React from 'react'
import './About.css'
import { Heading } from '../../components'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section id='about' className='section__padding'>
        <Heading sectionHeader= 'About Me'/>
        <Container className='px-0'>

          <div className='about-text'>
            <p>
              Hi there! I'm Mostafa, a front-end developer with a passion for bringing ideas to life.
              My journey into coding began in 2021, and since then, I've focused on mastering the art of front-end development. 
              I enjoy the challenge of turning ideas into polished, responsive, and visually appealing applications that function well and provide a great user experience. 
            </p>
           
            <p>
              I've worked on various projects, from personal websites to complex platforms, with a focus on creating seamless user experiences.
              You can explore my <Link to="/archive" className='about-link'>full projects list here</Link>. 
              As a self-taught developer, I've honed my skills through dedication and a passion for learning. 
              You can view my <Link to="/certifications" className='about-link '>certifications here</Link>.
            
              {/* I believe that great user experiences are born from the perfect balance of solid engineering and thoughtful design. */}
            </p>
            <p>
              In my spare time, I enjoy experimenting with new tools, contributing to open-source projects, and exploring ways to refine my skills.
            </p>
        
            <p> Here are some technologies I’ve been working with:</p>
            <Row className=' techs pe-md-4 '>
              <Col xs={6} md={5}>
                <p>JavaScript (ES6+)</p>
                <p>React</p>
                <p>Next.js</p>
              </Col>
              <Col xs={6} md={5} >
                <p>TypeScript</p>
                <p>Tailwind CSS</p>
                <p>WordPress</p>
              </Col>
            </Row>  
          </div>        
        </Container>
    
    </section>
  )
}

export default About