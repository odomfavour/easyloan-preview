import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import insertImg from "../assets/insert-img.png";
import frame1 from "../assets/frame1.png";
// import frame2 from "../assets/frame2.png";
import { useDesktop } from "../pages/DesktopContext";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { AiOutlineSecurityScan } from "react-icons/ai";

const LeftPageContainer = ({ page, setPage }) => {
	const baseURL = "https://eazyloan-backend.herokuapp.com";

	const UPLOAD_IMG = "/upload/uploadImage";
	const UPLOAD_DOC = "/bus/busUpload";
	const { isDesktop } = useDesktop();

	const [show, setShow] = useState(false);

	const [img, setImg] = useState(insertImg);
	const [upload, setUpload] = useState();
	const [doc, setDoc] = useState();

	const onImageChange = (e) => {
		const [file] = e.target.files;
		const uploads = e.target.files[0];
		setImg(URL.createObjectURL(file));
		setUpload(uploads);
	};

	const onFileChange = (e) => {
		const file = e.target.files[0];
		setDoc(file);
		console.log(file);
	};
	useEffect(() => {
		console.log(img);
		console.log(doc);
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		setPage(page - 1);

		const formData = new FormData();
		formData.append("img", upload);
		try {
			const response = await axios({
				method: "post",
				url: `${baseURL}${UPLOAD_IMG}`,
				data: formData,
				headers: { "Content-Type": "multipart/form-data" },
			});
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	console.log(img);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const uploadImage = async (e) => {
		e.preventDefault();
		console.log(img);
		const formData = new FormData();
		formData.append("img", img);
		try {
			const response = await axios({
				method: "post",
				url: `${baseURL}${UPLOAD_IMG}`,
				data: formData,
				headers: { "Content-Type": "multipart/form-data" },
			});
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};
	const fileSubmit = async (e) => {
		e.preventDefault();

		handleClose();

		//other stuff

		const formData = new FormData();
		formData.append("selectedFile", doc);
		try {
			const response = await axios({
				method: "post",
				url: `${baseURL}${UPLOAD_DOC}`,
				data: formData,
				headers: { "Content-Type": "multipart/form-data" },
			});

			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<MainDiv>
			<Row className="mb-4">
				<Col>
					{isDesktop ? (
						<div className="file">
							<Image
								src={img || insertImg}
								alt=""
								className=" profile d-flex justify-content-center"
							/>

							<input type="file" onChange={onImageChange} />
						</div>
					) : (
						<div className="file">
							<Image
								src={img || insertImg}
								alt=""
								className="profile d-flex justify-content-center"
							/>
							<input type="file" onChange={onImageChange} />
						</div>
					)}
				</Col>
			</Row>
			<Row className="mb-3">
				<Col>
					{isDesktop && (
						<span onClick={uploadImage}>
							<Button className="w-75 d-flex justify-content-center profile">
								Upload Profile Image
							</Button>
						</span>
					)}
				</Col>
			</Row>{" "}
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
							<input type="file" onChange={onFileChange} />
						</Form.Group>

						<Button
							style={{
								background: "#E5E5E5",
								"border-radius": "8px",
								marginTop: "10px",
								border: "0",
								width: "100%",
							}}
							onClick={fileSubmit}>
							Upload
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</MainDiv>
	);
};

const MainDiv = styled.div`
	max-width: 95vw;
	.file {
		display: flex;
		flex-direction: column;
	}
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
const Image = styled.img`
	border-radius: 50%;
`;

export default LeftPageContainer;
