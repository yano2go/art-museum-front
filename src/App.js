require('dotenv').config()
import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'



function App() {

const APIKEY = process.env.APIKEY
const searchQuery = "culture=Greek&medium=Terracotta&page=32"
const [allReturnedObjects, setAllReturnedObjects] = useState([])
let num1= 1
useEffect(() =>{
  num1 > 0 &&
  async function fetchData(){
  // const fetchData= async() =>{
  //   try{

     
  const response= await axios.get(
      `https://api.harvardartmuseums.org/object?apikey=bogusapikey${searchQuery}`
    )
    setAllReturnedObjects(response.data);
    }catch(error){
      console.error(error)
    }
    fetchData()
    num1=0
    console.log(allReturnedObjects)
},[allReturnedObjects])

// const showReturnedObjects = allReturnedObjects.records.map((object,i)=>{
//   return(
//     <div key= {i}> 
//     <img src={object.images.baseimageurl}></img>
//     </div>
//   )})

//   return (

//   //   // <div className="App">
//   //   //   {Object.keys(allReturnedObjects.records).length>0 &&{showReturnedObjects}}
//   //   // </div>
//   // );
// //}
//   )
  return <h1>we rule</h1>
}
export default App;
