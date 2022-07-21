import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Stack } from "react-bootstrap";

import PageWrapperV2 from "../../layouts/no_footer_layout/PageWrapperV2";
import { Buttons } from "../../components";
import SuccessModal from "../../components/successModal.jsx/SuccessModal";

import successScreen from "../../assets/successScreen.svg";

const ReviewApplication = () => {
	const navigate = useNavigate();

	const [toggleModal, setToggleModal] = useState(false);
	const [iterator, setIterator] = useState(false);

	const setSuccessModal = () => {
		setToggleModal(true);
		setIterator(!iterator);
	};

	const navigateToDashboard = () => {
		navigate("/dashboard/user");
	};

  const message = ["Congratulations", <br />, "Your application has been sent successfully"];

	return (
		<>
			<PageWrapperV2>
				<Container>
					<Row>
						<Col>
							<Stack>
								<h2 className="">Product Details</h2>
								<p>Business Name: Lyd & Ste Limited</p>
								<p>Business Address: 12, Favourite Street, Osapa, Lekki Phase 1, Lagos</p>
								<p>Business Email Address: info@lyd&ste.com</p>
								<p>Business Registration Number: RC 345533</p>
								<p>Product : 2,000 Packs of Paracetamol </p>
								<p>Product Category Food & Drugs</p>
								<p>Product Amount: 1,000,000</p>
								<p>Management Fee (5%): 50, 000</p>
								<p>Duration/Tenure (Loan): 2 Months</p>
								<p>Total Loan Amount: N1,050,000</p>
								<p>Down Payment: N315,000</p>
								<p>Monthly Repayment: N380, 363</p>
								<p>Interest Rate: 21%</p>
								<p>Loan Approved: N737,625</p>
								<p>Repayment Option: Monthly</p>
							</Stack>
						</Col>
					</Row>
					<Row>
						<Col>
							<Buttons variant="purple" className=" w-100" type="submit" onClick={setSuccessModal}>
								Submit Application
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
			</PageWrapperV2>
		</>
	);
};

export default ReviewApplication;
