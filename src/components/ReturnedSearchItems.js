import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

export default function ReturnSearchItems(props) {
    return(






<CardColumns>
      {Object.keys(props.allReturnedObjects).length > 0 &&
      

      props.allReturnedObjects.records.map((object,i)=>{
        return(
          
          <Card className="" style={{width: '22rem'}} key={i}> 
          {/* <Card.Img className="" variant="top" src={
            object.primaryimageurl.value ?
            './img/imageComingSoon.png' :
            
            `${object.primaryimageurl}`
            } alt='art piece'/> */}

          {
          object.primaryimageurl ?
          <Card.Img className='' variant='top' src={`${object.primaryimageurl}`} alt='art piece' /> :
          <Card.Img className='' variant='top' src={props.ComingSoon} alt='art piece' />
          }

          {/* {console.log(object.title)} */}
          
          <Card.Body>
          <Card.Title>{object.title}</Card.Title>
          <Card.Text>{object.culture}</Card.Text>
          
          <Button variant="primary" onClick={props.handleAddToCollection} title={object.title} id={object.id} culture={object.culture} classification={object.classification} type='button'>Add to Collection</Button>
          </Card.Body>
          </Card>
          
          
        )})

      }
      </CardColumns>
    )
    }