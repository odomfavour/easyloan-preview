import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, InputGroup, Form, Stack } from "react-bootstrap";

import PageWrapper from "../../layouts/add_ bussiness_page_wrapper/PageWrapper";
import { Buttons } from "../../components";
import SuccessModal from "../../components/successModal.jsx/SuccessModal";

import successScreen from "../../assets/successScreen.svg";
import icon1 from "../../assets/Vector_info.svg";

const UploadDocs = () => {
	const [disabled, setDisabled] = useState(true);
	const navigate = useNavigate();

	const [cacDocuments, setCacDocuments] = useState({
		cacForm2: "",
		cacForm7: "",
		cacCertificate: "",
	});

	const [toggleModal, setToggleModal] = useState(false);
	const [iterator, setIterator] = useState(false);

	const setSuccessModal = () => {
		setToggleModal(true);
		setIterator(!iterator);
	};

	const navigateToDashboard = () => {
		navigate("/dashboard/user");
	};

	const handleFormFocus = () => {
		setDisabled(false);
	};

	const getBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
			reader.readAsDataURL(file);
		});
	};

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		getBase64(file).then((base64) => {
			setCacDocuments({
				...cacDocuments,
				[e.target.name]: base64,
			});
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage["CacDocumentsBase64"] = JSON.stringify(cacDocuments);
		setSuccessModal();
	};

	const message = ["Great Job!", <br />, "Your business has been successfully added"];

	return (
		<>
			<style type="text/css">
				{`
          .upload-docs .input-group-text{
            border: 0;
          }
          .upload-docs .form-control{
            background-color: var(--gray-light);
            padding: 2rem;
          }

        `}
			</style>
			<PageWrapper
				title="Upload your Documents"
				desc="Upload your business documents to continue"
				page="2">
				<form onSubmit={handleSubmit} onFocus={handleFormFocus}>
					<Container className="upload-docs">
						<Row>
							<Col xs={12} lg={6} className="my-3">
								<Form.Group controlId="cacForm2">
									<InputGroup className="justify-content-between  ">
										<Form.Label className="fw-bold ">CAC Form 2 / BN 1*</Form.Label>
										<InputGroup.Text>
											<img src={icon1} alt="icon" className=""></img>
										</InputGroup.Text>
									</InputGroup>
									<Form.Control
										name="cacForm2"
										type="file"
										id="cacForm2"
										onChange={handleImageUpload}
										accept=".jpeg, .png, .jpg"
										required
									/>
									<p className="fw-bold mt-2">File should not be more than 2mb</p>
								</Form.Group>
							</Col>
							<Col xs={12} lg={6} className="my-3">
								<Form.Group controlId="cacCertificate">
									<InputGroup className="justify-content-between">
										<Form.Label className=" fw-bold ">CAC Certificate</Form.Label>
										<InputGroup.Text>
											<img src={icon1} alt="icon" className=""></img>
										</InputGroup.Text>
									</InputGroup>
									<Form.Control
										name="cacCertificate"
										type="file"
										id="cacCertificate"
										accept=".jpeg, .png, .jpg"
										onChange={handleImageUpload}
										className="form-control"
										required
									/>
									<p className="fw-bold mt-2">File should not be more than 2mb</p>
								</Form.Group>
							</Col>
							<Col xs={12} lg={6} className="my-3">
								<Form.Group controlId="cacForm7">
									<InputGroup className="justify-content-between">
										<Form.Label className=" fw-bold ">CAC Form 7 / BN 2*</Form.Label>
										<InputGroup.Text>
											<img src={icon1} alt="icon" className=""></img>
										</InputGroup.Text>
									</InputGroup>
									<Form.Control
										name="cacForm7"
										type="file"
										id="cacForm7"
										accept=".jpeg, .png, .jpg"
										onChange={handleImageUpload}
										required
									/>
									<p className="fw-bold mt-2">File should not be more than 2mb</p>
								</Form.Group>
							</Col>
							<Col xs={12} lg={6} className="d-flex align-items-end my-5">
								<Buttons variant="purple" className=" w-100" type="submit" disabled={disabled}>
									Add Business
								</Buttons>
							</Col>
						</Row>
						<SuccessModal
							btnsetter={toggleModal}
							iterateBtn={iterator}
							imgs={successScreen}
							btnOne={[true, "Go to Dashboard"]}
							btnTwo={[false, ""]}
							message={message}
							btnOneClick={navigateToDashboard}
						/>
					</Container>
				</form>
			</PageWrapper>
		</>
	);
};

export default UploadDocs;
