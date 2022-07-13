import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Stack, Form } from "react-bootstrap";

import PageWrapperV2 from "../layouts/no_footer_layout/PageWrapperV2";
import { Buttons } from "../components/index";

import googleIcon from "../assets/icons_google.svg";
import reg from "../assets/Illust/illust_Register.svg";

const Register = () => {
	const [form, setForm] = useState({
		name: "",
		phoneNo: "",
		email: "",
		password: "",
		confirmPassword: "",
		rememberMe: false,
		refCode: "",
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
				<Row className="align-items-center justify-content-between">
					<Col>
						<Image src={reg} alt="lady registering"></Image>
					</Col>
					<Col>
						<Stack gap={4}>
							<div>
								<h1 className="heading-font ">Register</h1>
								<p className="m-0">Create an account to get started</p>
							</div>
							<Form className="border rounded px-4 pt-3 pb-4 bg-gray">
								<Stack gap={5}>
									<Stack gap={3}>
										<Form.Group controlId="name">
											<Form.Label>Full Name</Form.Label>
											<Form.Control
												type="text"
												name="name"
												value={form.name}
												onChange={handleChange}
												placeholder="Enter your fullname"
											/>
										</Form.Group>

										<Form.Group controlId="phoneNo">
											<Form.Label>Phone Number</Form.Label>
											<Form.Control
												type="tel"
												name="phoneNo"
												value={form.phoneN}
												onChange={handleChange}
												placeholder="+234"
											/>
										</Form.Group>

										<Form.Group controlId="email">
											<Form.Label>Email</Form.Label>
											<Form.Control
												type="email"
												name="email"
												value={form.email}
												onChange={handleChange}
												placeholder="Enter email address"
											/>
										</Form.Group>

										<Form.Group controlId="password">
											<Form.Label>Password</Form.Label>
											<Form.Control
												type="password"
												name="password"
												value={form.password}
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
											<Form.Check
												type="checkbox"
												id="rememberMe"
												name="rememberMe"
												checked={form.rememberMe}
												label="Remember me"
											/>
										</Stack>

										<Form.Group controlId="refCode">
											<Form.Label>Referral Code (Optional)</Form.Label>
											<Form.Control
												type="text"
												name="refCode"
												value={form.refCode}
												onChange={handleChange}
												placeholder="Enter referral code"
											/>
										</Form.Group>
									</Stack>

									<Stack className="heading-font " gap={2}>
										<Buttons
											style="purple"
											size="md"
											className="w-100"
											onClick={handleBtnClick}
											type="submit">
											Register
										</Buttons>
										<p className="text-center m-0">Or</p>
										<Buttons
											style="secondary"
											size="md"
											className="w-100 d-flex align-items-center justify-content-center "
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
