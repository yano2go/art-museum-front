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
        const response = await axios.get(`http://localhost:3001/api/${event.target.id}`)
        await console.log('from r.d', response.data)
        await setMyShownPiece({...myShownPiece, ...response.data})
        // setMyShownPiece({})
        // await console.log(myShownPiece)
      } catch (error) {
        console.error(error)
      }
    }

    return(

      <div>
        <div className='collection-index'>
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
        <Show myShownPiece={myShownPiece}/>

      </div>
      {/* <Show myObject={myObject}/> */}
        </div>
      
    )
}