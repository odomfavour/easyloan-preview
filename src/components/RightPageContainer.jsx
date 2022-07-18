import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function GridComplexExample() {
	return (
		<Form className="p-2">
			<Row className="mb-3">
				<Form.Group as={Col} controlId="formGridFirstName">
					<Form.Label>First name</Form.Label>
					<Form.Control type="text" placeholder="Enter first name" />
				</Form.Group>

				<Form.Group as={Col} controlId="formMiddleName">
					<Form.Label>Middle name</Form.Label>
					<Form.Control type="password" placeholder="Middle Name" />
				</Form.Group>
			</Row>
			<Row className="mb-3">
				<Form.Group as={Col} controlId="formGridLastName">
					<Form.Label>Last name</Form.Label>
					<Form.Control type="text" placeholder="Enter last name" />
				</Form.Group>

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
				<Button variant="primary" type="submit" className="w-100">
					Save Changes
				</Button>
			</Form.Group>
		</Form>
	);
}

export default GridComplexExample;
