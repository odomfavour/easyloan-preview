import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { useDesktop } from "../pages/DesktopContext";
import { states, socials } from "../utils";
function GridComplexExample({ page, setPage }) {
	const [user, setUser] = useState({
		name: "",
		phone: "",
		street: "",
		busStop: "",
		state: "",
		social: "",
	});

	useEffect(() => {
		const pDetails = JSON.parse(localStorage.getItem("pUser"));

		if (pDetails) {
			setUser(pDetails);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("pUser", JSON.stringify(user));
	}, [user]);
	const { isDesktop } = useDesktop();
	const navigate = useNavigate();

  const navigateToDashboard = (e) => {
    e.preventDefault();
    navigate("/dashboard/user");
  }

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isDesktop) {
			setPage(page + 1);
		}

		try {
			const baseURL = "https://eazyloan-backend.herokuapp.com";

			const BUSINESS_URL = "/bus";

			const data = user;

			axios.post(`${baseURL}${BUSINESS_URL}`, data).then((result) => {
				if (result.data) {
					localStorage.setItem("userdata", JSON.stringify(result.data));

					navigate("/dashboard/user");
					setUser("");
				}
			});
		} catch (error) {
			console.log(error);
		}
	};

	// useEffect(() => {
	// 	setUser(JSON.parse(localStorage.getItem("user")));
	// }, [user]);

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<Form className="">
			<span>STEP 1 of 2</span>
			<div className="p-5" style={{ background: "rgba(145, 36, 212, 0.03)" }}>
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridFirstName">
						<Form.Label>Full name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter first name"
							value={user.name}
							name="name"
							onChange={handleChange}
						/>
					</Form.Group>
				</Row>
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formPhoneNo">
						<Form.Label>Mobile number</Form.Label>
						<Form.Control
							type="number"
							placeholder="+234 |"
							value={user.phone}
							name="phone"
							onChange={handleChange}
						/>
					</Form.Group>
				</Row>

				<Form.Group className="mb-3" controlId="formGridAddress1">
					<Form.Label>Residential Address</Form.Label>
					<Form.Control
						placeholder="1234 Main St"
						value={user.street}
						name="street"
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formGridAddress1">
					<Form.Label>Nearest Bus-stop</Form.Label>
					<Form.Control
						placeholder="1234 Main St"
						value={user.busStop}
						name="busStop"
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridCity" className="mb-3">
					<Form.Label>State of residence</Form.Label>
					<Form.Select
						defaultValue="Select state"
						name="state"
						value={user.state}
						onChange={handleChange}>
						<option>Select State</option>
						{states.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</Form.Select>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridCity" className="mb-3">
					<Form.Label>LGA of residence</Form.Label>
					<Form.Select defaultValue="Select LGA">
						<option>Select LGA</option>
						<option>Lagos</option>
						<option>Abuja</option>
						<option>Anambra</option>
					</Form.Select>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridCity" className="mb-3">
					<Form.Label>How did you hear about us?</Form.Label>
					<Form.Select
						defaultValue="Select how did you heard about us"
						name="social"
						value={user.social}
						onChange={handleChange}>
						<option>Select how did you heard about us</option>
						{socials.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</Form.Select>
				</Form.Group>
				<Form.Group as={Col} controlId="formGridButton" className="mb-3">
					<Button
						variant="primary"
						type="submit"
						className="w-100 mb-3"
						style={{ backgroundColor: "#AE2BFF", border: "0px " }}
						onClick={handleSubmit}>
						Save Changes
					</Button>
					{isDesktop ? (
						<Button
							variant="primary"
							type="submit"
							className="w-100"
							style={{
								backgroundColor: "#D0D0D0",
								border: "0",
								borderRadius: "8px ",
								color: "white",
							}}
							onClick={navigateToDashboard}>
							Skip
						</Button>
					) : (
						<Button
							variant="primary"
							type="submit"
							className="w-100"
							style={{
								backgroundColor: " #FDFDFD",
								border: "0.5px solid #9124D5",
								borderRadius: "8px ",
								color: "#9124D5",

								/* primary color/700 */
							}}
							onClick={navigateToDashboard}>
							Skip
						</Button>
					)}
				</Form.Group>
			</div>
		</Form>
	);
}

export default GridComplexExample;
