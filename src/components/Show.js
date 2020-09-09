import React from "react"


export default function Show(props){



     return(
          <div>
               <h1>{props.myShownPiece.title}</h1>
               <img style={{maxWidth: '200px'}} src={props.myShownPiece.img} alt={props.myShownPiece.title}/>
               <p>{props.myShownPiece.personalThoughts}</p>
               {Object.keys(props.myShownPiece).length > 0 && <form onSubmit={props.handleThoughtsSubmit} id={props.myShownPiece._id} value={props.personalThoughts}>
                    <input type='textarea' name='personalThoughts' id='thoughtForm' /* onChange={props.handleThoughtsChange} */ placeholder='Add your personal thoughts here' />
                    <input type='submit' value='Update your Thoughts'/>

               </form>}
          </div>
     )
} 