import React, { useEffect, useState } from 'react'
import Show from "./Show.js"
import axios from "axios"
// import App from "../App"
import {Link} from "react-router-dom"


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

  useEffect(()=>{
    console.log('from uE', myShownPiece)

  },[myShownPiece])

    // const [ myObjects ] = this.props

    const handleClick = async event => {
      event.persist()
      try {
        const response = await axios.get(`https://harvard-art-museum-backend.herokuapp.com/api/${event.target.id}`)
        await console.log('from r.d', response.data)
        await setMyShownPiece({...myShownPiece, ...response.data})
        // setMyShownPiece({})
        // await console.log(myShownPiece)
      } catch (error) {
        console.error(error)
      }
    }

    // const handleThoughtsChange = event => {
    //   setMyShownPiece({...myShownPiece, [event.target.name]: [event.target.value]})
    //   console.log(myShownPiece)
    // }

    const handleThoughtsSubmit = async event => {
      event.preventDefault()
      console.log(event.target.personalThoughts.value)
      // console.log('from submit', myShownPiece)
      
      const response = await axios.put(`https://harvard-art-museum-backend.herokuapp.com/api/${event.target.id}`, {personalThoughts: event.target.personalThoughts.value})

      // const newThought = await axios.get(`http://localhost:3001/api/${event.target.id}`)
      await setMyShownPiece(response.data)
      // await console.log('from a.pt', response.data)

      // // // await setMyShownPiece({personalThoughts: response.data})
      // const response = await fetch(`http://localhost:3001/api/${event.target.id}`, {
      //   // const response = await fetch(`http://localhost:3001/api/` + props.match.params.id, {
      //   method: 'PUT',
      //   body: JSON.stringify(myShownPiece),
			// 	headers: {
			// 		'Content-Type': 'application/json'
			// 	}
      // })
      // const data = await response.json()
      // await setMyShownPiece(data)

      // (()=>{
      //   document.getElementById('thoughtForm').value = ''
      // })
      function eraseText() {
        document.getElementById('thoughtForm').value = "";
    }
    eraseText()
    
    }

    return(

      <div>
        <div className='collection-index'>
          <h2>My Collection</h2>
        {props.myObjects.map((myObject, i)=>{
          return (
            <div key={myObject._id}>
              <h2>{myObject.title}</h2>
              <Link to={myObject._id} id={myObject._id}>
              <img src={myObject.img} onClick={handleClick} id={myObject._id} style={{maxWidth: '75px'}} alt={myObject.title}/>
              <h2 id={myObject._id}>{myObject.culture}</h2>
              </Link>
          <p style={{fontSize: '15px'}}>{myObject.description}</p>
            </div>  
          )
          
        })}
        <hr />
        <Show myShownPiece={myShownPiece} /* handleThoughtsChange={handleThoughtsChange} */handleThoughtsSubmit={handleThoughtsSubmit}/>

      </div>
      {/* <Show myObject={myObject}/> */}
        </div>
      
    )
}