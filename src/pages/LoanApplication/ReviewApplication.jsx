import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Stack } from "react-bootstrap";

import PageWrapperV2 from "../../layouts/no_footer_layout/PageWrapperV2";
import { Buttons } from "../../components";
import SuccessModal from "../../components/successModal.jsx/SuccessModal";
import { useAppContext } from "../../context/context";

import successScreen from "../../assets/successScreen.svg";

const ReviewApplication = () => {
	const navigate = useNavigate();
	const { loanForm, user } = useAppContext();

	const [toggleModal, setToggleModal] = useState(false);
	const [iterator, setIterator] = useState(false);

	const setSuccessModal = () => {
		setToggleModal(true);
		setIterator(!iterator);
	};

	const navigateToDashboard = () => {
		navigate("/dashboard/user");
	};

	const addToStorage = () => {
		// get existing user data from local storage
		let data = JSON.parse(localStorage.getItem("user"));
		// add new business data to the object
		data.loanApplication
			? data.loanApplication.push(loanForm)
			: (data.loanApplication = [loanForm]);
		// save back to local storage
		localStorage.setItem("user", JSON.stringify(data));
	};

	const handleSubmit = () => {
		addToStorage();
		setSuccessModal();
	};

	const message = [
		"Congratulations",
		<br key="0" />,
		"Your application has been sent successfully",
	];

	return (
		<>
			<style type="text/css">
				{`
          .box-shadow{
            box-shadow: 0px 4px 5px rgba(145, 36, 212, 0.03);
          }
          .heading-2{
            font-size: 1.5rem;
          }
        `}
			</style>
			<PageWrapperV2>
				<Container className="fw-bold d-flex flex-column px-4">
					<Stack>
						<h1 className="heading fw-bold mt-3">Loan Application</h1>
						<p className="muted-text">Review your application</p>
					</Stack>
					<Row className="align-self-center w-100 pt-4 pb-5">
						<Col lg={4} className="m-auto">
							<Row>
								<Col className="bg-gray rounded box-shadow px-5 py-4 ">
									<Stack>
										<h2 className="heading-2 fw-bold mb-4">Product Details</h2>
										<p>Company: {loanForm.nameOfCompany}</p>
										{/* <p>Business Address: {`${user.business[0].street}, ${user.business[0].busStop}, ${user.business[0].lga}, ${user.business[0].state}`}</p> */}
										<p>Business Email: {loanForm.companyEmail}</p>
										{/* <p>Business Registration Number: {user.business[0].regNumber}</p> */}
										{/* <p>Product: {loanForm.name} </p> */}
										<p>Product Category: {loanForm.category}</p>
										<p>Product Amount: {loanForm.totalLPO}</p>
										<p>Management Fee: {loanForm.mgtFee}</p>
										<p>Duration/Tenure (Loan): {loanForm.loanTenure} Months</p>
										<p>Total Loan Amount: {`N${loanForm.totalLoanAmt}`}</p>
										<p>Down Payment: {`N${loanForm.downPayment}`}</p>
										<p>Monthly Repayment: {`N${loanForm.monthlyPayment}`}</p>
										<p>Interest Rate: {`N${loanForm.interest}%`}</p>
										<p>Loan Approved: {`N${loanForm.loanApproved}`}</p>
										<p>Repayment Option: {loanForm.repaymentPlan}</p>
									</Stack>
								</Col>
							</Row>
							<Row>
								<Col className="px-0 ">
									<Buttons
										variant="purple"
										className="mt-4 w-100"
										type="submit"
										onClick={handleSubmit}>
										Submit Application
									</Buttons>
								</Col>
							</Row>
							<SuccessModal
								btnsetter={toggleModal}
								iterateBtn={iterator}
								imgs={successScreen}
								btnOne={[true, "Go to Dashboard/user"]}
								btnTwo={[false, ""]}
								message={message}
								btnOneClick={navigateToDashboard}
							/>
						</Col>
					</Row>
				</Container>
			</PageWrapperV2>
		</>
	);
};

export default ReviewApplication;
