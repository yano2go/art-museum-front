import React, { useEffect, useState } from 'react'
import Show from "../components/Show.js"
import axios from "axios"
// import App from "../App"
import {Link} from "react-router-dom"
import ComingSoon from '../img/imageComingSoon.png'
import Card from 'react-bootstrap/Card'
import { Carousel } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'

export default function MyCollection(props){

  // const [myPiece, setMyPiece] = useState({})
  const [myShownPiece, setMyShownPiece] = useState({})

  // useEffect(()=>{

  //   (async ()=>{
  //     try {
  //       const response= await axios.get(`http://localhost:3001/api/`)
  //       setMyShownPiece({myShownPiece, ...response.data})        
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   })()
  // },[myShownPiece])

  const [myCollection, setMyCollection] = useState([])

  useEffect(() => {
    // myCollection.length > 0 && 

    (async () => {
   
      const response = await axios.get("https://harvard-art-museum-backend.herokuapp.com/api/");
      await setMyCollection(response.data);
      
    })()
    
  }, [myCollection]);

  useEffect(()=>{
    // console.log('from uE', myShownPiece)

  },[myShownPiece])

    // const [ myObjects ] = this.props

    const handleClick = async event => {
      event.persist()
      try {
        const response = await axios.get(`https://harvard-art-museum-backend.herokuapp.com/api/${event.target.id}`)
        // await console.log('from r.d', response.data)

        // await setMyShownPiece({...myShownPiece, ...response.data})

        await response.data.img ? 
        await setMyShownPiece({...myShownPiece, ...response.data}) :
        response.data.img = undefined
        await setMyShownPiece({...myShownPiece, ...response.data})
        
        
        // await console.log(myShownPiece)
      } catch (error) {
        console.error(error)
      }
    }

    // const handleThoughtsChange = event => {
    //   setMyShownPiece({...myShownPiece, [event.target.name]: [event.target.value]})
    //   console.log(myShownPiece)
    // }

    const handleDelete = async event => {
      event.preventDefault()
      try {
        await axios.delete(`https://harvard-art-museum-backend.herokuapp.com/api/${event.target.id}`)
        setMyShownPiece({})
      } catch (error) {
        console.error(error)
      }
    }

    const handleThoughtsSubmit = async event => {
      event.preventDefault()
      // console.log(event.target.personalThoughts.value)
      // console.log('from submit', myShownPiece)
      const response = await axios.put(`https://harvard-art-museum-backend.herokuapp.com/api/${event.target.id}`, {personalThoughts: event.target.personalThoughts.value})
      await setMyShownPiece(response.data)
      function eraseText() {
        document.getElementById('thoughtForm').value = "";
    }
    eraseText()
    
    }

    return(
      <div>
        <div className='collection-index'>
        <Carousel className='d-flex' style={{backgroundColor: 'blue', margin: '40px 0 0 260px', maxWidth: '500px'}}>  
        {myCollection.map((myObject, i)=>{
          return (
            <Carousel.Item key={myObject._id}>
            <Row style={{marginLeft: '35px'}}>

            
            <Card className='border' style={{width: '8rem', margin: '10px'}}>
            {/* <Link to={myObject._id} id={myObject._id}> */}
              <Card.Img variant='top' src={myObject.img} onClick={handleClick} id={myObject._id} style={{width: '100%', height: '100%'}} alt={myObject.title} />
            {/* </Link> */}
            <Card.Body>
              <Card.Title style={{fontSize: '0.75rem'}}>{myObject.title}</Card.Title>
            </Card.Body>
          </Card>
            <Card className='border' style={{width: '8rem', margin: '10px'}}>
            {/* <Link to={myObject._id} id={myObject._id}> */}
              <Card.Img variant='top' src={myObject.img} onClick={handleClick} id={myObject._id} style={{width: '100%', height: '100%'}} alt={myObject.title} />
            {/* </Link> */}
            <Card.Body>
              <Card.Title style={{fontSize: '0.75rem'}}>{myObject.title}</Card.Title>
            </Card.Body>
          </Card>
            <Card className='border' style={{width: '8rem', margin: '10px'}}>
            {/* <Link to={myObject._id} id={myObject._id}> */}
              <Card.Img variant='top' src={myObject.img} onClick={handleClick} id={myObject._id} style={{width: '100%', height: '100%'}} alt={myObject.title} />
            {/* </Link> */}
            <Card.Body>
              <Card.Title style={{fontSize: '0.75rem'}}>{myObject.title}</Card.Title>
            </Card.Body>
          </Card>
          </Row>
          </Carousel.Item>

          )
          
        })}
        <hr />
        </Carousel>
        <Show myShownPiece={myShownPiece} handleThoughtsSubmit={handleThoughtsSubmit} ComingSoon={ComingSoon} handleDelete={handleDelete}/>
      </div>
        </div>
      
    )
}