import React, {useEffect, useState} from 'react';
import { Button, Row, Col, Card } from "react-bootstrap";
import ProfileProgressBar from "../components/ProfileProgressBar"
import { Link } from "react-router-dom";
// import img from "../assets/img.jpg";

const UserProfileContent = () => {
    const [count, setCount] = useState(0);
    const [isBusinessAdded, setIsBusinessAdded] = useState(false);
    const [businessInfo, setBusinessInfo] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("user")));
	}, []);

    const getBusinessInfo = () => {
        const data = JSON.parse(localStorage.getItem("businessInfo"));
        const businessData = Object.values(data);
        setBusinessInfo(businessData);
    }
  
    useEffect(() => {
        getBusinessInfo();

        if (businessInfo) {
        setIsBusinessAdded(true);
        setCount(count + 1);
        }
    }, []);
  return (
    <div>
        <div className='profile-pading mb-3'>
            <Row className="ms-0 me-0">
                <Col xs={12} md={6} className="">
                    <div className='user-name-font user-profile-font fw-bold mb-2'>Personal Profile</div>
                    <div className='bg-gray p-3 profile-section-one'>
                        <div className="d-flex justify-content-between">
                            <img src={user.photoURL} alt="img" className="profile-img "/>
                            <div className=''>
                                <Link to="/detail">
                                    <Button >Edit Profile</Button>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="pt-3 profile-mid-font fw-bold">{user.name}</div>
                            <div className="py-2 profile-small-font" >Business Owner</div>
                            <div className="profile-small-font">2, Favour Street, Osapa, Lagos</div>
                            <div className="py-2 profile-small-font">{user.email}</div>
                            <div className="profile-small-font">{user.phone}</div>
                            <div className="pt-4 pb-2 profile-small-font">Profile Completion</div>
                            <div className="profile-completion profile-small-font">100%</div>
                            <div className='profile-completion-bg me-5 profile-small-font' 
                            style={{height: "5px"}}></div>
                            <div className='mt-3'><ProfileProgressBar /></div>
                        </div>
                    </div>
                    <div className="py-3 fw-bold profile-mid-font ">Your Stats</div>
                    <div className="p-3 bg-gray profile-small-font">
                        <div>Total Loans Taken: 2</div>
                        <div>Closed Loans: 1 </div>
                        {isBusinessAdded && (
                        <div>Total Businesses Added: {count}</div>
                        )}
                    </div>
                </Col>
                <Col  xs={12} md={6} className="">
                <div className='mb-3 user-name-font user-profile-font fw-bold biz-profile-pad'>Business Profile</div>
                    <div className='profile-section-two'>
                        <div className="ps-3 scroll-bar">
                        {isBusinessAdded && ( 
                        <>
                        {businessInfo.map((business, index) => {
                                    return(
                            <Card className='mb-2 border-0 me-3' key={index}>
                                <Card.Body>
                                    <div className='d-flex justify-content-between'>
                                        <div className="pt-1 profile-mid-font fw-bold">{business.businessName}</div>
                                        <Button variant="primary">Edit</Button>
                                    </div>
                                    <div className="profile-small-font">{business.street}</div>
                                    <div className="py-1 profile-small-font">{business.businessEmail}</div>
                                    <div className="profile-small-font">{business.phone}</div>
                                </Card.Body>
                            </Card>
                            )
                            })}
                            </>
                            )}
                        </div>
                        <div>
                            <Link to="/add-business">
                                <Button className=' '>Add a business</Button>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default UserProfileContent