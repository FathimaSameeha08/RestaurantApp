import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
function Header() {
  return (
    <div>
        <Navbar className=" shadow">
        <Container>
          <Navbar.Brand href="/" id="navid" >
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/4065/4065741.png"
              width="40"
              height="40"
              className="d-inline-block align-top me-3"
            />{' '}
            Foodtopia
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header