import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default function Searchbars(props){
    return (

      <Form onSubmit={props.handleSubmit} style={{marginBottom: '50px', paddingLeft: '280px'}}>
        <Form.Group>
          <Form.Label style={{fontSize: '2rem', padding: '8px 0'}}as='legend' column sm={12}>
            Explore the Museum!
          </Form.Label>
          <Form.Label style={{marginRight: '15px'}}>Select Classification</Form.Label>
          <Form.Control style={{width: '60%', marginRight: '10px'}} id='classificationSelect' value={undefined} onChange={props.handleChange} as='select' size='sm' custom>
            <option value=''></option>
            <option value='Coins'>Coins</option>
            <option value='Paintings'>Paintings</option>
            <option value='Furniture'>Furniture</option>
            <option value='Photographs'>Photographs</option>
            <option value='Vessels'>Vessels</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label style={{marginRight: '59px'}}>Select Culture</Form.Label>
          <Form.Control style={{width: '60%', marginRight: '10px'}} id='cultureSelect' value={undefined} onChange={props.handleChange} as='select' size='sm' custom>
            <option value=''></option>
            <option value='American'>American</option>
            <option value='Chinese'>Chinese</option> 
            <option value='French'>French</option>
            <option value='Greek'>Greek</option>
            <option value='Italian'>Italian</option>
          </Form.Control>
        </Form.Group>

        <input className='btn btn-primary' variant='primary' type='submit' value='Search' />

      </Form>

      // <>
      //   <form onSubmit={props.handleSubmit}>

      // <label htmlFor='classification-select'>Select Classification</label>
      //   <select id='classificationSelect' name='classification' value={undefined} onChange={props.handleChange}>
      //     <option value=''>Select Classification...</option>
      //     <option value='Coins'>Coins</option>
      //     <option value='Paintings'>Paintings</option>
      //     <option value='Furniture'>Furniture</option>
      //     <option value='Photographs'>Photographs</option>
      //     <option value='Vessels'>Vessels</option>
          
      //   </select>

      // <label htmlFor='culture-select'>Select Culture</label>
      //   <select id='cultureSelect' name='culture' value={undefined} onChange={props.handleChange}>
      //     <option value=''>Select Culture...</option>
      //     <option value='American'>American</option>
      //     <option value='Chinese'>Chinese</option> 
      //     <option value='French'>French</option>
      //     <option value='Greek'>Greek</option>
      //     <option value='Italian'>Italian</option>
      //   </select>

			// 	<input variant="primary" type="submit" value="Search For Objects" />
        
      // </form>

      // {/* </> */}
    )
}

