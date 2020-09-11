import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ComingSoon from '../img/imageComingSoon.png'


export default function Show(props) {

     const { title, artist, dated, personalThoughts, img, _id, culture } = props.myShownPiece


     return (
          <div>
               {Object.keys(props.myShownPiece).length > 0 &&
                    <>
                         
                         <div className='showBody d-flex justify-content-center' style={{padding: '20px'}}>
                              <Card className='personalThoughts align-items-start' id={_id} style={{ width: '15rem', margin: '20px' }}>
                                   <Card.Body>
                                        <Card.Title>Personal Thoughts</Card.Title>
                                        {
                                             personalThoughts ?
                                                  <Card.Text>
                                                       {personalThoughts}
                                                  </Card.Text> :
                                                  <Card.Text>
                                                       No personal thoughts yet. Add some!
                                                  </Card.Text>
                                        }
                                        <Form onSubmit={props.handleDelete} id={_id}>
                                             
                                        <Button variant='danger' type='submit' onSubmit={props.handleDelete}>Delete This Item</Button>
                                        </Form>
                                   </Card.Body>
                              </Card>
                              <Card className='showImage align-items-center' style={{ width: '20rem' }}>
                                   {
                                   img ?
                                   <Card.Img variant="top" style={{padding: '10px', borderRadius: '20px'}} src={img} /> :
                                   <Card.Img variant="top" style={{padding: '10px', borderRadius: '20px'}} src={ComingSoon} />
                              }
                                   {/* <Card.Img variant="top" style={{padding: '10px', borderRadius: '20px'}} src={img} /> */}
                                   <Card.Body>
                                        <Card.Title className='text-center'>{title}</Card.Title>
                                        <Card.Subtitle className='text-center'>{`(${artist}, ${culture}, ${dated})`}</Card.Subtitle>
                                   </Card.Body>
                              </Card>
                              <Card className='updateThoughts justify-content-start align-items-end' style={{ width: '15rem', padding: '10px', margin: '20px' }}>
                              <Form className='personalUpdate' id= {_id} onSubmit={props.handleThoughtsSubmit} value={personalThoughts}>
                              <Form.Group>
                                   <Form.Label>Update Your Thoughts Here</Form.Label>
                                   <Form.Control name='personalThoughts' id='thoughtForm' placeholder='Personal Thoughts' as="textarea" rows="4" />
                              </Form.Group>
                              <Button className='float-right' variant='success' type='submit' id={_id}>
                                        Update Thoughts
                              </Button>
                              </Form>
                              </Card>

                         </div>
                    </>
               }




               {/* <img style={{maxWidth: '200px'}} src={
                    (!props.myShownPiece.img || props.myShownPiece.img === undefined) && Object.keys(props.myShownPiece).length > 0 ? 
                    props.ComingSoon :
                    props.myShownPiece.img
                    } 
                    alt={props.myShownPiece.title}/>
               <h2>{props.myShownPiece.culture}</h2>
               <p>{props.myShownPiece.personalThoughts}</p>
               {Object.keys(props.myShownPiece).length > 0 && 
               <div>
               <form onSubmit={props.handleThoughtsSubmit} id={props.myShownPiece._id} value={props.personalThoughts}>
                    <input type='textarea' name='personalThoughts' id='thoughtForm' placeholder='Add your personal thoughts here' />
                    <input type='submit' value='Update your Thoughts'/>

               </form>
               <form onSubmit={props.handleDelete} id={props.myShownPiece._id}>
                    <input type='submit' value='DELETE ITEM' />
               </form>
               </div>
               } */}
          </div>


     )
} 