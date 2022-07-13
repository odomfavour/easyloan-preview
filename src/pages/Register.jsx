import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Stack, Form } from "react-bootstrap";

import PageWrapperV2 from "../layouts/no_footer_layout/PageWrapperV2";
import { Buttons } from "../components/index";

import googleIcon from "../assets/icons_google.svg";

const Register = () => {
	const [form, setForm] = useState({
		userEmail: "",
		userPassword: "",
	});

	const handleChange = (e) => {
		let value = e.target.value;

		setForm({
			...form,
			[e.target.name]: value,
		});
	};

	const handleBtnClick = (e) => {
		e.preventDefault();
		console.log("clicked");
	};

	return (
		<PageWrapperV2>
			<Container>
				<Row>
					<Col>
						<Image src="" alt="woman using an app"></Image>
					</Col>
					<Col>
						<Stack>
							<h1 className="heading-font ">Register</h1>
							<p>Create an account to get started</p>
							<Form className="border rounded px-4 py-4">
								<Stack gap={5}>
									<Stack gap={3}>
										<Form.Group controlId="userEmail">
											<Form.Label>Email</Form.Label>
											<Form.Control
												type="email"
												name="userEmail"
												value={form.userEmail}
												onChange={handleChange}
												placeholder="Enter email address"
											/>
										</Form.Group>

										<Form.Group controlId="userPassword">
											<Form.Label>Password</Form.Label>
											<Form.Control
												type="password"
												name="userPassword"
												value={form.userPassword}
												onChange={handleChange}
												placeholder="Enter password"
											/>
											<Form.Text>Password must contain atleast 8 characters</Form.Text>
										</Form.Group>

										<Stack gap={2}>
											<Form.Group controlId="confirmPassword">
												<Form.Label>Confirm Password</Form.Label>
												<Form.Control
													type="password"
													name="confirmPassword"
													value={form.confirmPassword}
													onChange={handleChange}
													placeholder="Confirm password"
												/>
											</Form.Group>
											<Form.Check type="checkbox" id="default-checkbox" label="Remember me" />
										</Stack>
									</Stack>

									<Stack className="heading-font">
										<Buttons
											style="purple"
											size="md"
											className="w-100 mb-3"
											onClick={handleBtnClick}
											type="submit">
											Register
										</Buttons>
										<p className="text-center">Or</p>
										<Buttons
											style="secondary"
											size="md"
											className="w-100 mb-3 d-flex align-items-center justify-content-center "
											onClick={handleBtnClick}
											type="submit">
											<img src={googleIcon} alt="Google icon" />
											<span className="ms-2">Register with Google</span>
										</Buttons>
									</Stack>
								</Stack>
							</Form>
							<Stack>
								<p>
									Already have an account?
									<Link to="" style={{ fontWeight: "bold", color: "#000" }}>
										Log in
									</Link>
								</p>
								<p>
									By continuing, you agree to our{" "}
									<Link to="" style={{ fontWeight: "bold" }}>
										Terms and Conditions
									</Link>{" "}
									of service and{" "}
									<Link to="" style={{ fontWeight: "bold" }}>
										Privacy Policy
									</Link>
									.
								</p>
							</Stack>
						</Stack>
					</Col>
				</Row>
			</Container>
		</PageWrapperV2>
	);
};

export default Register;
