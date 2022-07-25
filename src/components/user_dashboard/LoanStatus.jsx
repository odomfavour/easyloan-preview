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

          @media (max-width: 575.98px){
            .loan-status .card-group{
              overflow-y: scroll;
              height: 60vh;
              padding-bottom: 6.5rem;
            }
          }
        `}
			</style>
			<PageWrapper>
				<Container className="px-0 pb-5 loan-status">
					<Stack gap={5} className="px-4 card-group d-md-block">
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
					<Row className="py-5 py-md-0 px-md-4">
						<Col className="my-4 bg-gray px-4 p-md-5 mx-md-2 rounded">
							<LaonHistoryTable />
						</Col>
					</Row>
				</Container>
			</PageWrapper>
		</>
	);
};

export default LoanStatus;
