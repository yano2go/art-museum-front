import React from 'react'
import logo from './logo.svg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel'
import Background from './srcImages/corridor.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import { Jumbotron } from 'react-bootstrap';

function Home() {
    return (
        <>
   <Jumbotron fluid style={{padding: '6%', margin: '0', backgroundColor: 'rgba(14, 69, 86, 0.9)', color: 'whitesmoke'}}>
      <Container>
      <h1>Welcome to Art Museum</h1>
      </Container>
    </Jumbotron>
    <Container fluid className='d-flex'>
      <Carousel>
        <Carousel.Item>
          <img style={{opacity: '0.8'}}
            className="d-block w-100"
            src="../images/coins.png"
            alt="First slide" />
            <Carousel.Caption style={{backgroundColor: 'rgba(14, 69, 86, 0.5)', borderRadius: '5px', boxShadow: '2px 2px 5px gray', color: "whitesmoke"}}>
              <h3>Explore</h3>
              <p>Our Galleries span cultures across the globe.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
            <img style={{opacity: '0.8'}}
              className="d-block w-100"
              src="../images/vessels.png"
              alt="Second slide" />
            <Carousel.Caption style={{backgroundColor: 'rgba(14, 69, 86, 0.5)', borderRadius: '5px', boxShadow: '2px 2px 5px gray', color: "whitesmoke"}}>
              <h3>Collect</h3>
              <p>Add your favorites to your own custom collection.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
            <img style={{opacity: '0.8'}}
              className="d-block w-100"
              src="../images/photographs.png"
              alt="Third slide" />
            <Carousel.Caption style={{backgroundColor: 'rgba(14, 69, 86, 0.5)', borderRadius: '5px', boxShadow: '2px 2px 5px gray', color: "whitesmoke"}}>
              <h3>Share</h3>
              <p>Share your thoughts with the world.</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </Container>
        </>
    )
}
export default Home