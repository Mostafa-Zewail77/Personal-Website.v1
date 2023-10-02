import React from 'react'
import './About.css'
import { Heading } from '../../components'
import { Col, Row } from 'react-bootstrap'

function About() {
  return (
    <section id='about' className='section__padding'>
        <Heading sectionHeader= 'About Me'/>

        <p>
          Hi, I'm Mostafa, and I've been coding for a while now, mainly focusing on creating web applications.<br/>
          I'm a self-taught software developer passionate about creating things that live on the Internet.  
          I started from scratch and fell in love with programming along the way. 
          There's something incredibly satisfying about turning ideas into real, working applications.
        </p>
        <p>
          My expertise lies in front-end development, particularly in React JS. 
          I've built a range of projects and continually learn to stay ahead in the field.
        </p>
        <p>
          I'm all about collaboration. Whether it's with clients or teams, I enjoy working together to deliver solutions that drive results.
          I'm always on the lookout for new opportunities to grow my skill set and contribute to successful projects.
        </p>
        <p> Here are some technologies I’ve been working with:</p>
        <Row className=' techs pe-md-5'>
          <Col xs={6} md={5}>
            {/* <p>HTML &amp; CSS</p> */}
            <p>JavaScript (ES6+)</p>
            <p>React</p>
            <p>Next.js</p>
          </Col>
          <Col xs={6} md={5} >
            {/* <p>Git &amp; GitHub </p> */}
            <p>Bootstrap</p>
            <p>Tailwind CSS</p>
            <p>Material UI (MUI)</p>
          </Col>
        </Row>
    </section>
  )
}

export default About