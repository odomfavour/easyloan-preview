import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Buttons from "../../components/Buttons";

const LoanCard = ({ loanStatus, id, dateApplied, dateIssued, paymentDate, amount }) => {
	return (
		<>
			<style type="text/css">{`
        .loan-card {
          border-radius: 16px;
        }
        .loan-card h1 {
          font-size: 1.25rem;
          font-size: 1rem;
        }
        .loan-card .btn{
          color: #8A8989;
        }
				.amt {
					font-size: 1.5rem;
				}
        .rounded{
          border-radius: 8px;
        }
        .loan-card{
          background-color: var(--gray-light);
        }
        .loan-card .card-body{
          background-color: #fff;
        }

        @media (max-width: 575.98px){
          .loan-card{
            background-color: #fff;
            box-shadow: 0px 4px 5px rgba(145, 36, 212, 0.03);
          }
          .loan-card .card-body{
            background-color: var(--gray-light);
          }
        }
			`}</style>

			<Container className="loan-card fw-bold p-md-5 mb-md-5">
				<Row className="d-flex justify-content-between align-items-center mb-3 top">
					<Col className="px-0">
						<h1 className="heading fw-bold m-0">Your Loan</h1>
					</Col>
					<Col className="d-flex justify-content-end ">
						<Buttons
							variant={loanStatus}
							className="fw-bold"
							style={{ borderRadius: "8px" }}
							type="button">{`${loanStatus} ${
							loanStatus === "Awaiting" ? "Approval" : ""
						}`}</Buttons>
					</Col>
				</Row>
				<Row className="pe-2 card-body">
					<Col className="rounded ">
						<Stack>
							<p>LPO ID: {id}</p>
							<p>Date applied: {dateApplied}</p>
							<p>Date Issued: {dateIssued}</p>
							<p>Next Repayment Date: {paymentDate}</p>
							<p className="fw-bold text-end heading amt">{amount}</p>
						</Stack>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default LoanCard;
