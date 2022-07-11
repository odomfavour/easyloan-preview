import React, { useState } from "react";
import { Buttons } from "../components/index";
import { Container, Row, Col, Form, Stack } from "react-bootstrap";
import PageWrapper from "../layouts/page_wrapper/PageWrapper";

const LoanCalculator = () => {
	const [form, setForm] = useState({
		productName: "",
		productQty: "",
		productValue: "",
		interestRate: 21,
		downPayment: "30%",
		repaymentPlan: "",
		loanTenure: "",
	});

	const [loanOffer, setLoanOffer] = useState({}); // result of the calculation to be displayed on the loan offer popup

	const handleChange = (e) => {
		let value = e.target.value;

		setForm({
			...form,
			[e.target.name]: value,
		});
	};

	const handleBtnClick = (e) => {
		e.preventDefault();
		calculateLoan();
	};

	function calculateLoan() {
		let {
			productValue: productPrice,
			interestRate: interest,
			downPayment,
			repaymentPlan,
			loanTenure,
		} = form;

		let totalLoanAmount, downPaymentRate, repaymentAmount, monthlyPayment, weeklyPayment;

		totalLoanAmount = (Number(interest) / 100) * Number(productPrice) + Number(productPrice);

		downPaymentRate = Number(downPayment.replace("%", ""));
		downPayment = (downPaymentRate / 100) * Number(productPrice);

		monthlyPayment = (totalLoanAmount - downPayment) / Number(loanTenure.split(" ")[0]);
		weeklyPayment = monthlyPayment / 4;

		switch (repaymentPlan) {
			case "Monthly":
				repaymentAmount = Math.round(monthlyPayment);
				break;

			case "Weekly":
				repaymentAmount = Math.round(weeklyPayment);
				break;

			default:
				break;
		}

		setLoanOffer({
			...loanOffer,
			productPrice: productPrice,
			interest: interest,
			downPayment: downPayment,
			repaymentPlan: repaymentPlan,
			loanTenure: loanTenure,
			totalLoanAmount: totalLoanAmount,
			repaymentAmount: repaymentAmount,
		});

		console.log(loanOffer);
	}

	return (
		<PageWrapper>
			<Container className="pb-5 pt-4 ">
				<Row>
					<Col xs={4}>
						<h1 className="heading-font " style={{ lineHeight: "3rem" }}>
							Loan Calculator
						</h1>
						<hr
							style={{
								color: "var(--purple)",
								backgroundColor: "var(--purple)",
								height: "2px",
								width: "12em",
								marginTop: "0",
							}}
						/>
					</Col>
				</Row>
				<Row className="d-flex align-items-center justify-content-center px-5">
					{/* <Col> */}
					<Form className="border rounded col col-lg-4 px-lg-5 py-lg-4 bg-gray">
						<Stack gap={3}>
							<Form.Group controlId="productName">
								<Form.Label>Product Name</Form.Label>
								<Form.Control
									type="text"
									name="productName"
									value={form.productName}
									onChange={handleChange}
									placeholder="Type in product name"
								/>
							</Form.Group>

							<Form.Group controlId="productQty">
								<Form.Label>Product Qty</Form.Label>
								<Form.Control
									type="text"
									name="productQty"
									value={form.productQty}
									onChange={handleChange}
									placeholder="Type in product quantity"
								/>
							</Form.Group>

							<Form.Group controlId="productValue">
								<Form.Label>Product Value (N)</Form.Label>
								<Form.Control
									type="text"
									name="productValue"
									value={form.productValue}
									onChange={handleChange}
									placeholder="Type in product price"
								/>
							</Form.Group>

							<Form.Group controlId="interestRate">
								<Form.Label>Interest Rate</Form.Label>
								<Form.Range name="interestRate" value={form.interestRate} onChange={handleChange} />
							</Form.Group>

							<Form.Group controlId="downPayment">
								<Form.Label>Down Payment</Form.Label>
								<Form.Control
									type="text"
									name="downPayment"
									value={form.downPayment}
									onChange={handleChange}
									placeholder="30%"
								/>
								<Form.Text className="text-muted">
									*Down payment is a minimum of 30% of the product price
								</Form.Text>
							</Form.Group>

							<Form.Group controlId="repaymentPlan">
								<Form.Label>Repayment Option</Form.Label>
								<Form.Select
									defaultValue="Select your repayment plan"
									name="repaymentPlan"
									value={form.repaymentPlan}
									onChange={handleChange}
									aria-label="Repayment Option">
									<option value="Select your repayment plan">Select your repayment plan</option>
									<option value="Weekly">Weekly</option>
									<option value="Monthly">Monthly</option>
								</Form.Select>
							</Form.Group>

							<Form.Group controlId="loanTenure">
								<Form.Label>Loan Tenure</Form.Label>
								<Form.Select
									aria-label="Repayment Option"
									defaultValue="Select your loan tenure"
									name="loanTenure"
									value={form.loanTenure}
									onChange={handleChange}>
									<option value="Select your loan tenure">Select your loan tenure</option>
									<option value="1">1 Month</option>
									<option value="2">2 Months</option>
									<option value="3">3 Months</option>
									<option value="4">4 Months</option>
									<option value="5">5 Months</option>
									<option value="6">6 Months</option>
									<option value="7">7 Months</option>
									<option value="8">8 Months</option>
									<option value="9">9 Months</option>
									<option value="10">10 Months</option>
									<option value="11">11 Months</option>
									<option value="12">12 Months</option>
								</Form.Select>
							</Form.Group>

							<Buttons
								style="purple"
								size="md"
								className="w-100 mb-3"
								onClick={handleBtnClick}
								type="submit">
								Calculate
							</Buttons>
						</Stack>
					</Form>
				</Row>
			</Container>
		</PageWrapper>
	);
};

export default LoanCalculator;
