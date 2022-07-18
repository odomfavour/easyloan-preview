import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../layouts/page_wrapper/PageWrapper";
import { Buttons } from "../components/index";

import { Container, Row, Col, Stack, Accordion } from "react-bootstrap";
const Faqs = () => {
	return (
		<>
			<style type="text/css">
				{`
          .title{
            font-size: 2.5rem;
          }

          .btn{
            width: 30%;
          }
          .btn a{
            color: #fdfdfd;
          }

          hr{
            color: var(--purple);
            background-color: var(--purple);
            height: 2px;
            width: 9em;
            // margin-top: 0;
          }

          .accordion-body{
            padding: 1rem 0;
          }
          .accordion-item {
            border: 0;
            background-color: #FDFDFD;
            margin: 1rem 0 2rem 0;
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
            font-size: 20px !important;
            color: #3A0E55;
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
            .title{
              font-size: 1.7rem;
            }

            hr{
              width: 10em;
            }

            .btn{
              width: 100%;
            }
          }

        `}
			</style>
			<PageWrapper>
				<Stack className="m-4 mx-lg-5 px-lg-5 pt-2">
					<Container className="m-0">
						<Row className="d-flex ">
							<Col className="w-5 p-0">
								<h1 className="heading fw-bold title">Frequently Asked Question</h1>
								<hr />
							</Col>
						</Row>
					</Container>
					<Accordion defaultActiveKey="0" flush>
						<Accordion.Item eventKey="0">
							<Accordion.Header>How do I apply for a loan?</Accordion.Header>
							<Accordion.Body>
								You can apply for loans in 5 easy steps, register with Eazyloan, fill an application
								form, upload your business documents, get approved to receive loan offers, and get
								your pproducts delivered to you. Check our loan calculator to view our rates and
								register to get started.
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
					<p className="text-center" style={{ color: "#B1B0B0" }}>
						Didn’t find what you were looking for?
					</p>
					<Buttons variant="purple" className="py-2 mb-3 align-self-center" type="button">
						<Link to="/contact">Contact Us</Link>
					</Buttons>
				</Stack>
			</PageWrapper>
		</>
	);
};

export default Faqs;
