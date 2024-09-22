import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const PageNotFound = () => {
  return (
    <>
    <Helmet>
      <title>404: Page Not Found</title>
      <meta name="description" content="The page you are looking for does not exist." />
    </Helmet>
    <Container className="text-center d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="display-1 fw-bold" style={{color:"var(--color-heading)",fontFamily:"var(--font-mono)"}}>404</h1>
      <p className="lead font-monospace" style={{color:"var(--color-text)" }}>
        Looks like you've ventured into the unknown digital realm.</p>
      <Link to="/">
        <button  className=" custom-btn ">
            Return to website
        </button>
      </Link>
    </Container>
    </>
  );
};

export default PageNotFound;
