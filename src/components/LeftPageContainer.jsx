import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import insertImg from "../assets/insert-img.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import mobile from "../assets/mobile-pic.png";
import { useDesktop } from "../pages/DesktopContext";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const LeftPageContainer = ({ page, setPage }) => {
	const { isDesktop } = useDesktop();

	const [show, setShow] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setPage(page - 1);
	};

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<MainDiv>
			<Row className="mb-4">
				<Col>
					{isDesktop ? (
						<img src={insertImg} alt="" className=" profile d-flex justify-content-center" />
					) : (
						<img src={mobile} alt="" className="profile d-flex justify-content-center" />
					)}
				</Col>
			</Row>
			<Row className="mb-3">
				<Col>
					{isDesktop && (
						<span>
							<Button className="w-75 d-flex justify-content-center profile">
								Upload Profile Image
							</Button>
						</span>
					)}
				</Col>
			</Row>{" "}
			<Form.Label>Upload Valid ID</Form.Label>
			<Row className="mb-3">
				<Col>
					<span onClick={handleShow}>
						<img src={frame1} alt="" className="w-75 d-flex justify-content-center profile" />
					</span>
				</Col>
			</Row>
			<Row className="mb-3">
				{!isDesktop && (
					<Col>
						<Button
							variant=""
							className="w-75 d-flex justify-content-center profile btn"
							onClick={handleSubmit}>
							save
						</Button>
					</Col>
				)}
			</Row>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Card Type</Form.Label>
							<Form.Control type="text" placeholder="name@example.com" autoFocus />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Card ID number</Form.Label>
							<Form.Control type="text" placeholder="787383837282" autoFocus />
						</Form.Group>

						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<img src={frame1} alt="" className="w-100" />
						</Form.Group>

						<Button
							style={{
								background: "#E5E5E5",
								"border-radius": "8px",
								marginTop: "10px",
								border: "0",
								width: "100%",
							}}
							onClick={handleClose}>
							Upload
						</Button>
					</Form>
				</Modal.Body>
				{/* <Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer> */}
			</Modal>
		</MainDiv>
	);
};

const MainDiv = styled.div`
	max-width: 95vw;

	.profile {
		width: 90%;
		margin-inline: auto;
		font-family: "Acme";
		font-style: normal;
		font-weight: 400 !important;
		font-size: 16px;
		line-height: 24px;
		/* identical to box height, or 150% */

		letter-spacing: 0.015em;

		/* primary color/700 */

		color: #ae2bff !important;
		background: #fdfdfd !important;
	}
	.btn {
		background: #ae2bff;
		border-radius: 8px;
		font-family: "Gilmer Bold";
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 24px;
		margin-top: 10px;
		/* identical to box height, or 150% */

		letter-spacing: 0.015em;

		/* Background color */

		color: #fdfdfd;
	}
`;

export default LeftPageContainer;
