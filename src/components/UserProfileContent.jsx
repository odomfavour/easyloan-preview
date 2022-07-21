import React from 'react';
import SearchBar from "../components/SearchBar";
import { Button, Row, Col, Card } from "react-bootstrap";
import img from "../assets/img.jpg";

const UserProfileContent = () => {
  return (
    <div>
        <SearchBar />
        <div className='profile-pading mb-3'>
            <Row className="ms-0 me-0">
                <Col xs={12} md={6} className="">
                    <div className='user-name-font user-profile-font fw-bold mb-2'>Personal Profile</div>
                    <div className='bg-gray p-3 profile-section-one'>
                        <div className="d-flex justify-content-between">
                            <img src={img} alt="img" className="profile-img "/>
                            <div><Button className=''>Edit Profile</Button></div>
                        </div>
                        <div>
                            <div className="pt-3 profile-mid-font fw-bold">Lydia Salami</div>
                            <div className="py-2 profile-small-font" >Business Owner</div>
                            <div className="profile-small-font">2, Favour Street, Osapa, Lagos</div>
                            <div className="py-2 profile-small-font">lydia@lyd&ste.com</div>
                            <div className="profile-small-font">+234 803 222 4567</div>
                            <div className="pt-4 pb-2 profile-small-font">Profile Completion</div>
                            <div className="profile-completion profile-small-font">100%</div>
                            <div className='profile-completion-bg me-5 profile-small-font' 
                            style={{height: "5px"}}></div>
                        </div>
                    </div>
                    <div className="py-3 fw-bold profile-mid-font ">Your Stats</div>
                    <div className="p-3 bg-gray profile-small-font">
                        <div>Total Loans Taken: 2</div>
                        <div>Closed Loans: 1 </div>
                        <div>Total Businesses Added: 5</div>
                    </div>
                </Col>
                <Col  xs={12} md={6} className="">
                <div className='mb-3 user-name-font user-profile-font fw-bold'>Business Profile</div>
                    <div className='profile-section-two'>
                        <div className="ps-3 scroll-bar">
                            <Card className='mb-2 border-0 me-3'>
                                <Card.Body>
                                    <div className='d-flex justify-content-between'>
                                        <div className="pt-1 profile-mid-font fw-bold">Lyd & Ste Ltd</div>
                                        <Button variant="primary">Edit</Button>
                                    </div>
                                    <div className="profile-small-font">2, Favour Street, Osapa, Lagos</div>
                                    <div className="py-1 profile-small-font">lydia@lyd&ste.com</div>
                                    <div className="profile-small-font">+234 803 222 4567</div>
                                </Card.Body>
                            </Card>
                            <Card className='mb-2 border-0 me-3'>
                                <Card.Body>
                                    <div className='d-flex justify-content-between'>
                                        <div className="pt-1 profile-mid-font fw-bold">Space Ltd</div>
                                        <Button variant="primary">Edit</Button>
                                    </div>
                                    <div className="profile-small-font">2, Favour Street, Osapa, Lagos</div>
                                    <div className="py-1 profile-small-font">info@pace.com</div>
                                    <div className="profile-small-font">+234 803 222 4567</div>
                                </Card.Body>
                            </Card>
                            <Card className='mb-2 border-0 me-3'>
                                <Card.Body>
                                    <div className='d-flex justify-content-between'>
                                        <div className="pt-1 profile-mid-font fw-bold">APPEX Inc</div>
                                        <Button variant="primary">Edit</Button>
                                    </div>
                                    <div className="profile-small-font">2, Favour Street, Osapa, Lagos</div>
                                    <div className="py-1 profile-small-font">info@lappexinc.com</div>
                                    <div className="profile-small-font">+234 803 222 4567</div>
                                </Card.Body>
                            </Card>
                            <Card className='mb-2 border-0 me-3'>
                                <Card.Body>
                                    <div className='d-flex justify-content-between'>
                                        <div className="pt-1 profile-mid-font fw-bold">Green Pharmacy</div>
                                        <Button variant="primary">Edit</Button>
                                    </div>
                                    <div className="profile-small-font">2, Favour Street, Osapa, Lagos</div>
                                    <div className="py-1 profile-small-font">info@greenpharmacy.com</div>
                                    <div className="profile-small-font">+234 803 222 4567</div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Button className=' '>Add a business</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default UserProfileContent