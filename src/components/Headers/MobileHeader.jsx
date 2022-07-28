import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import hamburger from "../../assets/hamburg.svg";
import close from "../../assets/close.svg";
import logo2 from "../../assets/eazylogo.svg";
import { Mobile, NavMenu, Container, SecondButton } from "./header.styles";
import SplitButton from "react-bootstrap/SplitButton";
import Dropdown from "react-bootstrap/Dropdown";

const MobileHeader = () => {
	const navigate = useNavigate();
	const [mobile, setMobile] = useState(true);

	const handleClick = () => {
		const body = document.getElementById("body");
		setMobile(!mobile);

		if (mobile) {
			body.style.overflowY = "hidden";
			body.style.overflowWrap = "hidden";
			body.style.blockSize = "100%";
			body.style.height = "100vh";
		} else {
			body.style.overflowY = "auto";
			body.style.overflowWrap = "auto";
			body.style.blockSize = "100%";
			body.style.height = "auto";
		}
	};

	const loan = () => {
		setMobile(false);
		navigate("/loan-calculator");
	};
	const how = () => {
		setMobile(false);
		navigate("/how");
	};
	const register = () => {
		setMobile(false);
		navigate("/register");
	};
	const home = () => {
		navigate("/");
	};
	const home2 = () => {
		setMobile(false);
		navigate("/");
	};
	const about = () => {
		setMobile(false);
		navigate("/about");
	};
	const login = () => {
		setMobile(false);
		navigate("/login");
	};
	return (
		<>
			<Container color={`${mobile ? "white" : "#ae2bff"}`}>
				<Mobile className={mobile ? "ok" : "alter"}>
					{mobile ? (
						<img src={logo} alt="" width={50} onClick={home} />
					) : (
						<img src={logo2} alt="" width={50} onClick={home} />
					)}

					{mobile ? (
						<img src={hamburger} alt="" width={30} onClick={handleClick} />
					) : (
						<img src={close} alt="" width={30} onClick={handleClick} />
					)}
				</Mobile>

				{!mobile && (
					<NavMenu>
						<div onClick={home2}>Home</div>
						<div onClick={about}>About Us</div>
						<div onClick={how}>How it works</div>
						<div onClick={loan}>Loan Calculator</div>
						<div style={{ background: "transparent", color: "white" }}>
							{" "}
							<SplitButton
								id={"dropdown-button-drop-end"}
								drop={"end"}
								variant=""
								title={"Help"}
								style={{ background: "transparent", color: "white" }}>
								<Dropdown.Item eventKey="1">Action</Dropdown.Item>
								<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
								<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
								<Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
							</SplitButton>
						</div>
						<SecondButton primary onClick={register}>
							Register
						</SecondButton>
						<SecondButton onClick={login}>Login</SecondButton>
					</NavMenu>
				)}
			</Container>
		</>
	);
};

export default MobileHeader;
