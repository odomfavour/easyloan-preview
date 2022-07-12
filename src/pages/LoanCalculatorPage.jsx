import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { LoanCalculator } from "../components/index";
import PageWrapper from "../layouts/page_wrapper/PageWrapper";

const LoanCalculatorPage = () => {
	return (
		<PageWrapper>
			<Container className="pt-4">
				<Row className="d-flex ">
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
			</Container>
			<LoanCalculator bgColor="bg-gray" />
		</PageWrapper>
	);
};

export default LoanCalculatorPage;
