import React, { useState } from "react";
import { Container, Stack } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import PageWrapper from "../../layouts/UserDashboardWrapper/PageWrapper";
import LoanCard from "./LoanCard";
import LaonHistoryTable from "../../components/LoanHistoryTable";

const LoanStatus = () => {
	const [loanStatus, setLoanStatus] = useState("Awaiting");

	return (
		<>
			<style type="text/css">
				{`
          .gray{
            background-color: rgba(145, 36, 212, 0.03);
          }
          .loan-status .rounded{
            border-radius: 8px !important;
          }
          .loan-status .card-group{
            overflow-y: scroll;
            // height: 60vh;
            width: 50%;
            gap: 1.5rem;
          }
          .loan-status{
            padding-top: 2.5rem;
          }

          @media (max-width: 991.98px) {
            .loan-status .card-group{
              width: 100%;
              overflow: hidden;
              gap: 3rem;
            }
          }

          @media (max-width: 575.98px){
            .loan-status .card-group{
              overflow-y: scroll;
              // height: 99vh;
            }
          }
        `}
			</style>
			<PageWrapper>
				<Container fluid className="px-0 pb-2  loan-status">
					<Stack className="px-4 px-lg-3 card-group d-md-block d-lg-flex">
						<LoanCard
							loanStatus={"Disbursed"}
							id={"22222222222"}
							dateApplied={"Thursday, June 23, 2022"}
							dateIssued={"Monday, June 27, 2022"}
							paymentDate={"Wednesday July 27, 2022"}
							amount={"N102,500"}
						/>
						<LoanCard
							loanStatus={loanStatus}
							id={"22222222222"}
							dateApplied={"Thursday, June 23, 2022"}
							dateIssued={"Monday, June 27, 2022"}
							paymentDate={"Wednesday July 27, 2022"}
							amount={"N102,500"}
						/>
					</Stack>
					<Row className="py-5 py-md-0 pt-lg-4 px-md-4 px-lg-0">
						<Col className="my-4 mb-lg-0 bg-gray px-4 p-md-5 mx-md-2 rounded">
							<LaonHistoryTable />
						</Col>
					</Row>
				</Container>
			</PageWrapper>
		</>
	);
};

export default LoanStatus;
