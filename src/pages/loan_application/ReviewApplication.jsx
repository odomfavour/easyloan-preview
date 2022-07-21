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

  // const [productDetails, sesetProductDetails] = useState({});
  // useEffect(() => {
  //   const productDetails = JSON.parse(localStorage.getItem("productDetails"));
  //   sesetProductDetails(productDetails);
  // }, [])
  

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
								<Col className="px-0 ">
									<Buttons
										variant="purple"
										className="mt-4 w-100"
										type="submit"
										onClick={setSuccessModal}>
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
						</Col>
					</Row>
				</Container>
			</PageWrapperV2>
		</>
	);
};

export default ReviewApplication;
