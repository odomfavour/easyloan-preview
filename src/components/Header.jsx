import React from "react";
// import { Buttons } from "./index";
import { Container } from "react-bootstrap";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.png";
import dropdown from "../assets/dropdown.png";
import search from "../assets/search.png";
import './Header.css'

import styled from "styled-components";
// import icon from "../assets/icons.png";
import { useLocation } from "react-router-dom";
const Header = () => {
	let location = useLocation();
	// eslint-disable-next-line no-unused-vars
	let links = ["/register", "/verifyEmail", "/login", "/forgotPassword"];
	return (
		<Container
			className={`${location.pathname === "/" ? "py-4 heading-font " : "py-2 heading-font"}`}>
			<Div>
				<div className="logo">
					<img src={logo} alt="" />
				</div>

				{(location.pathname === "/" || location.pathname === "/about") && (
					<>
						<div className="main-links">
							<img src={hamburger} alt="" className="hamburger" />

							<div className="links">
								<Link to="/" className="me-4">Home </Link>
								<Link to="/about" className="me-4">About Us </Link>
								<Link to="/how" className="me-4">How it works </Link>
								<Link to="/loan-calculator" className="me-4">Loan Calculator</Link>
								<Link to="/help" className="drop-down me-4">
									Help <img src={dropdown} alt="" />
								</Link>

								<span>
									<img src={search} alt="" />
								</span>
							</div>
						</div>

						<div className="btns">
							<Link to="/register" className="register btn btn-primary">Register</Link>
							<Link to="/login" className="login btn">Login</Link>
						</div>
					</>
				)}
			</Div>
		</Container>
	);
};

const Div = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 0.5rem;
	gap: 1rem;
	align-items: center;
	.links,
	.btns {
		display: none;
	}

	@media (min-width: 768px) {
		.hamburger {
			display: none;
		}

		.drop-down {
		}

		.links,
		.btns {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 1rem;
			a {
				color: #000;

				font-family: "Gilmer Regular";
				font-style: normal;
				font-weight: 400;
				font-size: 16px;
				line-height: 24px;
				/* identical to box height, or 150% */

				letter-spacing: 0.015em;

				/* Text color/600 */

				color: #151313;
			}
		}
		.logo {
			width: 10%;
		}
		.register {
			background: #ae2bff;
			padding: 0.4rem 1rem;
			color: #fff !important;
			border: 1px solid #ae2bff;
		}
		.login {
			background: #fff;
			color: #ae2bff !important;
			border: 1px solid #ae2bff;
			padding: 0.4rem 1rem;
		}
	}
`;
export default Header;

	/* <Stack direction="horizontal" gap={3}>
	<Buttons variant="purple" className="w-75">
		Register
	</Buttons>
	<Buttons variant="outline-secondary" className="w-75">
		Login
	</Buttons>
</Stack>; */

