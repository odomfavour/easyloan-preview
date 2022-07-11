import React from "react";
import PageWrapper from "../layouts/page_wrapper/PageWrapper";
import { LoanCalculator } from "../components/index";

import { Container, Row, Col, Stack } from "react-bootstrap";

const LandingPage = () => {
	return (
		<PageWrapper>
			<Stack>
				<LoanCalculator />
			</Stack>
		</PageWrapper>
	);
};

export default LandingPage;
