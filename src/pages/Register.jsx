/* eslint eqeqeq: 0 */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { Container, Col, Row, Image, Stack, Form, InputGroup } from "react-bootstrap";
import axios from "axios";
import PageWrapperV2 from "../layouts/no_footer_layout/PageWrapperV2";
import { Buttons } from "../components/index";
import SuccessModal from "../components/successModal.jsx/SuccessModal";

import googleIcon from "../assets/icons_google.svg";
import reg from "../assets/Illust/illust_Register.svg";
import NG from "../assets/twemoji_flag-nigeria.svg";
import successScreen from "../assets/successScreen.svg";

const Register = () => {
	const [toggleModal, setToggleModal] = useState(false);
	const [iterator, setIterator] = useState(false);

	const setSuccessModal = () => {
		setToggleModal(true);
		setIterator(!iterator);
	};

	// let ans = true;
	const [form, setForm] = useState({
		name: "",
		phoneNo: "",
		email: "",
		password: "",
		confirmPassword: "",
		rememberMe: false,
		refCode: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [disabled, setDisabled] = useState(true);

	const navigate = useNavigate();

	const navigateToLogin = () => {
		navigate("/login");
	};
	const navigateToHome = () => {
		navigate("/");
	};

	const handleFormFocus = () => {
		setDisabled(false);
	};

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	// const loginWithGoogle = async () => {
	// 	window.location.href = "http://localhost:3000/user/auth/google";

	// 	// try {
	// 	// 	// const response = await axios("https://eazyloan-backend.herokuapp.com/user/auth/google");
	// 	// 	// const response = await axios("https://eazyloan-backend.herokuapp.com/user/auth/google");
	// 	// 	// console.log(response);
	// 	// 	//clear state and controlled inputs
	// 	// } catch (err) {
	// 	// 	console.log(err);
	// 	// }
	// };

	const registerWithGoogle = (e) => {
		e.preventDefault();
		signInWithPopup(auth, provider)
			.then((res) => {
				console.log(res);
				navigate("/login");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleChange = (e) => {
		let value = e.target.value;

		setForm({
			...form,
			[e.target.name]: value,
		});
	};

	const handleCheck = (e) => {
		let target = e.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		setForm({ ...form, [e.target.name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log("clicked", form);

		const data = {
			name: form.name,
			phone: form.phoneNo,
			email: form.email,
			password: form.password,
			confirmPassword: form.confirmPassword,
			rememberMe: form.rememberMe,
			refCode: form.refCode,
		};

		const baseURL = "https://eazyloan-backend.herokuapp.com";

		const REGISTER_URL = "/user/register";
		let res = await axios.post(`${baseURL}${REGISTER_URL}`, data);

		console.log(data);
		localStorage.setItem("register", JSON.stringify(res.data));

		if (res.status == "200") {
			setSuccessModal();

			// return <Navigate to="/dashboard" replace={true} />;
		}

		// let final = ((result) => {
		// 	console.log(result.data);
		// 	if (result.data.Status == "Invalid") console.log("Invalid User");
		// 	else navigate("/dashboard");
		// });
	};

	return (
		<>
			<style type="text/css">
				{`
          .img-wrap{
            height: 85vh;
            position: sticky;
            top: 5rem;
          }
          @media (max-width: 991.98px){
            .img-wrap{
              height: initial;
              position: static;
              top: initial;
            }
          }
          @media (max-width: 575.98px){
            body{
              font-size: 14px;
            }
            .heading{
              font-size: 24px;
            }
            .form{
              background-color: #fdfdfd;
            }

          }
        `}
			</style>
			<PageWrapperV2>
				<Container>
					<Row className="align-items-center justify-content-between px-md-5 pb-4 flex-column flex-lg-row ">
						<Row className="d-lg-none py-5">
							<Col>
								<div>
									<h1 className="fw-bold my-0 mb-2">Register</h1>
									<p className="m-0" style={{ color: "#3A0E55" }}>
										Create an account to get started
									</p>
								</div>
							</Col>
						</Row>
						<Col xs={9} lg={5} className="d-lg-flex align-self-lg-start img-wrap">
							<Image
								src={reg}
								alt="lady registering"
								className="w-100 mb-5 align-self-lg-center "></Image>
						</Col>
						<Col lg={5}>
							<Stack gap={5}>
								<div className="d-none d-lg-block">
									<h1 className="heading-font my-0">Register</h1>
									<p className="m-0" style={{ color: "#B1B0B0" }}>
										Create an account to get started
									</p>
								</div>
								<Form
									className=" px-4 pt-3 pb-4 bg-gray form"
									onSubmit={handleSubmit}
									onFocus={handleFormFocus}>
									<Stack gap={5}>
										<Stack gap={4}>
											<Form.Group controlId="name">
												<Form.Label>Full Name</Form.Label>
												<Form.Control
													type="text"
													name="name"
													value={form.name}
													onChange={handleChange}
													placeholder="Enter your fullname"
													required
												/>
											</Form.Group>

											<Form.Group controlId="phoneNo">
												<Form.Label>Phone Number</Form.Label>
												<InputGroup className="phone-input">
													<InputGroup.Text>
														<img src={NG} alt="Nigerian flag" className=""></img>
													</InputGroup.Text>
													<Form.Control
														type="tel"
														name="phoneNo"
														value={form.phoneNo}
														onChange={handleChange}
														placeholder="+234"
														required
													/>
												</InputGroup>
											</Form.Group>

											<Form.Group controlId="email">
												<Form.Label>Email</Form.Label>
												<Form.Control
													type="email"
													name="email"
													value={form.email}
													onChange={handleChange}
													placeholder="Enter email address"
													required
												/>
											</Form.Group>

											<Form.Group controlId="password">
												<Form.Label>Password</Form.Label>
												<InputGroup className="pwd-toggle ">
													<Form.Control
														type={showPassword ? "text" : "password"}
														name="password"
														value={form.password}
														onChange={handleChange}
														placeholder="Enter password"
														className="border-end-0"
														required
													/>
													<InputGroup.Text
														className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} `}
														onClick={handleClickShowPassword}></InputGroup.Text>
												</InputGroup>
												<Form.Text style={{ color: "#636262" }}>
													Password must contain atleast 8 characters
												</Form.Text>
											</Form.Group>

											<Stack gap={2}>
												<Form.Group controlId="confirmPassword">
													<Form.Label>Confirm Password</Form.Label>
													<InputGroup className="pwd-toggle ">
														<Form.Control
															type={showPassword ? "text" : "password"}
															name="confirmPassword"
															value={form.confirmPassword}
															onChange={handleChange}
															placeholder="Confirm password"
															className="border-end-0"
															required
														/>
														<InputGroup.Text
															className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} `}
															onClick={handleClickShowPassword}></InputGroup.Text>
													</InputGroup>
												</Form.Group>
												<Form.Check
													type="checkbox"
													id="rememberMe"
													name="rememberMe"
													onChange={handleCheck}
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
												variant="purple"
												size="md"
												className="w-100"
												type="submit"
												disabled={disabled}>
												Register
											</Buttons>
											<p className="text-center m-0" style={{ color: "#121010" }}>
												Or
											</p>
											<Buttons
												variant="gray"
												size="md"
												// onClick={}
												className="w-100 d-flex align-items-center justify-content-center "
												type="button">
												<img src={googleIcon} alt="Google icon" />
												<span
													className="ms-2"
													style={{ color: "#B1B0B0" }}
													onClick={registerWithGoogle}>
													Register with Google
												</span>
											</Buttons>
										</Stack>
									</Stack>
								</Form>
								<Stack className="text-center">
									<p style={{ color: "#8A8989" }}>
										Already have an account?{" "}
										<Link to="/login" style={{ fontWeight: "bold", color: "#121010" }}>
											Log in
										</Link>
									</p>
									<p style={{ color: "#8A8989" }}>
										By continuing, you agree to our{" "}
										<Link to="" style={{ fontWeight: "bold", color: "#8A8989" }}>
											Terms and Conditions
										</Link>{" "}
										of service and{" "}
										<Link to="" style={{ fontWeight: "bold", color: "#8A8989" }}>
											Privacy Policy
										</Link>
									</p>
									<i></i>
								</Stack>
							</Stack>
						</Col>
					</Row>
					<SuccessModal
						btnsetter={toggleModal}
						iterateBtn={iterator}
						imgs={successScreen}
						btnOne={[true, "Login"]}
						btnTwo={[true, "Go Home"]}
						message="Registration Successful"
						btnOneClick={navigateToLogin}
						btnTwoClick={navigateToHome}
					/>
				</Container>
			</PageWrapperV2>
		</>
	);
};

export default Register;
