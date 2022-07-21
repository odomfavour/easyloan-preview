import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import PageWrapper from "../../layouts/add_ bussiness_page_wrapper/PageWrapper";
import { Buttons } from "../../components";
import SuccessModal from "../../components/successModal.jsx/SuccessModal";

import successScreen from "../../assets/successScreen.svg";

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

	return (
		<>
			<PageWrapper
				title="Upload your Documents"
				desc="Upload your business documents to continue"
				page="2">
				<form onSubmit={handleSubmit} onFocus={handleFormFocus}>
					<Container>
						<Row>
							<Col xs={12} lg={6}>
								<div className="form-group">
									<label htmlFor="cacForm2" className="form-label fw-bold ">
										CAC Form 2 / BN 1*
									</label>
									<input
										name="cacForm2"
										type="file"
										id="cacForm2"
										onChange={handleImageUpload}
										accept=".jpeg, .png, .jpg"
										className="form-control"
										required
									/>
								</div>
							</Col>
							<Col xs={12} lg={6}>
								<div className="form-group">
									<label htmlFor="cacForm7" className="form-label fw-bold ">
										CAC Form 7 / BN 2*
									</label>
									<input
										name="cacForm7"
										type="file"
										id="cacForm7"
										accept=".jpeg, .png, .jpg"
										onChange={handleImageUpload}
										className="form-control"
										required
									/>
								</div>
							</Col>
							<Col xs={12} lg={6}>
								<div className="form-group">
									<label htmlFor="cacCertificate" className="form-label fw-bold ">
										CAC Certificate
									</label>
									<input
										name="cacCertificate"
										type="file"
										id="cacCertificate"
										accept=".jpeg, .png, .jpg"
										onChange={handleImageUpload}
										className="form-control"
										required
									/>
								</div>
							</Col>
							<Col xs={12} lg={6}>
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
							message="Great Job!
                Your business has been successfully added"
							btnOneClick={navigateToDashboard}
						/>
					</Container>
				</form>
			</PageWrapper>
		</>
	);
};

export default UploadDocs;
