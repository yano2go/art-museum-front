import React from 'react'

export default function MyCollection(props){

    // const [ myObjects ] = this.props
    return(
        <div className='my-collection'>
        {props.myObjects.map((myObject, i)=>{
          return (
            <div key={myObject._id}>
              <h2>{myObject.title}</h2>
              <img src={myObject.img} style={{maxWidth: '75px'}} alt={myObject.title}/>
              <h2>{myObject.culture}</h2>
          <p style={{fontSize: '15px'}}>{myObject.description}</p>
            </div>  
          )
        })}

      </div>
    )
}