import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Stack, Form } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai'

import PageWrapperV2 from "../layouts/no_footer_layout/PageWrapperV2";
import { Buttons } from "../components/index";

import googleIcon from "../assets/icons_google.svg";
import loginIllustration from "../assets/Login.svg";

const Login = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
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

    // toggle password visibility
    const [passwordType, setPasswordType] = useState("password");
    // eslint-disable-next-line no-unused-vars
    const [passwordInput, setPasswordInput] = useState("");
    // eslint-disable-next-line no-unused-vars
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =(e)=>{
        e.preventDefault()
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }

	return (
		<PageWrapperV2>
			<Container>
				<Row className="align-items-center justify-content-between">
					<Col>
						<Image src={loginIllustration} alt="lady registering"></Image>
					</Col>
					<Col>
						<Stack gap={4}>
							<div>
								<h1 className="heading-font ">Log In</h1>
								<p className="m-0">Log in to your account</p>
							</div>
							<Form className="border rounded px-4 pt-3 pb-4 bg-gray">
								<Stack gap={5}>
									<Stack gap={3}>

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
                                            <div className="d-flex position-relative">
                                                <Form.Control type={passwordType}
                                                    onChange={handleChange} 
                                                    value={form.password}
                                                    name="password" 
                                                    placeholder="Enter your password" >
                                                </Form.Control>
                                                <div className="input-group-btn">
                                                    <button className="btn position-absolute" onClick={togglePassword} style={{'right':'0px'}}>
                                                    { passwordType==="password"? <AiIcons.AiOutlineEye/> :<AiIcons.AiOutlineEyeInvisible/> }
                                                    </button>
                                                </div>
                                            </div>
										</Form.Group>
                                       
										<Form.Group controlId="checkbox" className='d-flex align-items-center'>
											<Form.Control
												type="checkbox"
												name="checkbox"
												onChange={handleChange}
                                                className="form-check-input" 
                                                style={{'height':'25px'}}
                                                />
                                                <Form.Label className='mb-0 ms-3'>Remember Me</Form.Label>
                                            {/* <div class="form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                            </div> */}
										</Form.Group>

                                       


									
									</Stack>

									<Stack className="heading-font " gap={2}>
										<Buttons
											variant="purple"
											size="md"
											className="w-100"
											onClick={handleBtnClick}
											type="submit">
											Log In
										</Buttons>
										<p className="text-center m-0">Or</p>
										<Buttons
											variant="secondary"
											size="md"
											className="w-100 d-flex align-items-center justify-content-center "
											onClick={handleBtnClick}
											type="submit">
											<img src={googleIcon} alt="Google icon" />
											<span className="ms-2">Log In with Google</span>
										</Buttons>
									</Stack>
								</Stack>
							</Form>
							<Stack>
								<p>
									Already have an account?
									<Link to="" style={{ fontWeight: "bold", color: "#000" }}>
										Register
									</Link>
								</p>
							</Stack>
						</Stack>
					</Col>
				</Row>
			</Container>
		</PageWrapperV2>
	);
};

export default Login;
