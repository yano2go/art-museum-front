import React from 'react';
import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'

export default function Sidebar(props){
    return(
    
        <Nav defaultActiveKey="/home" className="flex-column w-25 vh-100  justify-content-center m-3">
  <Nav.Link href="/home">Active</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav>
 
    )
}