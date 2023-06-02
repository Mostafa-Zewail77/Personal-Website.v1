import { useEffect, useState } from 'react';
import { Corner, Loader } from './components';
import { About, Contact, Footer, Profile, Projects } from './containers';
import "./App.css"
import { Col, Container, Row } from 'react-bootstrap';
import {fetchFromAPI} from './utils/fetchFromAPI';



function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(false);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromAPI();
      setData(data);
    };

    fetchData();
  }, []);

if (!data) return <Loader/>
  return ( 
    <>
      { loading 
      ? (<Loader/>) 
      : (
        <Container>
          <Corner githubURL= {data[0].owner.html_url }/>
          <Row className='d-flex justify-content-between'>
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
      )
      }

     

    </>
   );
}

export default App;
