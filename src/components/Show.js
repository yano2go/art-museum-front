import React from "react"


export default function Show(props){
     return(
          <div>
               {/* <img src={props.myPiece} alt={props.myPiece.title}/> */}
               <h1>{props.myShownPiece.title}</h1>
          </div>
     )
} 