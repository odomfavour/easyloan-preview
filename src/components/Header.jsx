import React, { useState } from "react";
// import { Buttons } from "./index";

import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Container } from "react-bootstrap";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.png";
import dropdown from "../assets/dropdown.png";
import search from "../assets/search.png";
import logos from "../assets/logo.png";
import { List, X } from "react-bootstrap-icons";

import "./Header.css";

import styled from "styled-components";
// import icon from "../assets/icons.png";
import { useLocation } from "react-router-dom";
const Header = () => {
	const [nav, setNav] = useState(true);
	let location = useLocation();
	// eslint-disable-next-line no-unused-vars
	return (
		<Container
			className={`${
				location.pathname === "/" ? "py-4  heading-font flow" : "py-4 heading-font flow"
			}`}>
			<Div>
				<div className="logo">
					<Link to="/" className="head-flex">
						<img src={logo} alt="" width="50px" />

						{/* <ListCheck className="" /> */}
						{/* <img src={hamburger} alt="" className="hamburger" /> */}
						<List size={30} className="hamburger" onClick={() => setNav(!nav)} />
					</Link>
				</div>

				{(location.pathname === "/" || location.pathname === "/about") && (
					<>
						<div className="main-links">
							<div className="links">
								<Link to="/" className="me-4">
									Home{" "}
								</Link>
								<Link to="/about" className="me-4">
									About Us{" "}
								</Link>
								<Link to="/how" className="me-4">
									How it works{" "}
								</Link>
								<Link to="/loan-calculator" className="me-4">
									Loan Calculator
								</Link>
								<NavDropdown title="help" menuVariant="light" className="drop-down me-4 px-1">
									<NavDropdown.Item href="#action/3.1">FAQ</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Privacy Policy </NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Term of Use </NavDropdown.Item>
								</NavDropdown>

								<span>
									<img src={search} alt="" />
								</span>
							</div>

							<div className={nav ? "mobile-nav hide" : " mobile-nav"}>
								<div className="mobile-flex">
									<img src={logos} alt="" width="50px" />

									<X size={34} className="cross" onClick={() => setNav(!nav)} />
								</div>

								<section className="mobile-links">
									<Link to="/">Home</Link>
									<Link to="/">About Us</Link>
									<Link to="/">How it works</Link>
									<Link to="/">Loan Calculator</Link>
									<Link to="/">Help</Link>
								</section>
								<section className="mobile-btns">
									<Button className="mobile-register">Register</Button>
									<Button className="mobile-login">Login</Button>
								</section>
							</div>
						</div>

						<div className="btns">
							<Link to="/register" className="register btn btn-primary">
								Register
							</Link>
							<Link to="/login" className="login btn">
								Login
							</Link>
						</div>
					</>
				)}
			</Div>
		</Container>
	);
};

const Div = styled.div`
	.main-links {
		overflow-x: hidden;
	}
	display: flex;
	justify-content: space-between;
	padding: 0 0.7rem;
	gap: 1.1rem;

	align-items: center;
	.links,
	.btns {
		display: none;
	}
	.head-flex {
		display: flex;
		padding: 1rem;
		width: 60vh;
		justify-content: space-between;
		align-items: center;
	}
	.hamburger {
		color: #ae2bff;
	}
	.mobile-nav {
		position: absolute;
		width: 100vw;
		height: 100vh;
		z-index: 2;
		background-color: #ae2bff;
		top: 0;
		bottom: 0;
		left: 0%;
		transition: 300ms all;

		right: 0;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		.mobile-links {
			display: flex;
			flex-direction: column;
			height: 40vh;
			justify-content: space-between;
			margin-top: 2rem;
			margin-left: 2rem;
			a {
				font-family: "Gilmer Bold";
				font-style: normal;
				font-weight: 700;
				font-size: 16px;
				line-height: 24px;
				/* identical to box height, or 150% */

				letter-spacing: 0.015em;

				color: #ffffff;

				/* Inside auto layout */

				flex: none;
				order: 0;
				flex-grow: 0;
			}
		}

		.cross {
			color: white;
		}

		.mobile-flex {
			display: flex;
			padding: 1rem;
			justify-content: space-between;
			align-items: center;
		}

		.mobile-btns {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			width: 90%;
			padding-left: 1rem;

			.mobile-register {
				font-family: "Gilmer Bold";
				font-style: normal;
				font-weight: 700;
				font-size: 16px;
				line-height: 24px;
				/* identical to box height, or 150% */

				letter-spacing: 0.015em;

				/* primary color/600 */

				color: #ae2bff;

				/* Inside auto layout */

				flex: none;
				order: 0;
				flex-grow: 0;

				background-color: white;
				border: 0;
			}
			.mobile-login {
				font-family: "Gilmer Bold";
				font-style: normal;
				font-weight: 700;
				font-size: 16px;
				line-height: 24px;

				/* identical to box height, or 150% */

				letter-spacing: 0.015em;

				color: #ffffff;
				background-color: #ae2bff;
				border: 1px solid white;
			}
		}
	}

	.hide {
		left: 100%;
		transition: 300ms all;
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
			width: 12%;
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
