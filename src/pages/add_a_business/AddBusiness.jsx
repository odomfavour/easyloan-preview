import React, { useState } from "react";
import { Stack, Form, Container } from "react-bootstrap";

import PageWrapper from "../../layouts/add_ bussiness_page_wrapper/PageWrapper";
import { Buttons } from "../../components/index";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/context";

const AddBusiness = () => {
  const { bizForm, setBizForm } = useAppContext();
	const [disabled, setDisabled] = useState(true);
	const navigate = useNavigate();

	const handleFormFocus = () => {
		setDisabled(false);
	};

	const handleChange = (e) => {
		let value = e.target.value;

		setBizForm({
			...bizForm,
			[e.target.name]: value,
		});
	};

	// const handleBusinessInfo = () => {
	// 	// get existing user data
	// 	let data = JSON.parse(localStorage.getItem("user"));
	// 	// Add new data to the object
	// 	data.business ? data.business.push(form) : (data.business = [form]);
	// 	// save back to local storage
	// 	localStorage.setItem("user", JSON.stringify(data));

	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		// handleBusinessInfo();

		navigate("/upload-documents");
	};

	return (
		<>
			<style type="text/css">
				{`
          .heading-2{
            color: #3A0E55;
            font-size: 1.25rem;
          }

          .form{
            padding-bottom: 7rem;
          }



          // Tablet
          @media (min-width: 768px) {
            .form .form-content{
              gap: 0 !important;
            }
          }

        `}
			</style>

			<PageWrapper title="Business Information" desc="Enter your company information" page="1">
				<Container className="">
					<Form className=" pt-3 form" onSubmit={handleSubmit} onFocus={handleFormFocus}>
						<Stack gap={5} className="flex-lg-row form-content mb-md-5">
							<Stack gap={4} className="px-3 px-md-4 py-4 pb-md-5 w-100 rounded bg-gray ">
								<h2 className="heading-2 fw-bold">Business Details</h2>
								<Form.Group controlId="businessName">
									<Form.Label className="fw-bold">Business Name</Form.Label>
									<Form.Control
										type="text"
										name="businessName"
										value={bizForm.businessName}
										onChange={handleChange}
										placeholder="Enter Business Name"
										required
									/>
								</Form.Group>

								<Form.Group controlId="businessEmail">
									<Form.Label className="fw-bold">Business Email Address</Form.Label>
									<Form.Control
										type="email"
										name="businessEmail"
										value={bizForm.businessEmail}
										onChange={handleChange}
										placeholder="lydia@lyd&ste.com"
										required
									/>
								</Form.Group>

								<Form.Group controlId="regNumber">
									<Form.Label className="fw-bold">Business Registration Number</Form.Label>
									<Form.Control
										type="text"
										name="regNumber"
										value={bizForm.regNumber}
										onChange={handleChange}
										placeholder="RC 2222222"
										required
									/>
								</Form.Group>

								<Stack gap={3} className="flex-md-row">
									<Form.Group controlId="bvn" className="w-100">
										<Form.Label className="fw-bold">Owner’s BVN</Form.Label>
										<Form.Control
											type="text"
											name="bvn"
											value={bizForm.bvn}
											onChange={handleChange}
											placeholder="22222222222222222"
											required
										/>
									</Form.Group>

									<Form.Group controlId="phone" className="w-100">
										<Form.Label className="fw-bold">Business Phone Number</Form.Label>
										<Form.Control
											type="text"
											name="phone"
											value={bizForm.phone}
											onChange={handleChange}
											placeholder="0802222222222"
											required
										/>
									</Form.Group>
								</Stack>

								<Stack gap={3} className="flex-md-row">
									<Form.Group controlId="category" className="w-100">
										<Form.Label className="fw-bold">Business Category</Form.Label>
										<Form.Select
											aria-label="Business Category"
											name="category"
											value={bizForm.category}
											onChange={handleChange}
											required>
											<option className="d-none">Select business category</option>
											<option value="Food and Agriculture">Food and Agriculture</option>
											<option value="Automobile">Automobile</option>
											<option value="Gadget">Gadget</option>
											<option value="Construction">Construction</option>
											<option value="Drugs">Drugs</option>
											<option value="E- Commerce">E- Commerce</option>
											<option value="Education">Education</option>
											<option value="Fashion">Fashion</option>
											<option value="Health">Health</option>
											<option value="Hospitality">Hospitality</option>
											<option value="Real Estate">Real Estate</option>
											<option value="Transport & Logistics">Transport & Logistics</option>
										</Form.Select>
									</Form.Group>

									<Form.Group controlId="size" className="w-100">
										<Form.Label className="fw-bold">Business Size</Form.Label>
										<Form.Select
											required
											aria-label="Business Size"
											name="size"
											value={bizForm.size}
											onChange={handleChange}>
											<option className="d-none"></option>
											<option value="Small">Small</option>
											<option value="Medium">Medium</option>
											<option value="Large">Large</option>
										</Form.Select>
									</Form.Group>
								</Stack>
							</Stack>

							<Stack
								gap={4}
								className="px-3  px-md-4 py-4 w-100 rounded justify-content-lg-between bg-gray biz-address">
								<h2 className="heading-2 fw-bold">Business Address</h2>
								<Form.Group controlId="street">
									<Form.Label className="fw-bold">Street Address</Form.Label>
									<Form.Control
										type="text"
										name="street"
										value={bizForm.street}
										onChange={handleChange}
										placeholder="12, Favourite Street"
										required
									/>
								</Form.Group>

								<Form.Group controlId="busStop">
									<Form.Label className="fw-bold">Nearest Bus Stop</Form.Label>
									<Form.Control
										type="text"
										name="busStop"
										value={bizForm.busStop}
										onChange={handleChange}
										placeholder="Lekki Phase 1"
									/>
								</Form.Group>

								<Form.Group controlId="lga">
									<Form.Label className="fw-bold">LGA</Form.Label>
									<Form.Control
										type="text"
										name="lga"
										value={bizForm.lga}
										onChange={handleChange}
										placeholder="Eti Osa"
										required
									/>
								</Form.Group>

								<Form.Group controlId="state">
									<Form.Label className="fw-bold">State</Form.Label>
									<Form.Control
										type="text"
										name="state"
										value={bizForm.state}
										onChange={handleChange}
										placeholder="Lagos"
										required
									/>
								</Form.Group>

								<div className="d-none d-lg-block mt-5">
									<Buttons variant="purple" className="w-100  " type="submit" disabled={disabled}>
										Continue
									</Buttons>
								</div>
							</Stack>
						</Stack>

						<div className="px-3 d-lg-none">
							<Buttons variant="purple" className="mt-4 w-100" type="submit" disabled={disabled}>
								Continue
							</Buttons>
						</div>
					</Form>
				</Container>
			</PageWrapper>
		</>
	);
};

export default AddBusiness;
