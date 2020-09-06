import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
// require('dotenv').config()
// import 'dotenv'





function App(props) {

  const APIKEY = process.env.REACT_APP_APIKEY

  // const searchQuery = "culture=Greek&medium=Terracotta&page=32"

  const [allReturnedObjects, setAllReturnedObjects] = useState({})

  const [query, updateQuery] = useState({
    baseURL: 'https://api.harvardartmuseums.org/object?',
    apiKey: 'apikey=' + APIKEY,
    categories: '',
    searchURL: ''
  })


  // let num1= 1
  // /
  // async function fetchData(){
  // const fetchData= async() =>{
  //   try{


  //   const response= await axios.get(
  //       `https://api.harvardartmuseums.org/object?apikey=bogusapikey${searchQuery}`
  //     )
  //     setAllReturnedObjects(response.data);
  //     }catch(error){
  //       console.error(error)
  //     }
  //     fetchData()
  //     num1=0
  //     console.log(allReturnedObjects)
  // },[allReturnedObjects])

  // useEffect(() => {
  //   async function fetchData() {
  //     query.searchURL.length > 0 &&
        
  //         (const response = await axios.get(query.searchURL)
  //         setAllReturnedObjects(response.data)
  //         updateQuery({...query, searchQuery: '', categories: ''}    
  //   })
     
  //     fetchData(
  // })

  useEffect(() => {
		query.searchURL.length > 0 &&
			(async () => {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json(); // this is the point where we now have the movie object, NOT the response object itself
					setAllReturnedObjects({ ...allReturnedObjects, ...data });
					// console.log(allReturnedObjects);
					updateQuery({ ...query, searchURL: '', categories: '' });
				} catch (error) {
					console.error(error);
				}
			})();
  }, [allReturnedObjects, query]);
  
  const handleSubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			searchURL: `${query.baseURL}${query.apiKey}&${query.categories}`
		});
  };
  
  const handleChange = event => {
		updateQuery({ ...query, ...{ [event.target.id]: event.target.value } });
	};


  // const showReturnedObjects = 
  // allReturnedObjects.records.map((object,i)=>{
  //   return(
  //     <div key={i}> 
  //     <img src={object.images.baseimageurl} alt='art piece'></img>
  //     </div>
  //   )})

  //   return (

  //   //   // <div className="App">
  //   //   //   {Object.keys(allReturnedObjects.records).length>0 &&{showReturnedObjects}}
  //   //   // </div>
  //   // );
  // //}
  //   )


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="title">
					Title:
					<input
						id="categories"
						type="text"
						value={query.categories}
						onChange={handleChange}
					/>
				</label>
				<input type="submit" value="Search For Objects" />
        
      </form>
      {Object.keys(allReturnedObjects).length > 0 &&
      // {showReturnedObjects}
      allReturnedObjects.records.map((object,i)=>{
        return(
          <div key={i}> 
          <img src={object.primaryimageurl} alt='art piece' style={{maxWidth: '300px'}}></img>
          <h2>{object.title}</h2>
          <h2>{object.division}</h2>
          <h1>{i}</h1>
          </div>
        )})

      }

    </div>
  )
}


export default App;
