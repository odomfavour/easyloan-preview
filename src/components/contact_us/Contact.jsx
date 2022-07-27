import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Stack, Form, InputGroup, Image } from "react-bootstrap";
import { Buttons } from "../index";
import map from "../../assets/map.svg";
import { ContactContext } from "../../pages/ContactContext";

const Contact = () => {
	const { isDashboard } = useContext(ContactContext);
	const [disabled, setDisabled] = useState(true);
	const [message, setMessage] = useState({
		name: "",
		email: "",
		text: "",
	});

	const handleFormFocus = () => {
		setDisabled(false);
	};

	const handleChange = (e) => {
		let value = e.target.value;

		setMessage({
			...message,
			[e.target.name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("message: ", message);
	};

	return (
		<>
			<style type="text/css">
				{`
          .contact .heading{
            font-size: 1.4rem;
            line-height: 3rem;
          }
          .contact .rounded{
            border-radius: 8px !important;
          }
          .contact .input-group-text {
            background-color: #fff;
            color: #D0D0D0;
            border-left: none;
            border-top-right-radius: 8px !important;
            border-bottom-right-radius: 8px !important;
            padding-right: 1.5rem;
          }
          .contact .textarea{
            height: 8rem;
          }
          .contact .mail  {
            border-right: none;
            padding-left: 1.5rem;
            padding-top: .5rem;
            padding-bottom: .5rem;
            border-top-left-radius: 8px !important;
            border-bottom-left-radius: 8px !important;
          }
          .input-spacing  {
            padding: .5rem 1.5rem;
          }
          .contact .form-control:focus {
            border-color: #D0D0D0  !important;
          }

          @media (max-width: 991.98px) {
            .contact .textarea{
              height: 8rem;
            }
            .contact #info{
              background-color: #fff;
            }
            .contact #h2{
              text-align: center;
            }
            .btn-wrap{
              width: 100%;
            }
          }

					@media (max-width: 575.98px){
            .contact .textarea{
              height: 8rem;
            }
            .contact #h2 {
              font-size: 1rem;
              line-height: 1.5rem;
              margin-bottom: 0;
              margin-top: 0.5rem;
              text-align: left;
            }
            .contact #info{
              background-color: #fff;
            }
					}
				`}
			</style>

			<Container className="m-0 p-0 contact">
				<Row
					className={`gap-2 flex-column-reverse ${
						isDashboard ? "flex-lg-row-reverse" : "flex-lg-row"
					}`}>
					<Col
						lg={isDashboard ? 4 : 5}
						className="d-flex flex-column bg-light-gray rounded px-lg-4 pb-4 mb-lg-5 pt-lg-3 gap-2 gap-lg-4 "
						id="info">
						<Row>
							<h2 className="heading fw-bold mb-md-0" id="h2">
								Contact Info
							</h2>
						</Row>
						<Row className="gap-3 flex-md-row flex-lg-column justify-content-md-center gap-md-0 gap-lg-3">
							<Stack
								gap={3}
								direction="horizontal"
								className="col-md-6 col-lg-12 justify-content-md-end justify-content-lg-start ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="#E4B8FF"
									className="bi bi-telephone-fill"
									viewBox="0 0 16 16">
									<path
										fillRule="evenodd"
										d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
									/>
								</svg>
								<p className="m-0">+234-80000000 &nbsp; +234-80000000</p>
							</Stack>
							<Stack gap={3} direction="horizontal" className="col-md-5 col-lg-12">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="#E4B8FF"
									className="bi bi-envelope-fill"
									viewBox="0 0 16 16">
									<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
								</svg>
								<p className="m-0">info@easyloan.com</p>
							</Stack>
							<Stack gap={3} direction="horizontal" className="d-md-none d-lg-flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="#E4B8FF"
									className="bi bi-geo-alt-fill"
									viewBox="0 0 16 16">
									<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
								</svg>
								<p className="m-0">Lagos, Nigeria</p>
							</Stack>
							<Stack
								gap={isDashboard ? 5 : 3}
								direction="horizontal"
								className="d-md-none d-lg-flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="#AE2BFF"
									className="bi bi-facebook"
									viewBox="0 0 16 16">
									<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="#AE2BFF"
									className="bi bi-twitter"
									viewBox="0 0 16 16">
									<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="#AE2BFF"
									className="bi bi-linkedin"
									viewBox="0 0 16 16">
									<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
								</svg>
							</Stack>
						</Row>
						{!isDashboard && (
							<Row className="d-md-none d-lg-flex  px-3">
								<p style={{ color: "var(--purple)" }} className="m-0 p-0 fw-bold">
									Find us
								</p>
								<Image src={map} alt="map" className="img-fluid rounded p-0" />
							</Row>
						)}
						{isDashboard && (
							<Row>
								<Col className=" d-md-flex justify-content-center align-items-center d-lg-block mt-4 mt-lg-0 btn-wrap">
									<Buttons variant="purple" className="px-5 fw-bold " as={Link} to={"/faqs"}>
										See FAQ
									</Buttons>
								</Col>
							</Row>
						)}
					</Col>

					<Col className="d-flex pe-lg-0 mb-lg-5">
						<Form
							className=" px-lg-4 pt-lg-3 pb-md-4 bg-light-gray form rounded w-100"
							onSubmit={handleSubmit}
							onFocus={handleFormFocus}>
							<Stack gap={3}>
								<h2 className="heading fw-bold">Send a Message</h2>
								<Form.Group controlId="name">
									<Form.Label className="fw-bold">Full Name</Form.Label>
									<Form.Control
										type="text"
										name="name"
										value={message.name}
										onChange={handleChange}
										placeholder="Enter your full name"
										className="input-spacing rounded"
										required
									/>
								</Form.Group>

								<Form.Group controlId="email">
									<Form.Label className="fw-bold ">Email</Form.Label>
									<InputGroup className="">
										<Form.Control
											type="email"
											name="email"
											value={message.email}
											onChange={handleChange}
											placeholder="Enter email address"
											className="mail"
											required
										/>
										<InputGroup.Text className="bi bi-envelope"></InputGroup.Text>
									</InputGroup>
								</Form.Group>

								<Form.Group controlId="text">
									<Form.Label className="fw-bold">How Can We Help?</Form.Label>
									<textarea
										className="form-control input-spacing rounded textarea"
										name="text"
										value={message.text}
										onChange={handleChange}
										placeholder="Enter Your Message"
										style={{ resize: "none" }}
									/>
								</Form.Group>

								<Buttons
									variant="purple"
									size="md"
									className="w-100 mt-3 py-2"
									type="submit"
									disabled={disabled}>
									Submit
								</Buttons>
							</Stack>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Contact;
