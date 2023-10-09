import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Restop({op}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Restaurant Timing </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday : {op?.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday : {op?.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday : {op?.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Friday : {op?.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday : {op?.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday : {op?.Sunday}</ListGroup.Item>

    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Restop