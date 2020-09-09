import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import MyCollection from './components/MyCollection';
import Button from 'react-bootstrap/Button'
import Navbar from './components/Navbar';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'


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
  
  const [myObjects, setMyObjects] = useState([])

  useEffect(() => {
		query.searchURL.length > 0 &&
			(async () => {
				try {

					// const response = await fetch(query.searchURL);
          // const data = await response.json(); 
          // setAllReturnedObjects({ ...allReturnedObjects, ...data });
          console.log(query.searchURL)
          const response = await axios.get(query.searchURL)
          setAllReturnedObjects({ ...allReturnedObjects, ...response.data });
          

					updateQuery({ ...query, searchURL: '', categories: '' });
				} catch (error) {
					console.error(error);
				}
			})();
  }, [allReturnedObjects, query]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/api/");
      setMyObjects(response.data);
    }
    fetchData();
  }, [myObjects]);
  
  const handleSubmit = event => {
    event.preventDefault();
    // console.log(typeof document.getElementById('cultureSelect').value)
    

    
    const returnedClassificationValue = 'classification=' + document.getElementById('classificationSelect').value + '&'

    const returnedCultureValue = 
      document.getElementById('cultureSelect').value === '' ?
      'culture=any' : 
    'culture=' + document.getElementById('cultureSelect').value;
    
    // console.log(returnedCultureValue)
    
    updateQuery({
      ...query, ...query.categories = returnedClassificationValue + returnedCultureValue
    })
    query.categories.length > 0 ?
		updateQuery({
			...query,
      // searchURL: `${query.baseURL}q=${query.categories}&${query.apiKey}`}) : 
      //without q=
      searchURL: `${query.baseURL}${query.categories}&${query.apiKey}`}) :
    
      updateQuery({
        ...query,
        searchURL: `${query.baseURL}${query.apiKey}`

    });
  
    
  };
  
  const handleChange = event => {
		updateQuery({ ...query, ...{ [event.target.id]: event.target.value } });
	};

  const handleAddToCollection = async (event) => {
    // console.log(event.target.id)
    // console.log(event.target.title)
    // console.log(typeof event.target.culture); 
    // console.log(typeof 52); 
    // console.log(Object.keys(event.target))
    
    const harvardResponse = await axios.get(`https://api.harvardartmuseums.org/object/${event.target.id}?apikey=${APIKEY}`)
    
    const dbresponse = await axios.post('http://localhost:3001/api', {
      culture: harvardResponse.data.culture,
      classification: harvardResponse.data.classification,
      description: harvardResponse.data.description,
      title: harvardResponse.data.title,
      img: harvardResponse.data.primaryimageurl,
      personalThoughts: ''
      // harvardResponse.data 
    })
  }

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
    <div className="d-flex">

      <div className="mr-5 border">
      <Navbar />
      </div>

      <div className="">
      <form onSubmit={handleSubmit}>

      <label htmlFor='classification-select'>Select Classification</label>
        <select id='classificationSelect' name='classification' value={undefined} onChange={handleChange}>
          <option value=''>Select Classification...</option>
          <option value='Photographs'>Photographs</option>
          <option value='Vessels'>Vessels</option>
          <option value='Coins'>Coins</option>
          
        </select>

      <label htmlFor='culture-select'>Select Culture</label>
        <select id='cultureSelect' name='culture' value={undefined} onChange={handleChange}>
          <option value=''>Select Culture...</option>
          <option value='French'>French</option>
          <option value='Greek'>Greek</option>
          <option value='Italian'>Italian</option>
          <option value='Chinese'>Chinese</option>
          
        </select>

        
        
      {/* <label htmlFor="title"> // ORIGINAL TYPE-IN STYLE
					Title:
					<input
						id="categories"
						type="text"
						value={query.categories}
						onChange={handleChange}
					/>
				</label> */}

				<input variant="primary" type="submit" value="Search For Objects" />
        
      </form>

      <CardColumns>
      {Object.keys(allReturnedObjects).length > 0 &&
      // {showReturnedObjects}

      allReturnedObjects.records.map((object,i)=>{
        return(
          
          <Card className="" style={{width: '22rem'}} key={i}> 
          <Card.Img className="" variant="top" src={`${object.primaryimageurl}`} alt='art piece'/>
          <Card.Body>
          <Card.Title>{object.title}</Card.Title>
          <Card.Text>{object.culture}</Card.Text>
          {/* <Card.Text>{object.description}</Card.Text> */}
          <Button variant="primary" onClick={handleAddToCollection} title={object.title} id={object.id} culture={object.culture} classification={object.classification} type='button'>Add to Collection</Button>
          </Card.Body>
          </Card>
          
        )})

      }
      </CardColumns>
      <hr />
      
      {/* <div className='my-collection'>
        {myObjects.map((myObject, i)=>{
          return (
            <div key={myObject._id}>
              <h2>{myObject.title}</h2>
              <img src={myObject.img} style={{maxWidth: '75px'}} alt={myObject.title}/>
              <h2>{myObject.culture}</h2>
          <p style={{fontSize: '15px'}}>{myObject.description}</p>
            </div>  
          )
        })} */}
        <MyCollection myObjects={myObjects} />

      {/* </div> */}

    </div>
    
    </div>
  )
}


export default App;
