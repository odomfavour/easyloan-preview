import React, { useState } from "react";
import { Stack, Form } from "react-bootstrap";

import PageWrapper from "../layouts/add_ bussiness_page_wrapper/PageWrapper";
import { Buttons } from "../components/index";

const AddBussiness = () => {
	const [form, setForm] = useState({
		businessName: "",
		businessEmail: "",
		regNumber: "",
		bvn: "",
		phone: "",
		category: false,
		size: "",
	});

	const handleChange = (e) => {
		let value = e.target.value;

		setForm({
			...form,
			[e.target.name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// navigate("/verify");
		console.log("submitted");
	};

	return (
		<>
			<style>
				{`
          .heading-2{
            color: #3A0E55;
          }
        `}
			</style>

			<PageWrapper title="Business Information" desc="Enter your company information" page="1">
				<Form className=" px-4 pt-3 pb-4 form" onSubmit={handleSubmit}>
					<Stack gap={5} direction="horizontal">
						<Stack gap={4} className="w-100">
							<h2 className="heading-2">Business Details</h2>
							<Form.Group controlId="businessName">
								<Form.Label className="fw-bold">Business Name</Form.Label>
								<Form.Control
									type="text"
									name="businessName"
									value={form.businessName}
									onChange={handleChange}
									placeholder="Enter Business Name"
								/>
							</Form.Group>

							<Form.Group controlId="businessEmail">
								<Form.Label className="fw-bold">Business Email Address</Form.Label>
								<Form.Control
									type="email"
									name="businessEmail"
									value={form.businessEmail}
									onChange={handleChange}
									placeholder="lydia@lyd&ste.com"
								/>
							</Form.Group>

							<Form.Group controlId="regNumber">
								<Form.Label className="fw-bold">Business Registration Number</Form.Label>
								<Form.Control
									type="text"
									name="regNumber"
									value={form.regNumber}
									onChange={handleChange}
									placeholder="RC 2222222"
								/>
							</Form.Group>

							<Stack gap={3} direction="horizontal">
								<Form.Group controlId="bvn" className="w-100">
									<Form.Label className="fw-bold">Owner’s BVN</Form.Label>
									<Form.Control
										type="text"
										name="bvn"
										value={form.bvn}
										onChange={handleChange}
										placeholder="22222222222222222"
									/>
								</Form.Group>

								<Form.Group controlId="phone" className="w-100">
									<Form.Label className="fw-bold">Business Phone Number</Form.Label>
									<Form.Control
										type="text"
										name="phone"
										value={form.phone}
										onChange={handleChange}
										placeholder="0802222222222"
									/>
								</Form.Group>
							</Stack>

							<Stack gap={3} direction="horizontal">
								<Form.Group controlId="category" className="w-100">
									<Form.Label className="fw-bold" className="">
										Business Category
									</Form.Label>
									<Form.Select
										aria-label="Business Category"
										name="category"
										value={form.category}
										onChange={handleChange}>
										<option value="Select your repayment duration" className="d-none">
											Select the product category
										</option>
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
										aria-label="Business Size"
										name="size"
										value={form.size}
										onChange={handleChange}>
										<option value="Small">Small</option>
										<option value="Medium">Medium</option>
										<option value="Large">Large</option>
									</Form.Select>
								</Form.Group>
							</Stack>
						</Stack>

						<Stack gap={4} className="w-100">
							<h2 className="heading-2">Business Address</h2>
							<Form.Group controlId="street">
								<Form.Label className="fw-bold">Street Address</Form.Label>
								<Form.Control
									type="text"
									name="street"
									value={form.street}
									onChange={handleChange}
									placeholder="12, Favourite Street"
								/>
							</Form.Group>

							<Form.Group controlId="busStop">
								<Form.Label className="fw-bold">Nearest Bus Stop</Form.Label>
								<Form.Control
									type="text"
									name="busStop"
									value={form.busStop}
									onChange={handleChange}
									placeholder="Lekki Phase 1"
								/>
							</Form.Group>

							<Form.Group controlId="lga">
								<Form.Label className="fw-bold">Nearest Bus Stop</Form.Label>
								<Form.Control
									type="text"
									name="lga"
									value={form.lga}
									onChange={handleChange}
									placeholder="Eti Osa"
								/>
							</Form.Group>

							<Form.Group controlId="state">
								<Form.Label className="fw-bold">State</Form.Label>
								<Form.Control
									type="text"
									name="state"
									value={form.state}
									onChange={handleChange}
									placeholder="Lagos"
								/>
							</Form.Group>
						</Stack>
					</Stack>

					<Buttons variant="purple" className="w-100" type="submit">
						Continue
					</Buttons>
				</Form>
			</PageWrapper>
		</>
	);
};

export default AddBussiness;
