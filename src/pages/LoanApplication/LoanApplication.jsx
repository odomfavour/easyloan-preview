import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Col, Row, Image, Stack } from "react-bootstrap";

import PageWrapperV2 from "../../layouts/no_footer_layout/PageWrapperV2";
import { Buttons } from "../../components/index";

import reg from "../../assets/Illust/illust_Register.svg";
import * as AiIcons from 'react-icons/ai'


const LoanApplication = () => {
   const [appllicationModal, setApplicationModal] = useState(false);
   const [modalValue, setModalValue] = useState('Select your business')
   const handleLoanModal = () => {
        setApplicationModal(!appllicationModal)
   }

   const setmodalBtnColor =() => modalValue === 'Select your business' ? 'w-100 bg-secondary text-dark disabled':'w-100'
   
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/businessDetails')
    }

  return (
    <>
       <PageWrapperV2>
            <Container className="mt-5 h-100">
                <Row className="align-items-center justify-content-between px-md-5 pb-4 flex-column flex-lg-row ">
                    
                    <Col xs={9} lg={5}>
                        <Image src={reg} alt="lady registering" className="w-100 mb-5 mb-lg-0 mt-3"></Image>
                    </Col>
                    <Col lg={5}>
                        <Stack gap={5}>
                            <div className="d-none d-lg-block">
                                <h1 className="heading-font my-0">Loan Application</h1>
                                <p className="m-0" style={{ color: "#B1B0B0" }}>
                                    Select the business you want to use
                                </p>
                            </div>
                            
                            <Stack gap={5} className=" px-4 pt-3 pb-4 bg-gray form rounded">
                                <div className="position-relative" onClick={handleLoanModal}>
                                    <p>Business name</p>
                                    <div className="w-100 border px-4 py-2 bg-white rounded text-secondary  align-items-center d-flex justify-content-between">
                                        <p className="mb-0">{modalValue}</p>
                                        <AiIcons.AiOutlineDown/>
                                    </div>
                                    {
                                        appllicationModal && (
                                            <div className="w-100 position-absolute d-flex flex-column border px-4 py-2 bg-white rounded text-secondary  align-items-start d-flex justify-content-start" style={{'top': '110%', 'zIndex':'10'}}>
                                                <p className="mb-0 my-4 w-100 " onClick={()=>setModalValue('Lyd & Ste Ltd')}>Lyd & Ste Ltd</p>
                                                <p className="mb-0 my-4 w-100" onClick={()=>setModalValue('Brendan House of Shoes')}>Brendan House of Shoes</p>
                                                <p className="mb-0 my-4 w-100" onClick={()=>setModalValue('Eat More Limited')}>Eat More Limited</p>
                                                <p className="mb-0 my-4 w-100" onClick={()=>setModalValue('Laden Mall')}>Laden Mall</p>
                                                <p className="mb-0 my-4 w-100" onClick={()=>setModalValue('Bade Accessories')}>Bade Accessories</p>
                                                <p className="mb-0 my-4 w-100" onClick={()=>setModalValue('Others')}>Others</p>
                                            </div>
                                        )
                                    }
                                </div>
                                <Stack className="heading-font " gap={2}>
                                    <Buttons 
                                    variant="purple" 
                                    size="md" 
                                    onClick={handleClick}
                                    className={setmodalBtnColor()} 
                                    >
                                        Continue
                                    </Buttons>
                                    <Buttons variant="outline-secondary" size='md' className='w-100 rounded' as={Link} to={"/add-business"}>
                                        Add Business
                                    </Buttons>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </PageWrapperV2> 
    </>
  )
}

export default LoanApplication