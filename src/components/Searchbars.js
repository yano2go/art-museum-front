import React from 'react'

export default function Searchbars(props){
    return (
        <form onSubmit={props.handleSubmit}>

      <label htmlFor='classification-select'>Select Classification</label>
        <select id='classificationSelect' name='classification' value={undefined} onChange={props.handleChange}>
          <option value=''>Select Classification...</option>
          <option value='Coins'>Coins</option>
          <option value='Paintings'>Paintings</option>
          <option value='Furniture'>Furniture</option>
          <option value='Photographs'>Photographs</option>
          <option value='Vessels'>Vessels</option>
          
        </select>

      <label htmlFor='culture-select'>Select Culture</label>
        <select id='cultureSelect' name='culture' value={undefined} onChange={props.handleChange}>
          <option value=''>Select Culture...</option>
          <option value='American'>American</option>
          <option value='Chinese'>Chinese</option> 
          <option value='French'>French</option>
          <option value='Greek'>Greek</option>
          <option value='Italian'>Italian</option>
        </select>

				<input variant="primary" type="submit" value="Search For Objects" />
        
      </form>
    )
}