import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'
function Footer() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
           <p>All rights reserved under Foodtopia &copy; Foodtopia@gmail.com</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer