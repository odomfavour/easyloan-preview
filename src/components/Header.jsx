import React from "react";
import { Buttons } from "./index";
import { Container, Row, Col, Stack } from "react-bootstrap";
import logo from "../assets/Logo.svg";
// import icon from "../assets/icons.png";
import { useLocation } from "react-router-dom";
const Header = ({ other = "other" }) => {
	let location = useLocation();
	return (
		<Container
			className={`${location.pathname === "/" ? "py-5 heading-font" : "py-2 heading-font"}`}>
			<Row className="d-flex align-items-center">
				<Col>
					<img src={logo} alt="" />
				</Col>

				<Col>
					<Stack direction="horizontal" gap={3}>
						<Buttons variant="purple" className="w-75">
							Register
						</Buttons>
						<Buttons variant="outline-secondary" className="w-75">
							Login
						</Buttons>
					</Stack>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
