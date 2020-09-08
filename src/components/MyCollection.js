import React from 'react'
import Show from "./Show.js"
import axios from "axios"
import App from "../App"
import {Link} from "react-router-dom"


export default function MyCollection(props){

    // const [ myObjects ] = this.props
    return(

      <div>
        <div className='collection-index'>
        {props.myObjects.map((myObject, i)=>{
          return (
            <div key={myObject._id}>
              <h2>{myObject.title}</h2>
              <img src={myObject.img} style={{maxWidth: '75px'}} alt={myObject.title}/>
              <h2>{myObject.culture}</h2>
              <Link to={myObject._id}>
                {/* <Show myObject={myObject} /> */}
              </Link>
          <p style={{fontSize: '15px'}}>{myObject.description}</p>
            </div>  
          )
          
        })}

      </div>
      {/* <Show myObject={myObject}/> */}
        </div>
      
    )
}