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
			<style>
				{`
          .gray{
            background-color: rgba(145, 36, 212, 0.03);
          }
          .card-group{
            height: 60vh;
            padding-bottom: 6.5rem;
          }
        `}
			</style>
			<PageWrapper>
				<Container className="px-0 pb-5">
					<Stack gap={5} className="overflow-auto px-4 card-group">
						<LoanCard
							loanStatus={"Disbursed"}
							id={"22222222222"}
							dateApplied={"Thursday, June 23, 2022"}
							dateIssued={"Monday, June 27, 2022"}
							paymentDate={"Wednesday July 27, 2022"}
							amount={"N102,500"}
							styles="bg-light-gray "
						/>
						<LoanCard
							loanStatus={loanStatus}
							id={"22222222222"}
							dateApplied={"Thursday, June 23, 2022"}
							dateIssued={"Monday, June 27, 2022"}
							paymentDate={"Wednesday July 27, 2022"}
							amount={"N102,500"}
							styles="gray "
						/>
					</Stack>
					<Row className="py-5">
						<Col className="my-4 bg-gray px-4">
							<LaonHistoryTable />
						</Col>
					</Row>
				</Container>
			</PageWrapper>
		</>
	);
};

export default LoanStatus;
