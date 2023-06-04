import React, { useEffect, useState } from 'react';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import Loader from '../loader/Loader';
import './Archive.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import { BsArrowLeftShort } from 'react-icons/bs';


const monthNames = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
};

function Archive() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      
        const data = await fetchFromAPI();
        setData(data);
      
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;
  return (
    <Container className='archive section__padding'>
       <Link to="/" className='back-link d-inline-block ' aria-label="back">
          <BsArrowLeftShort className='arrow' /> <span>Mostafa Hassan</span>
        </Link>
        <div className="archive-header my-3">
          <h1 >Archive</h1>
          <p>A big list of Repos I’ve worked on</p>
        </div>
       
        
      <Row className='mt-5 th'>
        <Col xs={4} md={2}><h4>Date</h4></Col>
        <Col xs={6} md={5}><h4> Project</h4></Col>
        <Col md={4} className='d-none d-md-block'><h4> Topics</h4></Col>
        <Col xs={1}><h4>Link </h4></Col>
      </Row>
      <hr/>
    
    {data && (
      
        
        data.filter((repo)=> repo.name !== 'Mostafa-Zewail77')
          .sort((a, b) => {
            const dateA = new Date(a.created_at);
            const dateB = new Date(b.created_at);
            return dateB - dateA;
          })
          .map((repo) => (
              <Row key={repo.id} className='align-item-start tb'>
                <Col  xs={4} md={2} className='date'>
                  <p> {`${monthNames[repo.created_at .slice(5, 7)]}-${repo.created_at.slice(0, 4)}`}</p>                  
                </Col>

                <Col xs={6}  md={5} className='title'>
                  <p>{repo.name}</p>
                  <p className='d-none d-md-block'>{repo.description}</p>
                </Col>

                <Col  md={4} className=' d-none d-md-block topics'>
                  <ul className='list-unstyled d-none d-md-flex flex-wrap '>
                    {repo.topics.map((topic, index) => (
                      <li key={`${repo.id}-${index}`}>{topic}</li>
                    ))}
                  </ul>
                </Col>

                <Col xs={1} className='links d-flex '>
                  <a className='d-none d-md-block' href={repo.html_url} target='_blank' rel="noopener noreferrer"> <FiGithub /></a>
                  {
                    repo.homepage !== '' && repo.homepage !== null 
                    ? (<a className='ms-1 ms-md-2' href={repo.homepage} target='_blank' rel="noopener noreferrer"><FiExternalLink /></a>) 
                    : ( '' )
                  }
                </Col>

                <hr/>
              </Row>
              
          ))
    )}

    
  </Container>
  
  );
}

export default Archive;
