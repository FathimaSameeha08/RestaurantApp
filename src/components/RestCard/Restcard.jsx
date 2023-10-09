import React from 'react'
import Card from 'react-bootstrap/Card';
import './Restcard.css'
import { Link } from 'react-router-dom';


function Restcard({restaurants}) {
    console.log(restaurants);
  return (
    <div>
        <Link to={`/view/${restaurants.id}`} style={{textDecoration:'none'}}>
        <Card id="card">
      <Card.Img variant="top" src={restaurants.photograph}  />
      <Card.Body>
        <Card.Title>{restaurants.name}</Card.Title>
        <Card.Title style={{height:'70px',fontSize:'12px'}}>
        Address : {restaurants.address}
         Neighborhood : {restaurants.neighborhood}
         Cuisine Type : {restaurants.cuisine_type}
        </Card.Title>
      </Card.Body>
        </Card>
        </Link>
    </div>
  )
}
export default Restcard