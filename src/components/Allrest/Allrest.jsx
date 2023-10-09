import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Restcard from '../RestCard/Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Allrest() {
//to hold all restaurant details as in the form of array
  const [allRestaurant,setAllRestaurant]=useState([])
  const fetchData=async()=>{
    const respone=await axios('http://localhost:3001/restaurants')
    // console.log(respone.data);
    setAllRestaurant(respone.data)
  }
  // console.log(allRestaurant);
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      <Row>
      { 
      allRestaurant.map(item=>(
        <Col sm={12} md={6} lg={4} xl={3}>
          <Restcard restaurants={item}/>
        </Col>
      ))
      }
      </Row>
    </div>
  )
}

export default Allrest