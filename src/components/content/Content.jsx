import Buttons from '../Buttons'
import React from 'react'
import { Row, Col, Image, Stack } from 'react-bootstrap'


const Content = ({imgs, title, sub, btnOne, btnTwo, contStart, btnStyle}) => {
    
  return (
    <>
     {
        contStart === 'left' && (
            
            <Row className='py-5 py-md-3 justify-content-center justify-content-md-start'>
                
                <Col xs={6} md={6} className='d-flex justify-content-center justify-content-md-start'>
                    <Image src={imgs}  className='img-fluid'/>
                </Col>
                <Col md={6} className='d-flex flex-column justify-content-center align-items-center align-items-md-start'>
                    <h1 className="text-center text-md-start heading-font" style={{ fontSize: "3rem" }}>
                         {title}
                    </h1>
                    <p className='d-flex  w-100 py-3 text-center text-md-start justify-content-center justify-content-md-start'>
                        {sub}
                    </p>
                    <Stack direction="horizontal" gap={3} className='justify-content-center justify-content-md-start'>
                        {btnOne[0] && (<Buttons variant="purple" className={btnStyle}>
                            {btnOne[1]}
                        </Buttons>)}
                        {btnTwo[0] && (<Buttons variant="outline-secondary" className={btnStyle}>
                            {btnTwo[1]}
                        </Buttons>)}
                    </Stack>
                </Col>
            </Row>)}
            
           { contStart === 'right' && (
                <Row className='py-5 py-md-3 flex-md-row-reverse justify-content-center justify-content-md-start'>
                    <Col xs={6} md={6} className='d-flex justify-content-center justify-content-md-end'>
                        <Image src={imgs} className='img-fluid'/>
                    </Col>
                    <Col md={6} className='d-flex  flex-column justify-content-center align-items-center align-items-md-start'>
                        <h1 className="text-center text-md-start heading-font " style={{ fontSize: "3rem" }} >
                            {title}
                        </h1>
                        <p className='d-flex  w-100 py-3 text-center text-md-start justify-content-center justify-content-md-start'>
                            {sub}
                        </p>
                        <Stack direction="horizontal" gap={3} className='justify-content-center justify-content-md-start'>
                            {btnOne[0] && (<Buttons variant="purple" className={btnStyle}>
                                {btnOne[1]}
                            </Buttons>)}
                            {btnTwo[0] && (<Buttons variant="outline-secondary" className={btnStyle}>
                                {btnTwo[1]}
                            </Buttons>)}
                        </Stack>
                    </Col>
                    
                </Row>

            )}
    </>
  )
}

export default Content