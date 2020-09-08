import React from "react"


export default function Show(props){



     return(
          <div>
               <h1>{props.myShownPiece.title}</h1>
               <img style={{maxWidth: '200px'}} src={props.myShownPiece.img} alt={props.myShownPiece.title}/>
               <p>{props.myShownPiece.personalThoughts}</p>
               <form onSubmit={props.handleThoughtsSubmit} id={props.myShownPiece._id} value={props.personalThoughts}>
                    <input type='textarea' value={props.personalThoughts} name='personalThoughts' onChange={props.handleThoughtsChange} id={props.myShownPiece._id} placeholder='Add your personal thoughts here' />
                    <input type='submit' value='Update your Thoughts'/>

               </form>
          </div>
     )
} 