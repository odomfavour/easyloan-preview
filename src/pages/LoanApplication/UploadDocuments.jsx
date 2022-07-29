import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Col, Container, Row, InputGroup } from "react-bootstrap";
import { useAppContext } from "../../context/context";

import PageWrapper from "../../layouts/add_ bussiness_page_wrapper/PageWrapper";
import { Buttons } from "../../components";

import icon1 from "../../assets/Vector_info.svg";

const UploadDocuments = () => {
	const { loanForm, setLoanForm } = useAppContext();
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname;

	const [loanApplicationDocuments, setLoanApplicationDocuments] = useState({
		businessBankStatement: "",
		personalBankStatement: "",
		distributionAgreement: "",
		businessSalesRecord: "",
		utilityBill: "",
	});
	const [fileNames, setFileNames] = useState({
		businessBankStatement: "Click here to upload",
		personalBankStatement: "Click here to upload",
		distributionAgreement: "Click here to upload",
		businessSalesRecord: "Click here to upload",
		utilityBill: "Click here to upload",
	});

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
			setLoanApplicationDocuments({
				...loanApplicationDocuments,
				[e.target.name]: base64,
			});
		});
		let fileName = file.name;
		setFileNames({
			...fileNames,
			[e.target.name]: fileName,
		});
	};

	const addToStorage = () => {};

	const handleSubmit = (e) => {
		e.preventDefault();
		// get loan form.
		setLoanForm({ ...loanForm, businessDocumentsURL: loanApplicationDocuments });
		localStorage.removeItem("prevPath");
		localStorage.setItem("prevPath", path); // store the path so that the loan calculator page can access it
		navigate("/loan-calculator");
	};

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
							<Col xs={12} lg={6} className="my-2">
								<InputGroup className="justify-content-between  ">
									<InputGroup.Text className="px-0">
										Upload One Year Business Bank Statement
									</InputGroup.Text>
									<InputGroup.Text>
										<img src={icon1} alt="icon"></img>
									</InputGroup.Text>
								</InputGroup>
								<label
									htmlFor="businessBankStatement"
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
										<p className="fw-bold my-2">{fileNames.businessBankStatement}</p>
										<p className="muted-text m-0">PNG/JPEG</p>
									</div>
									<input
										className="d-none"
										id="businessBankStatement"
										name="businessBankStatement"
										type="file"
										onChange={handleImageUpload}
										accept=".jpeg, .png, .jpg"
										required
									/>
								</label>
								<p className="mt-2">File should not be more than 2mb</p>
							</Col>

							<Col xs={12} lg={6} className="my-2">
								<InputGroup className="justify-content-between  ">
									<InputGroup.Text className="px-0">Upload Business Sales Record</InputGroup.Text>
									<InputGroup.Text>
										<img src={icon1} alt="icon"></img>
									</InputGroup.Text>
								</InputGroup>
								<label
									htmlFor="businessSalesRecord"
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
										<p className="my-2 fw-bold">{fileNames.businessSalesRecord}</p>
										<p className="muted-text m-0">PNG/JPEG</p>
									</div>
									<input
										className="d-none"
										id="businessSalesRecord"
										name="businessSalesRecord"
										type="file"
										onChange={handleImageUpload}
										accept=".jpeg, .png, .jpg"
										required
									/>
								</label>
								<p className="mt-2">File should not be more than 2mb</p>
							</Col>

							<Col xs={12} lg={6} className="my-2">
								<InputGroup className="justify-content-between  ">
									<InputGroup.Text className="px-0">
										Upload One-Year Personal Bank Statement
									</InputGroup.Text>
									<InputGroup.Text>
										<img src={icon1} alt="icon"></img>
									</InputGroup.Text>
								</InputGroup>
								<label
									htmlFor="personalBankStatement"
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
										<p className="my-2 fw-bold">{fileNames.personalBankStatement}</p>
										<p className="muted-text m-0">PNG/JPEG</p>
									</div>
									<input
										className="d-none"
										id="personalBankStatement"
										name="personalBankStatement"
										type="file"
										onChange={handleImageUpload}
										accept=".jpeg, .png, .jpg"
										required
									/>
								</label>
								<p className="mt-2">File should not be more than 2mb</p>
							</Col>

							<Col xs={12} lg={6} className="my-2">
								<InputGroup className="justify-content-between  ">
									<InputGroup.Text className="px-0">Upload Utility Bill</InputGroup.Text>
									<InputGroup.Text>
										<img src={icon1} alt="icon"></img>
									</InputGroup.Text>
								</InputGroup>
								<label
									htmlFor="utilityBill"
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
										<p className="my-2 fw-bold">{fileNames.utilityBill}</p>
										<p className="muted-text m-0">PNG/JPEG</p>
									</div>
									<input
										className="d-none"
										id="utilityBill"
										name="utilityBill"
										type="file"
										onChange={handleImageUpload}
										accept=".jpeg, .png, .jpg"
										required
									/>
								</label>
								<p className="mt-2">File should not be more than 2mb</p>
							</Col>

							<Col xs={12} lg={6} className="my-2">
								<InputGroup className="justify-content-between  ">
									<InputGroup.Text className="px-0">Upload Distribution Agreement</InputGroup.Text>
									<InputGroup.Text>
										<img src={icon1} alt="icon"></img>
									</InputGroup.Text>
								</InputGroup>
								<label
									htmlFor="distributionAgreement"
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
										<p className="my-2 fw-bold">{fileNames.distributionAgreement}</p>
										<p className="muted-text m-0">PNG/JPEG</p>
									</div>
									<input
										className="d-none"
										id="distributionAgreement"
										name="distributionAgreement"
										type="file"
										onChange={handleImageUpload}
										accept=".jpeg, .png, .jpg"
										required
									/>
								</label>
								<p className="mt-2">File should not be more than 2mb</p>
							</Col>

							<Col xs={12} lg={6} className="d-flex align-items-end my-5">
								<Buttons variant="purple" className=" w-100" type="submit">
									Apply for loan
								</Buttons>
							</Col>
						</Row>
					</Container>
				</form>
			</PageWrapper>
		</>
	);
};

export default UploadDocuments;
