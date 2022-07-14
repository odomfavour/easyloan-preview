import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Stack, Image, Card, Accordion } from "react-bootstrap";

import PageWrapper from "../layouts/page_wrapper/PageWrapper";
import { LoanCalculator, Buttons } from "../components/index";

import heroImg from "../assets/hero_img.svg";
import UBA from "../assets/uba_logo.svg";
import opay from "../assets/opay.svg";
import access from "../assets/access_bank.svg";
import paypal from "../assets/paypal_logo.svg";
import phone from "../assets/phone.svg";
import googlePlay from "../assets/google_play.svg";
import appStore from "../assets/app_store.svg";
import reg from "../assets/register.svg";
import apply from "../assets/apply.svg";
import getOffers from "../assets/get_offers.svg";
import getProduct from "../assets/get_product.svg";
import uploadIcon from "../assets/upload.svg";



const LandingPage = () => {
	const handleBtnClick = () => {};

	return (
		<PageWrapper>
			<Container>
				<Row className="py-5">
					<Col>
						<Stack>
							<p>
								Let’s unlock unlimited business opportunities{" "}
								<b style={{ color: "var(--purple)" }}>with</b> you
							</p>
							<h1 className="heading-font" style={{ fontSize: "3rem" }}>
								Fastest Way to Get Access to Business Loans
							</h1>
							<p>
								Request for product loans, get approved and receive offers with flexible repayment
								options to get your business to the next level.
							</p>
							<Link to="/register">
								<Buttons variant="purple" size="md" className="w-25 mb-3 heading-font" type="button">
									Apply for Loan
								</Buttons>
							</Link>
						</Stack>
					</Col>
					<Col>
						<Image src={heroImg} alt="hero image" />
					</Col>
				</Row>
			</Container>

			<Stack className="bg-gray pt-5">
				<h1 className="heading-font text-center" style={{ lineHeight: "3rem" }}>
					Loan Calculator
				</h1>
				<LoanCalculator bgColor="bg-light-gray" />
			</Stack>

			<Container>
				<Row className="py-5">
					<Col className="text-center">
						<Stack gap={4}>
							<div>
								<p>Taking a business loan can be easy and quick!</p>
								<h2 className="heading-font">How It Works</h2>
							</div>
							<p className="px-5 mx-5">
								Need to get your goods for your business but don’t have the capital? Need a quick,
								flexible and efficient way to get products at affordable rates for resale? In 5 easy
								steps, you can get your products delivered to you.
							</p>
							<Container>
								<Row xs={1} md={3} className="g-5 justify-content-center">
									<Col>
										<Card
											className="align-items-center text-center justify-content-center pt-3 px-2"
											style={{ width: "18rem" }}>
											<Card.Img variant="top" src={reg} alt="icon" style={{ width: "2.5rem" }} />
											<Card.Body>
												<Card.Title style={{ fontWeight: "bold" }}>Register</Card.Title>
												<Card.Text>Register with EazyLoan to get started.</Card.Text>
											</Card.Body>
										</Card>
									</Col>
									<Col>
										<Card
											className="align-items-center text-center pt-4 px-2 pb-3"
											style={{ width: "18rem" }}>
											<Card.Img variant="top" src={apply} alt="icon" style={{ width: "2.5rem" }} />
											<Card.Body>
												<Card.Title style={{ fontWeight: "bold" }}>Apply for Loan</Card.Title>
												<Card.Text>Fill the loan application form</Card.Text>
											</Card.Body>
										</Card>
									</Col>
									<Col>
										<Card
											className="align-items-center text-center pt-3 px-2"
											style={{ width: "18rem" }}>
											<Card.Img
												variant="top"
												src={uploadIcon}
												alt="icon"
												style={{ width: "2.5rem" }}
											/>
											<Card.Body>
												<Card.Title style={{ fontWeight: "bold" }}>Upload Documents</Card.Title>
												<Card.Text>Upload your business documents for approval</Card.Text>
											</Card.Body>
										</Card>
									</Col>
									<Col>
										<Card
											className="align-items-center text-center pt-3 px-2"
											style={{ width: "18rem" }}>
											<Card.Img
												variant="top"
												src={getOffers}
												alt="icon"
												style={{ width: "2.5rem" }}
											/>
											<Card.Body>
												<Card.Title style={{ fontWeight: "bold" }}>Get Offers</Card.Title>
												<Card.Text>Recieve offers to pick from and accept the terms.</Card.Text>
											</Card.Body>
										</Card>
									</Col>
									<Col>
										<Card
											className="align-items-center justify-content-center text-center pt-3 px-2"
											style={{ width: "18rem" }}>
											<Card.Img
												variant="top"
												src={getProduct}
												alt="icon"
												style={{ width: "2.5rem" }}
											/>
											<Card.Body>
												<Card.Title style={{ fontWeight: "bold" }}>Get Product</Card.Title>
												<Card.Text>Get your products delivered to you.</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								</Row>
							</Container>
						</Stack>
					</Col>
				</Row>
			</Container>

			<Stack className="bg-gray py-5">
				<Container>
					<Row>
						<Col className="text-center ">
							<Row className="heading-font ">
								<Col>Our Financial Partners</Col>
							</Row>
							<Row className="align-items-center my-4">
								<Col>
									<Image src={UBA} alt="UBA Group logo" />
								</Col>
								<Col>
									<Image src={opay} alt="Opay logo" />
								</Col>
								<Col>
									<Image src={access} alt="Access Bank logo" />
								</Col>
								<Col>
									<Image src={paypal} alt="Paypal logo" />
								</Col>
							</Row>
							<Buttons
								variant="outline-purple"
								size="md"
								className="w-25 mb-3 heading-font"
								onClick={handleBtnClick}
								type="button">
								See all our Financial Partners
							</Buttons>
						</Col>
					</Row>
				</Container>
			</Stack>

			<Container>
				<Row className="align-items-center justify-content-center py-5">
					<Col className="d-flex justify-content-center">
						<Image src={phone} alt="hero image" />
					</Col>
					<Col>
						<Stack gap={3}>
							<h2 className="heading-font">
								Download the EazyLoan App, See more interesting features
							</h2>
							<p>
								Join over 300 thousand business owners who are using the EazyLoan app to get
								business loans.
							</p>
							<Stack direction="horizontal" gap={3}>
								<a href="">
									<Image src={googlePlay} alt="Download From Google Play"></Image>
								</a>
								<a href="">
									<Image src={appStore} alt="Download From App Store"></Image>
								</a>
							</Stack>
						</Stack>
					</Col>
				</Row>
				<Row className="py-5">
					<Col>
						<Stack gap={5}>
							<h2 className="heading-font text-center">Frequently Asked Questions</h2>
							<Accordion defaultActiveKey="0" flush>
								<Accordion.Item eventKey="0">
									<Accordion.Header>How do I apply for a loan?</Accordion.Header>
									<Accordion.Body>
										You can apply for loans in 5 easy steps, register with Eazyloan, fill an
										application form, upload your business documents, get approved to receive loan
										offers, and get your pproducts delivered to you. Check our loan calculator to
										view our rates and register to get started.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Can I get multiple loans?</Accordion.Header>
									<Accordion.Body>Yes, you can apply for multiple loans.</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>
										Will I be able to get a loan on behalf of someone?
									</Accordion.Header>
									<Accordion.Body>
										No, you cannot apply for a loan on behalf of someone.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>
										What are the minimum requirements to be eligible for a loan?
									</Accordion.Header>
									<Accordion.Body>
										You must be at least 18 years old and have a valid ID.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
							<Link to="/faqs" className="align-self-center">
								<Buttons type="button" variant="outline-purple">
									View more
								</Buttons>
							</Link>
						</Stack>
					</Col>
				</Row>
			</Container>
		</PageWrapper>
	);
};

export default LandingPage;
