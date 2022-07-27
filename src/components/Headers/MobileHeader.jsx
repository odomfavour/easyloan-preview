import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import hamburger from "../../assets/hamburg.svg";
import close from "../../assets/close.svg";
import logo2 from "../../assets/eazylogo.svg";
import { Mobile, NavMenu, Container, SecondButton } from "./header.styles";
import SplitButton from "react-bootstrap/SplitButton";
import Dropdown from "react-bootstrap/Dropdown";

const MobileHeader = () => {
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
	return (
		<>
			<Container color={`${mobile ? "white" : "#ae2bff"}`}>
				<Mobile className={mobile ? "ok" : "alter"}>
					{mobile ? <img src={logo} alt="" width={50} /> : <img src={logo2} alt="" width={50} />}

					{mobile ? (
						<img src={hamburger} alt="" width={30} onClick={handleClick} />
					) : (
						<img src={close} alt="" width={30} onClick={handleClick} />
					)}
				</Mobile>

				{!mobile && (
					<NavMenu>
						<div>Home</div>
						<div>About Us</div>
						<div>How it works</div>
						<div>Loan Calculator</div>
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
						<SecondButton primary>Register</SecondButton>
						<SecondButton>Login</SecondButton>
					</NavMenu>
				)}
			</Container>
		</>
	);
};

export default MobileHeader;
