import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDesktop } from "../pages/DesktopContext";
import styled, { css } from "styled-components";
function GridComplexExample({ page, setPage }) {
	const { isDesktop } = useDesktop();
	const handleSubmit = (e) => {
		e.preventDefault();
		setPage(page + 1);
	};
	return (
		<Form className="">
			<span>STEP 1 of 2</span>
			<div className="p-5" style={{ background: "rgba(145, 36, 212, 0.03)" }}>
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridFirstName">
						<Form.Label>Full name</Form.Label>
						<Form.Control type="text" placeholder="Enter first name" />
					</Form.Group>
				</Row>
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formPhoneNo">
						<Form.Label>Mobile number</Form.Label>
						<Form.Control type="number" placeholder="+234 |" />
					</Form.Group>
				</Row>

				<Form.Group className="mb-3" controlId="formGridAddress1">
					<Form.Label>Residential Address</Form.Label>
					<Form.Control placeholder="1234 Main St" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formGridAddress1">
					<Form.Label>Nearest Bus-stop</Form.Label>
					<Form.Control placeholder="1234 Main St" />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridCity" className="mb-3">
					<Form.Label>State of residence</Form.Label>
					<Form.Select defaultValue="Select state">
						<option>Select State</option>
						<option>Lagos</option>
						<option>Abuja</option>
						<option>Anambra</option>
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
					<Form.Select defaultValue="Select how did you heard about us">
						<option>Select how did you heard about us</option>
						<option>Lagos</option>
						<option>Abuja</option>
						<option>Anambra</option>
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
							onClick={handleSubmit}>
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
							onClick={handleSubmit}>
							Skip
						</Button>
					)}
				</Form.Group>
			</div>
		</Form>
	);
}

const Btn = styled.button`
	background: transparent;
	border-radius: 3px;
`;
export default GridComplexExample;
