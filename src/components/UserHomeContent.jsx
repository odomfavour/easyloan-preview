import React, { useState, useEffect } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/context";
import Alert from 'react-bootstrap/Alert';

import calc from "../assets/calculator.svg";
import stak from "../assets/view_loan.svg";
import profile from "../assets/edit_profile.svg";
import pen from "../assets/pen.svg";

const UserHomeContent = () => {
	const { user } = useAppContext();
	const [show, setShow] = useState(false);
	const [isBusinessAdded, setIsBusinessAdded] = useState(false);
	
	const [isLoanApplied, setIsLoanApplied] = useState(false);

	useEffect(() => {
		if (user.business) {
			setIsBusinessAdded(true);
		}
	}, [user.business]);

	useEffect(() => {
		if (user.loanApplication) {
			setIsLoanApplied(true);
		}
	}, [user.loanApplication]);

	if (show) {
		return (
		  <Alert variant="danger" onClose={() => setShow(false)} dismissible className="mx-5">
			<Alert.Heading className="text-center">Oh snap! Add a Buisness to Apply!</Alert.Heading>
		  </Alert>
		);
	  }
	return (
		<div>
			<>
			{!isBusinessAdded && (
			<div className="my-5 bg-gray py-3 px-3 user-dash-color user-dashboard-content d-flex justify-content-between">
				<div>
					<h2 className="user-name-font">Hello {user.name},</h2>
				</div>
					<Button className="user-btn-bg shadow-none"
					onClick = {() => setShow(true)}>Apply for Loan</Button>
			</div>
			)}
			{isBusinessAdded && (
			<div className="my-5 bg-gray py-3 px-3 user-dash-color user-dashboard-loan d-flex justify-content-between">
				<div>
					<h2 className="user-name-font">Hello {user.name},</h2>
				</div>
				<Link to="/application">
					<Button className="user-btn-loan shadow-none">Apply for Loan</Button>
				</Link>
			</div>
			)}
			</>
			<Row className=" px-3 width-100">
				<Col sm={12} md={6} className="mb-3 overflow-width">
					{ isLoanApplied && (
						<>
						<div className='bg-gray px-5 pt-5 user-dashboard-content6' style={{height: "300px"}}>
						<Row>
							<Col sm={6}><p className='fw-bold user-small-font user-dash-color'>Your Loan</p></Col>
							<Col sm={6}>
								<Button className='user-btn-bgd2 shadow-none border-0'>Awaiting Approval</Button>
							</Col>
						</Row>
						<Row className='py-4'>
							<div className='user-loan-status' 
							style={{height: "80px", width: "493px"}}>
								<div className='mt-3 mb-1 fw-bold'>LPO ID: {user.loanApplication[user.loanApplication.length - 1].orderID}</div>
								<div>Date applied: 29/07/22</div>
							</div>
						</Row>
					</div>
							</>
					) }
					{ !isLoanApplied && (
					<div className="bg-gray px-5 pt-5 user-dashboard-content2" style={{ height: "300px" }}>
						<Row>
							<Col sm={6}>
								<p className="fw-bold user-small-font user-dash-color">Your Loan</p>
							</Col>
							<Col sm={6}>
								<Button className="user-btn-bg2 shadow-none border-0">None</Button>
							</Col>
						</Row>
						<Row className="py-4">
							<p>You have not taken a loan. Take a loan now to enjoy the experience.</p>
						</Row>
					</div>
					 )} 
				</Col>
				<Col sm={12} md={6} className=" overflow-width">
					<div className="bg-gray px-4 pt-5 user-dashboard-content3" style={{ height: "300px" }}>
						<p className="fw-bold user-dash-color user-small-font ">Your Business</p>
						{isBusinessAdded && (
							<>
								<div className="mb-3 d-flex justify-content-between user-business">
									<div className="p-3">
										<div className="user-biz-font2 mb-1">{user.business[user.business.length - 1].businessName}</div>
										<div className="user-biz-font">Credit Score: 0</div>
									</div>
									<Link to="/profile">
										<button className="shadow-none border-1 rounded my-4 me-3 user-btn-bg7 px-3">
											View
										</button>
									</Link>
								</div>
							</>
						)}
						{!isBusinessAdded && (
							<p className="py-3">
								You have not added any business. Add a business now to continue.
							</p>
						)}
						<div>
							<Link to="/add-business">
								<Button className="shadow-none user-btn-bg2 ">Add a business</Button>
							</Link>
						</div>
					</div>
				</Col>
			</Row>
			<div className="py-4">
				<p className="user-dash-color user-small-font fw-bold text-center">Quick Links</p>
			</div>
			<div className="userdash-card">
				<Row xs={1} md={3} lg={5} className=" gap-2 justify-content-center width-100">
					<Col>
						<Card
							className="text-decoration-none text-black user-card align-items-center text-center justify-content-center border-0 card-padding"
							style={{ width: "12rem", height: "12rem" }}
							as={Link}
							to={"/loan-calculator"}>
							<Card.Img variant="top" src={calc} alt="icon" style={{ width: "2.5rem" }} />
							<Card.Body>
								<Card.Text>Loan Calculator</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card
							className="user-card align-items-center text-center border-0 card-padding"
							style={{ width: "12rem", height: "12rem" }}>
							<Card.Img variant="top" src={stak} alt="icon" style={{ width: "2.5rem" }} />
							<Card.Body>
								<Card.Text>View all Loans</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card
							className="user-card align-items-center text-center border-0 card-padding"
							style={{ width: "12rem", height: "12rem" }}
							as={Link} to={"/profile"}>
							<Card.Img variant="top" src={profile} alt="icon" style={{ width: "2.5rem" }} />
							<Card.Body>
								<Card.Text className="text-dark">Edit Profile</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card
							className="user-card align-items-center text-center border-0 card-padding"
							style={{ width: "12rem", height: "12rem" }}>
							<Card.Img variant="top" src={pen} alt="icon" style={{ width: "2.5rem" }} />
							<Card.Body>
								<Card.Text>Contact Us</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
			<div className="bg-gray user-dashboard-content5 mt-5 px-4 pt-4">
				<div className="d-flex justify-content-between">
					<p className="user-small-font user-dash-color">Loan History</p>
					<Button className="user-btn-bg5 shadow-none " style={{ width: "120px" }}>
						View All
					</Button>
				</div>
				<div className="mt-5">
					<p>You have not taken a loan. Take a loan now to enjoy the experience.</p>
				</div>
			</div>
		</div>
	);
};

export default UserHomeContent;
