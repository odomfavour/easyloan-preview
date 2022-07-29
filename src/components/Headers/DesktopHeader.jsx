import React from "react";
import logo from "../../assets/Logo.svg";
import back from "../../assets/back.svg";
import { Desktop, Button, Cspan } from "./header.styles";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const DesktopHeader = () => {
	const navigate = useNavigate();

	let location = useLocation();
	return (
		<div>
			{location.pathname === "/" ||
			location.pathname === "/about" ||
			location.pathname === "/how" ||
			location.pathname === "/loan-calculator" ? (
				<Desktop>
					<img src={logo} alt="" onClick={() => navigate("/")} />

					<div>
						<NavLink to="/" activeclassname="active">
							Home
						</NavLink>
						<NavLink to="/about" activeclassname="active">
							About Us
						</NavLink>
						<NavLink to="/how" activeclassname="active">
							How it works
						</NavLink>
						<NavLink to="/loan-calculator" activeclassname="active">
							Loan Calculator
						</NavLink>
						{/* <NavLink to="/help" activeclassname="active"> */}
							<Nav>
								<NavDropdown id="nav-dropdown-dark-example" title="Help" menuVariant="light">
									<NavDropdown.Item as={Link} to={"/faqs"}>FAQ</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/contact"}>Contact</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Privacy Policy </NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Term of Use </NavDropdown.Item>
								</NavDropdown>
							</Nav>
						{/* </NavLink> */}
					</div>
					<section>
						<Button primary onClick={() => navigate("/register")}>
							Register
						</Button>
						<Button onClick={() => navigate("/login")}>Login</Button>
					</section>
				</Desktop>
			) : (
				<Desktop>
					<img src={logo} alt="" onClick={() => navigate("/")} />

					<Cspan onClick={() => navigate(-1)}>
						<img src={back} alt="" />
						Go Back
					</Cspan>
				</Desktop>
			)}
		</div>
	);
};

export default DesktopHeader;
