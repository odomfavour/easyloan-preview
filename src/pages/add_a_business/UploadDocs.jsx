import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, InputGroup } from "react-bootstrap";

import PageWrapper from "../../layouts/add_ bussiness_page_wrapper/PageWrapper";
import { Buttons } from "../../components";
import SuccessModal from "../../components/successModal.jsx/SuccessModal";
import { useAppContext } from "../../context/context";

import successScreen from "../../assets/successScreen.svg";
import icon1 from "../../assets/Vector_info.svg";

const UploadDocs = () => {
	const navigate = useNavigate();
	const { bizForm, setBizForm } = useAppContext();

	const [cacDocuments, setCacDocuments] = useState({
		cacForm2: "",
		cacForm7: "",
		cacCertificate: "",
	});
	const [fileNames, setFileNames] = useState({
		cacForm2: "Click here to upload a clear picture of CAC Form 2 / BN 1",
		cacForm7: "Click here to upload a clear picture of CAC Form 7 / BN 2",
		cacCertificate: "Click here to upload a clear picture of CAC Certificate",
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

	// convert images to base64 and store in local storage
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
		let fileName = file.name;
		setFileNames({
			...fileNames,
			[e.target.name]: fileName,
		});
	};

	const addToStorage = () => {
		// get business data form
		setBizForm({ ...bizForm, cacDocumentsImgUrl: cacDocuments });
		// get existing user data from local storage
		let data = JSON.parse(localStorage.getItem("user"));
		// add new business data to the object
		data.business ? data.business.push(bizForm) : (data.business = [bizForm]);
		// save back to local storage
		localStorage.setItem("user", JSON.stringify(data));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addToStorage();
		setSuccessModal();
	};

	// document.querySelector('.custom-file-input').addEventListener('change', function (e) {
	//   var name = document.getElementById("customFileInput").files[0].name;
	//   var nextSibling = e.target.nextElementSibling
	//   nextSibling.innerText = name
	// })

	const message = ["Great Job!", <br key="0" />, "Your business has been successfully added"];

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
				<form onSubmit={handleSubmit}>
					<Container className="upload-docs">
						<Row className="px-3">
							<Col xs={12} lg={6} className="my-3">
								<InputGroup className="justify-content-between  ">
									<InputGroup.Text className="fw-bold px-0">CAC Form 2 / BN 1*</InputGroup.Text>
									<InputGroup.Text>
										<img src={icon1} alt="icon" className=""></img>
									</InputGroup.Text>
								</InputGroup>
								<label
									htmlFor="cacForm2"
									className="d-flex flex-column justify-content-center w-100 bg-light-gray rounded border py-3"
									style={{ cursor: "pointer" }}>
									<div className="d-flex flex-column justify-content-center align-items-center ">
										<svg
											width="15"
											height="17"
											viewBox="0 0 15 17"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M4.5 13H10.5V7H14.5L7.5 0L0.5 7H4.5V13ZM0.5 15H14.5V17H0.5V15Z"
												fill="#AE2BFF"
											/>
										</svg>
										<p className="fw-bold my-2">{fileNames.cacForm2}</p>
										<p className="muted-text m-0">PNG/JPEG</p>
									</div>
									<input
										className="d-none"
										id="cacForm2"
										name="cacForm2"
										type="file"
										onChange={handleImageUpload}
										accept=".jpeg, .png, .jpg"
										required
									/>
								</label>
								<p className="fw-bold mt-2">File should not be more than 2mb</p>
							</Col>

							<Col xs={12} lg={6} className="my-3">
								<InputGroup className="justify-content-between  ">
									<InputGroup.Text className="fw-bold px-0">CAC Certificate</InputGroup.Text>
									<InputGroup.Text>
										<img src={icon1} alt="icon"></img>
									</InputGroup.Text>
								</InputGroup>
								<label
									htmlFor="cacCertificate"
									className="d-flex flex-column justify-content-center w-100 bg-light-gray rounded border py-3"
									style={{ cursor: "pointer" }}>
									<div className="d-flex flex-column justify-content-center align-items-center ">
										<svg
											width="15"
											height="17"
											viewBox="0 0 15 17"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M4.5 13H10.5V7H14.5L7.5 0L0.5 7H4.5V13ZM0.5 15H14.5V17H0.5V15Z"
												fill="#AE2BFF"
											/>
										</svg>
										<p className="fw-bold my-2">{fileNames.cacCertificate}</p>
										<p className="muted-text m-0">PNG/JPEG</p>
									</div>
									<input
										className="d-none"
										id="cacCertificate"
										name="cacCertificate"
										type="file"
										onChange={handleImageUpload}
										accept=".jpeg, .png, .jpg"
										required
									/>
								</label>
								<p className="fw-bold mt-2">File should not be more than 2mb</p>
							</Col>

							<Col xs={12} lg={6} className="my-3">
								<InputGroup className="justify-content-between  ">
									<InputGroup.Text className="fw-bold px-0">CAC Form 7 / BN 2*</InputGroup.Text>
									<InputGroup.Text>
										<img src={icon1} alt="icon"></img>
									</InputGroup.Text>
								</InputGroup>
								<label
									htmlFor="cacForm7"
									className="d-flex flex-column justify-content-center w-100 bg-light-gray rounded border py-3"
									style={{ cursor: "pointer" }}>
									<div className="d-flex flex-column justify-content-center align-items-center ">
										<svg
											width="15"
											height="17"
											viewBox="0 0 15 17"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M4.5 13H10.5V7H14.5L7.5 0L0.5 7H4.5V13ZM0.5 15H14.5V17H0.5V15Z"
												fill="#AE2BFF"
											/>
										</svg>
										<p className="fw-bold my-2">{fileNames.cacForm7}</p>
										<p className="muted-text m-0">PNG/JPEG</p>
									</div>
									<input
										className="d-none"
										id="cacForm7"
										name="cacForm7"
										type="file"
										onChange={handleImageUpload}
										accept=".jpeg, .png, .jpg"
										required
									/>
								</label>
								<p className="fw-bold mt-2">File should not be more than 2mb</p>
							</Col>

							<Col xs={12} lg={6} className="d-flex align-items-end my-5">
								<Buttons variant="purple" className=" w-100" type="submit">
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
