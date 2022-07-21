import React, { useState } from "react";
import { Buttons } from "../components/index";
import { Container, Col, Row, Form, Stack } from "react-bootstrap";
import EasyloanModal from "./easyloanmodal/EasyloanModal";

const LoanCalculator = ({ styles }) => {
	const [toggleModal, setToggleModal] = useState(false);
	const [iterator, setIterator] = useState(false);

	const [form, setForm] = useState({
		totalLPO: "",
		repaymentPlan: "",
		loanTenure: "",
	});
	const [interestRate, setInterestRate] = useState(10.5);

	const [loanOffer, setLoanOffer] = useState({}); // result of the calculation to be displayed on the loan offer popup

	let rangeValues = [null, null, 10.5, 12, 18];
	const handleInterestChange = (e) => {
		setInterestRate(rangeValues[e.target.value]);
	};

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
		setToggleModal(true);
		setIterator(!iterator);
	};

	function calculateLoan() {
		let { totalLPO, repaymentPlan, loanTenure } = form;
		totalLPO = Number(totalLPO);
		loanTenure = Number(loanTenure.split(" ")[0]);

		let mgtFee,
			totalLoanAmt,
			loanApproved,
			downPayment,
			monthlyInterestRate,
			monthlyInterestValue,
			monthlyPayment,
			weeklyPayment,
			repaymentAmount;

		// MANAGEMENT FEE
		// if LPO amount is less than 1,000,000, MF = 10% of LPO
		// if LPO amount is >= 1,000,000 and < 10,000,000, MF = 5%
		// if LPO amount is >= 10,000,000, MF = 500,000
		if (totalLPO < 1000000) {
			mgtFee = (10 / 100) * totalLPO;
		} else if (totalLPO >= 1000000 && totalLPO < 10000000) {
			mgtFee = (5 / 100) * totalLPO;
		} else if (totalLPO >= 10000000) {
			mgtFee = 500000;
		}

		// Total loan amount (TLA) = LPO Amount + Mgt Fee
		totalLoanAmt = totalLPO + mgtFee;

		// Loan approved (LA) = 70% TLA
		loanApproved = (70 / 100) * totalLoanAmt;

		// Down payment = TLA - LA
		downPayment = totalLoanAmt - loanApproved;

		// Interest rate per month %
		// 10.5% = 1.75% per month
		// 12% = 2% per month
		// 18% = 3% per month
		switch (interestRate) {
			case 10.5:
				monthlyInterestRate = 1.75;
				break;
			case 12:
				monthlyInterestRate = 2;
				break;
			case 18:
				monthlyInterestRate = 3;
				break;

			default:
				break;
		}

		// Interest per month in Naira
		// (Interest rate/100) * Loan Approved
		monthlyInterestValue = (monthlyInterestRate / 100) * loanApproved;

		// Monthly repayment
		// = (LA/Loan tenure) + Interest per month in Naira
		monthlyPayment = loanApproved / loanTenure + monthlyInterestValue;

		// Weekly repayment
		// = Monthly repayment / 2
		weeklyPayment = monthlyPayment / 4;

		switch (repaymentPlan) {
			case "Monthly":
				repaymentAmount = Math.round(monthlyPayment);
				break;

			case "Weekly":
				repaymentAmount = Math.round(weeklyPayment);
				break;

			case "One-off":
				repaymentAmount = loanApproved;
				break;

			default:
				break;
		}

		if (repaymentPlan === "Monthly" && loanTenure === 1) {
			repaymentPlan = "One-off";
		}

		setLoanOffer({
			...loanOffer,
			totalLPO: totalLPO,
			mgtFee: mgtFee,
			totalLoanAmt: totalLoanAmt,
			loanTenure: loanTenure,
			interest: monthlyInterestRate,
			loanApproved: loanApproved,
			downPayment: downPayment,
			monthlyPayment: repaymentAmount,
			repaymentPlan: repaymentPlan,
		});
	}

	return (
		<>
			<style type="text/css">
				{`
          .box-shadow{
            box-shadow: 0px 4px 5px rgba(145, 36, 212, 0.03) !important;
          }
          .fs-0{
            font-size: 0.5rem;
          }
          .form{
            border-radius: 16px;
          }

          // Input Range
          .form-range{}

          .form-range::-webkit-slider-thumb, .form-range::-webkit-slider-thumb:active {
            background-color: var(--purple);
          }

          .form-range::-webkit-slider-runnable-track {
            background-color: #D9D9D9;
          }

          .form-range::-moz-range-thumb {
            background-color: var(--purple);
          }

          .form-range::-moz-range-thumb:active {
            background-color: var(--purple);
          }

          .form-select::placeholder{
            color: #d0d0d0 !important;
          }

          .form-select::-webkit-input-placeholder {
            color: #d0d0d0 !important;
          }


          // MOBILE VIEW
          @media (max-width: 575.98px) {
            .form-label{
              margin-bottom: 0.8rem;
            }

            .box-shadow{
              box-shadow: none !important;
            }
          }

          @media (max-width: 420px) {
            .form-wrap{
              padding: 0 !important;
            }
            .form{
              padding-left: 1rem !important;
              padding-right: 1rem !important;
            }
          }

        `}
			</style>

			<Container className="pb-5 pb-md-0 pt-md-4 px-0">
				<Row className="d-flex align-items-center justify-content-center px-4 px-md-0 form-wrap">
					<Form className={` col col-lg-4 px-md-5 pt-4 pb-3 ${styles} box-shadow form`}>
						<Stack>
							<Form.Group controlId="totalLPO">
								<Form.Label className="fw-bold">Total LPO Amount</Form.Label>
								<Form.Control
									type="text"
									name="totalLPO"
									value={form.totalLPO}
									onChange={handleChange}
									placeholder="N100,000"
								/>
							</Form.Group>

							<Form.Group controlId="repaymentPlan">
								<Form.Label className="fw-bold">Repayment Plan</Form.Label>
								<Form.Select
									name="repaymentPlan"
									value={form.repaymentPlan}
									onChange={handleChange}
									aria-label="Repayment Option"
                  placeholder="Select Repayment Option"
									className="">
									<option value="Select your repayment plan" className="d-none option1">
										Select your repayment plan
									</option>
									<option value="One-off">One-off</option>
									<option value="Weekly">Weekly</option>
									<option value="Monthly">Monthly</option>
								</Form.Select>
							</Form.Group>

							<Form.Group controlId="loanTenure">
								<Form.Label className="fw-bold">Duration/Tenure (Loan)</Form.Label>
								<Form.Select
									aria-label="Repayment Option"
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
								<Form.Label className="fw-bold">Interest Rate</Form.Label>
								<Form.Range
									name="interestRate"
									min={0}
									max={4}
									step={1}
									onChange={handleInterestChange}
								/>
								<Container className="d-grid text-end ps-5 pe-3 fw-bold" style={{ color: "#000", fontSize: "1rem" }}>
									<Row>
										<Col className="p-0"></Col>
										<Col className="p-0 ">10.5%</Col>
										<Col className="p-0">12%</Col>
										<Col className="p-0">18%</Col>
									</Row>
								</Container>
							</Form.Group>

							<p className="fw-bold">
								Please note that your terms are subjected to change after review by our Financiers
							</p>

							<Buttons
								variant="purple"
								size="md"
								className="w-100 mb-3 py-2"
								onClick={handleBtnClick}
								type="submit">
								Calculate
							</Buttons>
							<EasyloanModal btnsetter={toggleModal} iterateBtn={iterator} loanOffer={loanOffer} />
						</Stack>
					</Form>
				</Row>
			</Container>
		</>
	);
};

export default LoanCalculator;
