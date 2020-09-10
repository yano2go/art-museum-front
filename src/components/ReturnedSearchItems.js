import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import {Link} from 'react-router-dom'

export default function ReturnSearchItems(props) {


    return (
        
        <div>
            <div>
            
            {/* {Object.keys(props.allReturnedObjects).length > 0 &&

                

                <h3>On page {props.allReturnedObjects.info.page} of {props.allReturnedObjects.info.pages}</h3>
                
                <Link to={props.allReturnedObjects.info.next} />} */}
           </div>     

            <CardColumns>

                {Object.keys(props.allReturnedObjects).length > 0 &&
                


                    props.allReturnedObjects.records.map((object, i) => {
                        return (


                            <Card className="" style={{ width: '22rem' }} key={i}>
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
                                <Card.Body>
                                    <Card.Title>{object.title}</Card.Title>
                                    <Card.Text>{object.culture}</Card.Text>

                                    <Button variant="primary" onClick={props.handleAddToCollection} title={object.title} id={object.id} culture={object.culture} classification={object.classification} type='button'>Add to Collection</Button>
                                </Card.Body>
                                {console.log(object.title)}
                            </Card>



                        )
                    })

                }
            </CardColumns>
        </div>
        
    )

}