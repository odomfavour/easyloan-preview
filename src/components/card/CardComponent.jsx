import React from 'react'
import { Col, Card } from 'react-bootstrap'

const CardComponent = ({imgi, charName, position}) => {
  return (
    <Col className="d-flex justify-content-center ">
        <Card className="align-items-center text-center justify-content-center py-4 px-5">
            <Card.Img variant="top" src={imgi} alt="icon" className='img-fluid w-75'/>
            <Card.Body>
            <Card.Title className="fw-bold">{charName}</Card.Title>
            <Card.Text>{position}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default CardComponent