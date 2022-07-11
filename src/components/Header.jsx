import React from "react";
import { Buttons } from "./index";
import { Container, Row, Col, Stack } from "react-bootstrap";
import logo from "../assets/EAZYLOAN.svg";
const Header = () => {
	return (
		<Container className="py-5 heading-font ">
			<Row className="d-flex align-items-center">
				<Col>
					<img src={logo} alt="" />
				</Col>
				<Col md={6}>
					<Stack direction="horizontal" gap={4}>
						<span>Home</span>
						<span>About Us</span>
						<span>How it works</span>
						<span>Loan Calculator</span>
						<span>Help</span>
					</Stack>
				</Col>

				<Col>
					<Stack direction="horizontal" gap={3}>
						<Buttons style="purple" className="w-75">
							Register
						</Buttons>
						<Buttons style="outline-secondary" className="w-75">
							Login
						</Buttons>
					</Stack>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
