import React from 'react'
import './About.css'
import { Heading } from '../../components'
import { Col, Row } from 'react-bootstrap'

function About() {
  return (
    <section id='about' className='section__padding'>
        <Heading sectionHeader= 'About Me'/>

        <p>
          Hi there! I'm Mostafa, a self-taught software developer with a passion for bringing ideas to life on the Internet.
          I started my coding journey from scratch and fell in love with programming along the way. 
          There's something incredibly satisfying about turning ideas into real, working applications.
        </p>
        <p>
          My expertise lies in front-end development, especially with React JS. 
          I've built a variety of projects and I'm always eager to learn and grow.
        </p>
        <p>
          I believe in the power of collaboration. Whether working with clients or teaming up with colleagues, I enjoy the process of working together to create solutions that make a difference.
          I'm always looking for new opportunities to grow my skill set and contribute to successful projects.
        </p>
        <p> Here are some technologies I’ve been working with:</p>
        <Row className=' techs pe-md-5'>
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
    </section>
  )
}

export default About