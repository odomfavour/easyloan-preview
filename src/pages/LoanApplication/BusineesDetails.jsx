import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Col, Row, Modal, Form, Stack } from "react-bootstrap";

import PageWrapperV2 from "../../layouts/no_footer_layout/PageWrapperV2";
import { Buttons } from "../../components/index";

import * as AiIcons from "react-icons/ai";

const BusineesDetails = () => {
	// fetch data 
	const getBusiness = JSON.parse(localStorage.getItem('businessInfo'))
	const businessInfos = Object.values(getBusiness)
	const businessNames = []
	businessInfos.map(businessInfo => {
		return businessNames.push(businessInfo.businessName)
	}); 

	let {indx} = useParams()
	const [busIndx, setBusIndx] = useState(indx)

	const [appllicationModal, setApplicationModal] = useState(false);
	const [modalValue, setModalValue] = useState(businessInfos[indx].businessName);
	const handleLoanModal = () => {
		setApplicationModal(!appllicationModal);
	};

	const [form, setForm] = useState({
		name: "",
		category: "",
		orderID: "",
		nameOfCompany: "",
		companyEmail: "",
		phoneNumber: "",
		account: "",
		accNo: "",
		bankName: "",
	});

	// eslint-disable-next-line
	// const [cacDocuments, setCacDocuments] = useState({
	// 	imgFile: "",
	// });

	const handleChange = (e) => {
		let value = e.target.value;

		setForm({
			...form,
			[e.target.name]: value,
		});
	};

	const handleSubmitOne = (e) => {
		console.log(form);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form);
	};

	const handleImageUpload = (e) => {};

	//  modalOne
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	// modalTwo
	const [showTwo, setShowTwo] = useState(false);

	const handleCloseTwo = () => {
		setShowTwo(false);
	};
	const handleShowTwo = () => {
		setShowTwo(true);
		setShow(false);
	};
	// modal end

	 

	const handleDropClick = (busName, i) => {
        setModalValue(busName)
        setBusIndx(i)
    }

	const currentUser = businessInfos[busIndx]


	console.log(currentUser)

	return (
		<div>
			<PageWrapperV2>
				<Container className="mt-5 h-100 px-5 px-md-0">
					<Row className="align-items-center justify-content-between  pb-4 flex-column flex-lg-row ">
						<div className="d-lg-block">
							<h1 className="heading-font my-0">Loan Application</h1>
							<p className="m-0" style={{ color: "#B1B0B0" }}>
								Review your business details
							</p>
						</div>
					</Row>
					<Row className="align-items-center justify-content-between  py-4 flex-column flex-lg-row ">
						<div className=" d-lg-block">
							<p className="fw-bold fs-4 my-0">Business Details</p>
						</div>
						<div className="d-flex flex-wrap">
							<Col className="pe-md-4" sm={12} lg={6}>
								<div className="position-relative w-100" onClick={handleLoanModal}>
									<p>Business name</p>
									<div className="w-100 border px-4 py-2 bg-white rounded text-secondary  align-items-center d-flex justify-content-between">
										<p className="mb-0">{modalValue}</p>
										<AiIcons.AiOutlineDown />
									</div>
									{appllicationModal && (
										<div
											className="w-100 position-absolute d-flex flex-column border px-4 py-2 bg-white rounded text-secondary  align-items-start d-flex justify-content-start"
											style={{ top: "110%", zIndex: "10" }}>
												 {businessNames.map((busName, i) => (
                                                  <p className="mb-0  my-4 w-100 "  key={i} onClick={()=>handleDropClick(busName, i)}>{busName}</p>
                                                ))}
                                          
										</div>
									)}
								</div>
								<ul
									className="border w-100 flex-column px-4 mt-3 py-2 bg-white rounded text-secondary  align-items-start d-flex justify-content-start"
									style={{ width: "auto !important" }}>
									<li className="py-3 d-flex justify-content-between align-items-center w-100">
										<p className="mb-0">{modalValue}</p>
										<Buttons variant="outline-purple" onClick={handleLoanModal} size="lg" className="w-25  rounded">
											Edit
										</Buttons>
									</li>
									<li className="mb-0 py-3 list-group">Email: {currentUser.businessEmail}</li>
									<li className="mb-0 py-3 list-group">Phone No: {currentUser.phone}</li>
									<li className="mb-0 py-3 list-group">RC Number: {currentUser.regNumber}</li>
									<li className="mb-0 py-3 list-group">Business Category: {currentUser.category}</li>
									<li className="mb-0 py-3 list-group">Business Address: {currentUser.street}</li>
									<li className="mb-0 py-3 list-group">Nearest Bustop: {currentUser.busStop}</li>
									<li className="mb-0 py-3 list-group">LGA: {currentUser.lga}</li>
									<li className="mb-0 py-3 list-group">State: {currentUser.state} </li>
								</ul>
							</Col>
							<Col className="ps-md-4 pt-4" sm={12} lg={6}>
								<div className=" d-lg-block my-3">
									<p className="fw-bold fs-4 my-0">Documents Required</p>
								</div>
								<div className="100 border px-4 py-2 mb-4 bg-white rounded text-secondary  align-items-center d-flex justify-content-between">
									<ul className="w-100 ps-0">
										<li className="py-3 d-flex justify-content-between align-items-center w-100">
											<p className="mb-0">CAC/Business Registration Document</p>
											<Buttons variant="outline-purple" size="md" className="w-25 h-25 rounded">
												Uploaded
											</Buttons>
										</li>
										<li className="py-3 d-flex justify-content-between align-items-center w-100">
											<p className="mb-0">CAC Form 2 / BN 1 </p>
											<Buttons variant="outline-purple" size="md" className="w-25 h-25 rounded">
												Uploaded
											</Buttons>
										</li>
										<li className="py-3 d-flex justify-content-between align-items-center w-100">
											<p className="mb-0">CAC Form 7 / BN 2</p>
											<Buttons variant="outline-purple" size="md" className="w-25 h-25 rounded">
												Uploaded
											</Buttons>
										</li>
										<li className="py-3 d-flex justify-content-between align-items-center w-100">
											<p className="mb-0">Local Purchase Order</p>
											<Buttons variant="purple" size="md" className="w-25 h-25 rounded">
												Upload
											</Buttons>
										</li>
										<li className="py-3 d-flex justify-content-between align-items-center w-100">
											<p className="mb-0">Distribution Agreement</p>
											<Buttons variant="purple" size="md" className="w-25 h-25 rounded">
												Upload
											</Buttons>
										</li>
										<li className="py-3 d-flex justify-content-between align-items-center w-100">
											<p className="mb-0">Business Sales Records</p>
											<Buttons variant="purple" size="md" className="w-25 h-25 rounded">
												Upload
											</Buttons>
										</li>
										<li className="py-3 d-flex justify-content-between align-items-center w-100">
											<p className="mb-0">Business Bank Statement</p>
											<Buttons variant="purple" size="md" className="w-25 h-25 rounded">
												Upload
											</Buttons>
										</li>
									</ul>
								</div>
								<Buttons variant="purple" size="md" className="w-100 rounded" onClick={handleShow}>
									Continue
								</Buttons>
							</Col>
						</div>
					</Row>
					{/* modal */}
					<Modal show={show} onHide={handleClose}>
						<Modal.Body>
							<Form onSubmit={handleSubmitOne}>
								<Stack gap={5}>
									<Stack gap={4} className=" px-4 pt-3 pb-4 bg-gray form">
										<div className="d-none d-lg-block">
											<p className="fw-bold my-0">Enter Information on the LPO</p>
										</div>
										<Form.Group controlId="name">
											<Form.Label>Product Name</Form.Label>
											<Form.Control
												type="text"
												name="name"
												value={form.name}
												onChange={handleChange}
												placeholder="Enter Product Name"
												required
											/>
										</Form.Group>

										<Form.Group controlId="category">
											<Form.Label>Product Category</Form.Label>
											<Form.Control
												type="text"
												name="category"
												value={form.category}
												onChange={handleChange}
												placeholder="Select your business"
												required
											/>
										</Form.Group>
										<Form.Group controlId="orderID">
											<Form.Label>Local Purchase Order Number/ID</Form.Label>
											<Form.Control
												type="number"
												name="orderID"
												value={form.orderID}
												onChange={handleChange}
												placeholder="849484929992"
												required
											/>
										</Form.Group>
									</Stack>
									<div>
										<div className="d-flex justify-content-between">
											<Form.Label>Upload Local Purchase Order</Form.Label>
											<AiIcons.AiOutlineInfoCircle />
										</div>
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
												<p className="fw-bold my-2">
													Click here to upload a clear picture of CAC Form 2 / BN 1
												</p>
												<p className="muted-text m-0">PNG/JPEG</p>
											</div>
											<input
												className="d-none"
												id="imgFile"
												name="imgFile"
												type="file"
												accept=".jpeg, .png, .jpg"
												onChange={handleImageUpload}
												required
											/>
										</label>
										<div>File should not be more than 2mb</div>
									</div>

									<Stack className="heading-font " gap={2}>
										<Buttons
											variant="purple"
											size="md"
											className="w-100"
											type="submit"
											onClick={handleShowTwo}>
											Continue
										</Buttons>
									</Stack>
								</Stack>
							</Form>
						</Modal.Body>
					</Modal>
					{/* modalTwo */}
					<Modal show={showTwo} onHide={handleCloseTwo} size="lg">
						<Modal.Body>
							<Form onSubmit={handleSubmit}>
								<Stack gap={5} className="px-3">
									<Row className=" px-4 pt-3 pb-4 bg-gray form d-flex flex-wrap">
										<Col sm={12} lg={6}>
											<div className="">
												<p className="fw-bold my-0">Enter LPO Company Details</p>
											</div>
											<Stack gap={3} className="mt-5">
												<Form.Group controlId="name">
													<Form.Label>Name of Company</Form.Label>
													<Form.Control
														type="text"
														name="nameOfCompany"
														value={form.nameOfCompany}
														onChange={handleChange}
														placeholder="Enter Product Name"
														required
													/>
												</Form.Group>

												<Form.Group controlId="category">
													<Form.Label>Company Email</Form.Label>
													<Form.Control
														type="email"
														name="companyEmail"
														value={form.companyEmail}
														onChange={handleChange}
														placeholder="Select your business"
														required
													/>
												</Form.Group>
												<Form.Group controlId="orderID">
													<Form.Label>Company Phone Number</Form.Label>
													<Form.Control
														type="text"
														name="phoneNumber"
														value={form.phoneNumber}
														onChange={handleChange}
														placeholder="849484929992"
														required
													/>
												</Form.Group>
											</Stack>
										</Col>
										<Col sm={12} lg={6} className="mt-5 mt-lg-0">
											<div className="">
												<p className="fw-bold my-0">LPO Account Details</p>
											</div>
											<Stack gap={3} className="mt-5">
												<Form.Group controlId="name">
													<Form.Label>Company Account Name</Form.Label>
													<Form.Control
														type="text"
														name="account"
														value={form.account}
														onChange={handleChange}
														placeholder="Enter Product Name"
														required
													/>
												</Form.Group>

												<Form.Group controlId="category">
													<Form.Label>Company Account Number</Form.Label>
													<Form.Control
														type="text"
														name="accNo"
														value={form.accNo}
														onChange={handleChange}
														placeholder="Select your business"
														required
													/>
												</Form.Group>
												<Form.Group controlId="orderID">
													<Form.Label>Company Bank Name</Form.Label>
													<Form.Control
														type="text"
														name="bankName"
														value={form.bankName}
														onChange={handleChange}
														placeholder="849484929992"
														required
													/>
												</Form.Group>
											</Stack>
										</Col>
									</Row>

									<Stack className="heading-font " gap={2}>
										<Buttons variant="purple" size="md" className="w-100" type="submit" as={Link} to={"/upload-business-docs"}>
											Continue
										</Buttons>
									</Stack>
								</Stack>
							</Form>
						</Modal.Body>
					</Modal>
				</Container>
			</PageWrapperV2>
		</div>
	);
};

export default BusineesDetails;
