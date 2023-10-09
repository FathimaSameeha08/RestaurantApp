import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Review({re}) {
    const [open, setOpen] = useState(false);

  return (
    <div>
           <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
            {
                re?.map((item)=>(
                <div>
                    <br />
                    <h4>{item.name} <h6>{item.date}</h6></h4>
                    <h5>Rating : {item.rating}</h5>
                    
                </div>
                ))
            }
        </div>
      </Collapse>
    </div>
  )
}

export default Review