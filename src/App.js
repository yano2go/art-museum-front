import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import MyCollection from './pages/MyCollection';



import Navbar from './components/Navbar';
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// import CardColumns from 'react-bootstrap/CardColumns'

import Searchbars from './components/Searchbars'
import ComingSoon from './img/imageComingSoon.png'
import ReturnedSearchItems from './components/ReturnedSearchItems'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'

function App(props) {

  

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get("https://harvard-art-museum-backend.herokuapp.com/api/");
  //     await setMyCollection(response.data);
  //     await setMyCollection([])
  //   }
  //   fetchData();
  // }, [myCollection]);

  // const [myCollection, setMyCollection] = useState([])

  // useEffect(() => {
  //   // myCollection.length > 0 && 

  //   (async () => {
   
  //     const response = await axios.get("https://harvard-art-museum-backend.herokuapp.com/api/");
  //     await setMyCollection(response.data);
      
  //   })()
    
  // }, [myCollection]);

  

  // return (
  //   <div className="d-flex">
  //     HOMEPAGE /
  //     SAERCH
  //     <Searchbars handleChange={handleChange} handleSubmit={handleSubmit} />
  //     <ReturnedSearchItems allReturnedObjects={allReturnedObjects} handleAddToCollection={handleAddToCollection} setAllReturnedObjects={setAllReturnedObjects} handleNext={handleNext} ComingSoon={ComingSoon} />
  //     /SAERCH
  //     MYCOLLECTION
  //     <MyCollection myCollection={myCollection} ComingSoon={ComingSoon} />
  //     /MyCollecTIOn
  //   </div>
  // )

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/mycollection' exact component={MyCollection}/>
        <Route path='/search' exact component={Search}/>
      </Switch>
    </Router>
    </>
  );


}


export default App;
