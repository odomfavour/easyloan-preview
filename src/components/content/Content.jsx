import Buttons from '../Buttons'
import React from 'react'
import { Row, Col, Image, Stack } from 'react-bootstrap'


const Content = ({imgs, title, sub, btnOne, btnTwo, contStart}) => {
    
  return (
    <>
     {
        contStart === 'left' && (
            <Row className='py-3'>
                <Col>
                    <Image src={imgs}/>
                </Col>
                <Col className='d-flex flex-column justify-content-center'>
                    <h1 className="heading-font" style={{ fontSize: "3rem" }}>
                         {title}
                    </h1>
                    <p className='d-flex  w-100 py-3'>
                        {sub}
                    </p>
                    <Stack direction="horizontal" gap={3}>
                        {btnOne[0] && (<Buttons variant="purple" className="w-25">
                            {btnOne[1]}
                        </Buttons>)}
                        {btnTwo[0] && (<Buttons variant="outline-secondary" className="w-25">
                            {btnTwo[1]}
                        </Buttons>)}
                    </Stack>
                </Col>
            </Row>)}
            
           { contStart === 'right' && (
                <Row className='py-3'>
                    <Col className='d-flex flex-column justify-content-center'>
                        <h1 className="heading-font" style={{ fontSize: "3rem" }}>
                            {title}
                        </h1>
                        <p className='d-flex  w-100 py-3'>
                            {sub}
                        </p>
                        <Stack direction="horizontal" gap={3}>
                            {btnOne[0] && (<Buttons variant="purple" className="w-25">
                                {btnOne[1]}
                            </Buttons>)}
                            {btnTwo[0] && (<Buttons variant="outline-secondary" className="w-25">
                                {btnTwo[1]}
                            </Buttons>)}
                        </Stack>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <Image src={imgs}/>
                    </Col>
                </Row>

            )}
    </>
  )
}

export default Content