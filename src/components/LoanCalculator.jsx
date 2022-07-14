import React, { useState } from "react";
import { Buttons } from "../components/index";
import { Container, Row, Col, Form, Stack } from "react-bootstrap";
import EasyloanModal from "./easyloanmodal/EasyloanModal";

const LoanCalculator = ({ bgColor }) => {
	const[toggleModal, setToggleModal] = useState(false)
	const[iterator, setIterator] = useState(false)

	const [form, setForm] = useState({
		lpoAmount: "",
		productQty: "",
		productValue: "",
		interestRate: 10.5,
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
		setToggleModal(true)
		setIterator(!iterator)
	};

	function calculateLoan() {
		let {
			lpoAmount: productAmount,
			interestRate: interest,
			downPayment,
			repaymentPlan,
			loanTenure,
		} = form;

		let totalLoanAmount, downPaymentRate, repaymentAmount, monthlyPayment, weeklyPayment, oneOffPayment;

		totalLoanAmount = (Number(interest) / 100) * Number(productAmount) + Number(productAmount);

		downPaymentRate = Number(downPayment.replace("%", ""));
		downPayment = (downPaymentRate / 100) * Number(productAmount);

		monthlyPayment = (totalLoanAmount - downPayment) / Number(loanTenure.split(" ")[0]);
		weeklyPayment = monthlyPayment / 4;

		switch (repaymentPlan) {
			case "Monthly":
				repaymentAmount = Math.round(monthlyPayment);
				break;

			case "Weekly":
				repaymentAmount = Math.round(weeklyPayment);
				break;

			case "One-off":
				repaymentAmount = oneOffPayment;
				break;

			default:
				break;
		}

		setLoanOffer({
			...loanOffer,
			productPrice: productAmount,
			interest: interest,
			downPayment: downPayment,
			repaymentPlan: repaymentPlan,
			loanTenure: loanTenure,
			totalLoanAmount: totalLoanAmount,
			repaymentAmount: repaymentAmount,
		});

		// console.log(loanOffer);
	}

	return (
		<Container className="pb-5 pt-4 px-0">
			<Row className="d-flex align-items-center justify-content-center px-5">
				<Form className={`border rounded col col-lg-4 px-lg-5 py-lg-4 ${bgColor}`}>
					<Stack gap={3}>
						<Form.Group controlId="lpoAmount">
							<Form.Label>Total LPO Amount</Form.Label>
							<Form.Control
								type="text"
								name="lpoAmount"
								value={form.lpoAmount}
								onChange={handleChange}
								placeholder="N100,000"
							/>
						</Form.Group>

						<Form.Group controlId="repaymentPlan">
							<Form.Label>Repayment Plan</Form.Label>
							<Form.Select
								defaultValue="Select your repayment plan"
								name="repaymentPlan"
								value={form.repaymentPlan}
								onChange={handleChange}
								aria-label="Repayment Option">
								<option value="Select your repayment plan" className="d-none">Select your repayment plan</option>
								<option value="One-off">One-off</option>
								<option value="Weekly">Weekly</option>
								<option value="Monthly">Monthly</option>
							</Form.Select>
						</Form.Group>

						<Form.Group controlId="loanTenure">
							<Form.Label>Duration/Tenure (Loan)</Form.Label>
							<Form.Select
								aria-label="Repayment Option"
								defaultValue="Select your repayment duration"
								name="loanTenure"
								value={form.loanTenure}
								onChange={handleChange}>
								<option value="Select your repayment duration" className="d-none">
									Select your repayment duration
								</option>
								<option value="1">1 Month</option>
								<option value="2">2 Months</option>
								<option value="3">3 Months</option>
								<option value="6">6 Months</option>
							</Form.Select>
						</Form.Group>

						<Form.Group controlId="interestRate">
							<Form.Label>Interest Rate</Form.Label>
							<Form.Range name="interestRate" value={form.interestRate} onChange={handleChange} />
						</Form.Group>

						<Buttons
							variant="purple"
							size="md"
							className="w-100 mb-3"
							onClick={handleBtnClick}
							type="submit">
							Calculate
						</Buttons>
						<EasyloanModal btnsetter={toggleModal} iterateBtn={iterator}/>
					</Stack>
				</Form>
			</Row>
		</Container>
	);
};

export default LoanCalculator;
