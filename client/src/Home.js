import React from "react";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const Home = () => (
    <Container fluid className='headerContainer'>
      <h1 className='homePageTitle'>Social Links</h1>
      <p className='homePageDesc'>Connect all your links and social media profiles at one page.</p>
      <Button variant="secondary">Get Started</Button>
    </Container>
  );

export default Home;
