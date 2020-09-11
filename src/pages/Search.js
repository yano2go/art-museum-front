import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Searchbars from '../components/Searchbars'
import ComingSoon from '../img/imageComingSoon.png'
import ReturnedSearchItems from '../components/ReturnedSearchItems'

import { useAlert } from 'react-alert'



function Search() {

    const APIKEY = process.env.REACT_APP_APIKEY

  const [allReturnedObjects, setAllReturnedObjects] = useState({})
  
  const [query, updateQuery] = useState({
    baseURL: 'https://api.harvardartmuseums.org/object?',
    apiKey: `apikey=${APIKEY}`,
    categories: '',
    searchURL: ''
  })
  
  

  useEffect(() => {
		query.searchURL.length > 0 &&
			(async () => {
				try {
          // console.log(query.searchURL)
          const response = await axios.get(query.searchURL)
          setAllReturnedObjects({ ...allReturnedObjects, ...response.data });
          await updateQuery({ ...query, categories: '', searchURL: '' });
          await console.log(query.searchURL.length)

				} catch (error) {
					console.error(error);
				}
			})();
  }, [query]);

    const handleNext = event => {
        event.preventDefault()
        updateQuery({...query, searchURL: `${allReturnedObjects.info.next}`})
        console.log(query.searchURL)
      }

      const handlePrevious = event =>{
        event.preventDefault()
        updateQuery({...query, searchURL: `${allReturnedObjects.info.prev}`})
        console.log(query.searchURL)
    
      }
      
      const handleSubmit = event => {
        event.preventDefault();
    
        const returnedClassificationValue = 'classification=' + document.getElementById('classificationSelect').value + '&'
    
        const returnedCultureValue = 
          document.getElementById('cultureSelect').value === '' ?
          'culture=any' : 
        'culture=' + document.getElementById('cultureSelect').value;
        
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
      
      // const handlePreviousPage = async event => {
      //   event.preventDefault()
      //   const response = await axios.get()
      // }

      const alert = useAlert()
    
      const handleAddToCollection = async (event) => {
        alert.show('Added to collection!')
        const harvardResponse = await axios.get(`https://api.harvardartmuseums.org/object/${event.target.id}?apikey=${APIKEY}`)

        const dbresponse = await axios.post('https://art-museum-front.herokuapp.com/api', {
          culture: harvardResponse.data.culture,
          classification: harvardResponse.data.classification,
          description: harvardResponse.data.description,
          title: harvardResponse.data.title,
          img: harvardResponse.data.primaryimageurl,
          artist:
          harvardResponse.data.people ? 
          harvardResponse.data.people[0].name :
          'Unknown Artist',
          dated: harvardResponse.data.dated,
          personalThoughts: ''
        })

      }



    return (
        <div className="search">
            <Searchbars handleChange={handleChange} handleSubmit={handleSubmit} />
       <ReturnedSearchItems allReturnedObjects={allReturnedObjects} handleAddToCollection={handleAddToCollection} setAllReturnedObjects={setAllReturnedObjects} handleNext={handleNext} handlePrevious={handlePrevious} ComingSoon={ComingSoon} />
        </div>
    )
}
export default Search