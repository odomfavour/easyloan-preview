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
		<>
			<style type="text/css">
				{`
          body {
            background-color: #fdfdfd;
          }
          .txt-purple{
            color: var(--purple);
          }
          .txt-hiw{
            color: #070606;
          }
          .form-spacing .vstack{
            gap: 1rem;
          }
          .card{
            border: 0;
            box-shadow: 0px 4px 5px rgba(145, 36, 212, 0.03);
            width: 18rem;
            border-radius: 8px;
          }
          .card-img-top{
            width: 2.5rem;
          }
          .btn-md{
            width: 224px !important;
          }
          .btn{
            font-family: 'Acme', sans-serif;
          }
          .apply-btn a{
            color: #fdfdfd;
          }
          .hiw-btn a{
            color: var(--purple);
          }
          .heading{
            font-size: 3rem;
            line-height: 4.5rem;
          }
          .heading-2{
            font-size: 2.5rem;
            line-height: 3.75rem;
          }
          .hero-txt{
            font-size: 1.25rem;
          }

          // Accordion
          .accordion-body{
            padding: 1rem 0;
          }
          .accordion-item {
            border: 0;
            background-color: #FDFDFD;
            margin: 1rem 0;
          }
          .accordion-flush .accordion-collapse{
            margin: 1rem 0;
            background-color: #fff;
            border-radius: 8px;
          }
          .accordion-button{
            border: none;
            outline: 0;
            padding: 1.5rem 0;
          }
          .accordion-button, .accordion-button:not(.collapsed){
            color: #151313;
            font-weight: 700;
            background-color: #FDFDFD;
            box-shadow: 0px 4px 5px rgba(145, 36, 212, 0.03);
          }
          .accordion-button:not(.collapsed)::after{
            background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.59 0.589996L6 5.17L1.41 0.589996L0 2L6 8L12 2L10.59 0.589996Z' fill='%23323232'/%3E%3C/svg%3E");
          }
          .accordion-button::after{
            background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.59 0.589996L6 5.17L1.41 0.589996L0 2L6 8L12 2L10.59 0.589996Z' fill='%23323232'/%3E%3C/svg%3E");
            background-size: 1rem;
          }

          @media (max-width: 575.98px) {

            body {
              background-color: #fff !important;
            }
            .heading, .heading-2{
              font-size: 1.7rem;
              line-height: 2.6rem;
            }
            .btn{
              font-family: 'Gilmer', sans-serif;
              font-weight: 700;
            }
            .hero-txt{
              font-size: 1rem;
            }
          }
        `}
			</style>
			<PageWrapper>
				<Container>
					<Row className="pt-md-5 pb-5 px-4 px-md-0 flex-column-reverse flex-md-row gap-md-5">
						<Col>
							<Stack gap={3}>
								<p className="mb-3 mb-md-0">
									Let’s unlock unlimited business opportunities{" "}
									<i className="inter-font txt-purple">with</i> you
								</p>
								<h1 className="fw-bold heading">Fastest Way to Get Access to Business Loans</h1>
								<p className="text-justify hero-txt">
									Request for product loans, get approved and receive offers with flexible repayment
									options to get your business to the next level.
								</p>
								<Buttons
									variant="purple"
									className="w-50 py-2 mb-3 apply-btn btn-md "
									type="button">
									<Link to="/register">Apply for Loan</Link>
								</Buttons>
							</Stack>
						</Col>
						<Col className="p-4 p-md-0">
							<Image src={heroImg} alt="hero image" className="img-fluid" />
						</Col>
					</Row>
				</Container>

				<Stack className="bg-gray pt-3 pt-md-5 pb-5 px-5 px-md-0">
					<h1 className="fw-bold heading text-center">Loan Calculator</h1>
					<LoanCalculator styles="bg-light-gray px-4 rounded mb-5 mt-4 form-spacing" />
				</Stack>

				<Container>
					<Row className="py-5 px-3 px-md-0">
						<Col className="text-center">
							<Stack className=" gap-4 gap-md-5">
								<div>
									<p className="txt-hiw mb-0">Taking a business loan can be easy and quick!</p>
									<h2 className="fw-bold heading">How It Works</h2>
								</div>
								<p className="px-md-5 mx-md-5">
									Need to get your goods for your business but don’t have the capital? Need a quick,
									flexible and efficient way to get products at affordable rates for resale? In 5
									easy steps, you can get your products delivered to you.
								</p>
								<Container>
									<Row xs={1} md={3} className="g-5 justify-content-center">
										<Col className="d-flex justify-content-center ">
											<Card className="align-items-center text-center justify-content-center pt-3 px-2">
												<Card.Img variant="top" src={reg} alt="icon" />
												<Card.Body>
													<Card.Title className="fw-bold">Register</Card.Title>
													<Card.Text>Register with EazyLoan to get started.</Card.Text>
												</Card.Body>
											</Card>
										</Col>
										<Col className="d-flex justify-content-center ">
											<Card className="align-items-center text-center pt-4 px-2 pb-3">
												<Card.Img variant="top" src={apply} alt="icon" />
												<Card.Body>
													<Card.Title className="fw-bold">Apply for Loan</Card.Title>
													<Card.Text>Fill the loan application form</Card.Text>
												</Card.Body>
											</Card>
										</Col>
										<Col className="d-flex justify-content-center ">
											<Card className="align-items-center text-center pt-3 px-2">
												<Card.Img variant="top" src={uploadIcon} alt="icon" />
												<Card.Body>
													<Card.Title className="fw-bold">Upload Documents</Card.Title>
													<Card.Text>Upload your business documents for approval</Card.Text>
												</Card.Body>
											</Card>
										</Col>
										<Col className="d-flex justify-content-center ">
											<Card className="align-items-center text-center pt-3 px-2">
												<Card.Img variant="top" src={getOffers} alt="icon" />
												<Card.Body>
													<Card.Title className="fw-bold">Get Offers</Card.Title>
													<Card.Text>Recieve offers to pick from and accept the terms.</Card.Text>
												</Card.Body>
											</Card>
										</Col>
										<Col className="d-flex justify-content-center ">
											<Card className="align-items-center justify-content-center text-center pt-3 px-2">
												<Card.Img variant="top" src={getProduct} alt="icon" />
												<Card.Body>
													<Card.Title className="fw-bold">Get Product</Card.Title>
													<Card.Text>With your loan disbursed, you can get your product</Card.Text>
												</Card.Body>
											</Card>
										</Col>
									</Row>
								</Container>
								<Buttons
									type="button"
									variant="outline-purple"
									className="fw-bold px-4 py-2 hiw-btn align-self-center">
									<Link to="/">Read more</Link>
								</Buttons>
							</Stack>
						</Col>
					</Row>
				</Container>

				<Stack className="bg-gray pt-5 pb-4 pb-md-5 px-3 px-md-0">
					<Container>
						<Row className="px-3 px-md-0">
							<Col className="text-center ">
								<Row className="fw-bold heading ">
									<Col>Our Financial Partners</Col>
								</Row>
								<Row className="align-items-center my-4">
									<Col xs={6} md={3}>
										<Image src={UBA} alt="UBA Group logo" className="img-fluid p-x-2 py-3 p-md-0" />
									</Col>
									<Col xs={6} md={3}>
										<Image src={opay} alt="Opay logo" className="img-fluid px-2 py-3 p-md-0" />
									</Col>
									<Col xs={6} md={3}>
										<Image
											src={access}
											alt="Access Bank logo"
											className="img-fluid p-x-2 py-3 p-md-0"
										/>
									</Col>
									<Col xs={6} md={3}>
										<Image src={paypal} alt="Paypal logo" className="img-fluid p-x-2 py-3 p-md-0" />
									</Col>
								</Row>
								<Buttons
									variant="outline-purple"
									size="md"
									className="w-md-25 mb-3 px-4 py-2 fw-bold"
									onClick={handleBtnClick}
									type="button">
									See all our Financial Partners
								</Buttons>
							</Col>
						</Row>
					</Container>
				</Stack>

				<Container>
					<Row className="flex-column-reverse flex-md-row align-items-center justify-content-center py-5 px-3 gap-5">
						<Stack direction="horizontal" gap={4} className="d-md-none justify-content-center">
							<a href="">
								<Image src={googlePlay} alt="Download From Google Play"></Image>
							</a>
							<a href="">
								<Image src={appStore} alt="Download From App Store"></Image>
							</a>
						</Stack>
						<Col xs={6} md={4} className="d-flex justify-content-center pt-3 pb-4 pt-md-0">
							<Image src={phone} alt="hero image" className="img-fluid" />
						</Col>
						<Col md={6}>
							<Stack gap={3}>
								<h2 className="fw-bold heading-2">
									Download the EazyLoan App, See more interesting features
								</h2>
								<p>
									Join over 300 thousand business owners who are using the EazyLoan app to get
									business loans.
								</p>
								<Stack direction="horizontal" gap={3} className="d-none d-md-flex">
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
				</Container>

				<Container className="bg-light-gray ">
					<Row className="py-5 px-3 px-md-0">
						<Col>
							<Stack gap={5}>
								<h2 className="heading fw-bold text-center">Frequently Asked Questions</h2>
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
										<Accordion.Body></Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="2">
										<Accordion.Header>
											Will I be able to get a loan on behalf of someone?
										</Accordion.Header>
										<Accordion.Body></Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="3">
										<Accordion.Header>
											What are the minimum requirements to be eligible for a loan?
										</Accordion.Header>
										<Accordion.Body></Accordion.Body>
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
		</>
	);
};

export default LandingPage;
