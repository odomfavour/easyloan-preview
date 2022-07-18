import React from "react";
import { Col, Container, Form, Image, Row, Stack } from "react-bootstrap";

import PageWrapperV2 from "../layouts/no_footer_layout/PageWrapperV2";
import { Buttons } from "../components/index";

import img from "../assets/Illust/illust_verify_email.svg";

const VerifyEmail = () => {
	return (
		<>
			<style>
				{`
        .page-content {
          height: 80vh;
        }
          .resend-code{
            cursor: pointer;
          }
          .form{
            background-color: rgba(145, 36, 212, 0.03);
          }

          @media (max-width: 575.98px){
            .form{
              background-color: #fff;
            }
          }
        `}
			</style>
			<PageWrapperV2>
				<Container className="px-4 py-5 page-content">
					<Row className="justify-content-evenly h-100">
						<Col lg={4} className=" d-none d-lg-flex ">
							<Image src={img} alt="Confirmed" className="img-fluid" />
						</Col>
						<Col lg={4}>
							<Row className="mb-5">
								<Col>
									<h1 className="heading fw-bold">Verify your details</h1>
									<p className="text-muted">
										Please enter the verification code that has just been sent to your email
										address.
									</p>
								</Col>
							</Row>
							<Row className="flex-column flex-lg-row">
								<Col className="px-5 pb-5 pt-3 d-lg-none">
									<Image src={img} alt="Confirmed" className="img-fluid" />
								</Col>
								<Col className="">
									<Form className="form p-lg-4">
										<Stack gap={2} className="gap-lg-5">
											<p className="m-0 d-lg-none fw-bold">Verification Code</p>
											<Stack gap={3} direction="horizontal" className="px-lg-5 mx-lg-5 ">
												<Form.Group controlId="inputOne" className="w-100">
													<Form.Control type="text" name="inputOne" autoComplete="new-password" placeholder="Enter Verification Code" />
												</Form.Group>
												<Form.Group controlId="inputOne" className="d-none d-lg-block">
													<Form.Control type="text" name="inputOne" autoComplete="new-password" />
												</Form.Group>
												<Form.Group controlId="inputOne" className="d-none d-lg-block">
													<Form.Control type="text" name="inputTwo" autoComplete="new-password" />
												</Form.Group>
												<Form.Group controlId="inputOne" className="d-none d-lg-block">
													<Form.Control type="text" name="inputThree" autoComplete="new-password" />
												</Form.Group>
												<Form.Group controlId="inputOne" className="d-none d-lg-block">
													<Form.Control type="text" name="inputFour" autoComplete="new-password" />
												</Form.Group>
											</Stack>
											<Stack className="flex-column-reverse flex-lg-column gap-3">
												<Buttons variant="purple" size="md" className="w-100 py-2" type="button">
													Verify Email
												</Buttons>
												<Stack direction="horizontal" className="justify-content-between">
													<p className="text-muted">Didn’t receive a code?</p>
													<p className="resend-code fw-bold">Resend Code</p>
												</Stack>
											</Stack>
										</Stack>
									</Form>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</PageWrapperV2>
		</>
	);
};

export default VerifyEmail;
