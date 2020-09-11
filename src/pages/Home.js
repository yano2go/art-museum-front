import React from 'react'
import '../App.css';
import Carousel from 'react-bootstrap/Carousel'
// import Background from './srcImages/corridor.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import { Jumbotron } from 'react-bootstrap';
import Paintings from '../img/paintings.png'
import Vessels from '../img/vessels.png'
import Photos from '../img/photos.png'
function Home() {
    return (
        <>
   <Jumbotron fluid style={{padding: '1%', margin: '0', backgroundColor: 'rgba(14, 69, 86, 0.9)', color: 'whitesmoke'}}>
      <Container>
      <h1 style={{fontSize: '5rem', textAlign: 'center'}}>Welcome to the Art Museum</h1>
      </Container>
    </Jumbotron>
    <Container fluid className='d-flex justify-content-center'>
      <Carousel className='d-flex align-items-center'>
        <Carousel.Item>
          <img style={{opacity: '0.6', width: '1300px'}}
            className="d-block"
            src={Paintings}
            alt="First slide" />
            <Carousel.Caption style={{fontSize: '2rem', backgroundColor: 'rgba(14, 69, 86, 0.5)', borderRadius: '5px', boxShadow: '2px 2px 5px gray', color: "whitesmoke"}}>
              <h3 style={{fontSize: '4rem'}}>Explore</h3>
              <p>Our Galleries span cultures across the globe.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img style={{opacity: '0.6', width: '1300px'}}
              className="d-block"
              src={Vessels}
              alt="Second slide" />
            <Carousel.Caption style={{fontSize: '2rem', backgroundColor: 'rgba(14, 69, 86, 0.5)', borderRadius: '5px', boxShadow: '2px 2px 5px gray', color: "whitesmoke"}}>
              <h3 style={{fontSize: '4rem'}}>Collect</h3>
              <p>Add your favorites to your own custom collection.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img style={{opacity: '0.6', width: '1300px'}}
              className="d-block"
              src={Photos}
              alt="Third slide" />
            <Carousel.Caption style={{fontSize: '2rem', backgroundColor: 'rgba(14, 69, 86, 0.5)', borderRadius: '5px', boxShadow: '2px 2px 5px gray', color: "whitesmoke"}}>
              <h3 style={{fontSize: '4rem'}}>Share</h3>
              <p>Share your thoughts with the world.</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
        </>
    )
}
export default Home