import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Stack } from "react-bootstrap";
import PageWrapper from "../layouts/UserDashboardWrapper/PageWrapper";
import { Buttons, Contact } from "../components/index";
import { ContactContext } from "../pages/ContactContext";

const DashboardContactPage = () => {
	const { setIsDashboard } = useContext(ContactContext);
	useEffect(() => {
		setIsDashboard(true);
	}, []);

	return (
		<>
			<style type="text/css">{`

      `}</style>
			<PageWrapper>
				<Stack>
					<div className="mt-5 bg-gray py-3 px-3 user-dash-color user-dashboard-content d-flex justify-content-between">
						<div>
							<h2 className="user-name-font">Hello Lydia Salami,</h2>
						</div>
						<Buttons className="fw-bold" variant="purple" as={Link} to={"/application"}>
							Apply for Loan
						</Buttons>
					</div>
					<Container fluid className="p-0">
						<Contact />
					</Container>
				</Stack>
			</PageWrapper>
		</>
	);
};

export default DashboardContactPage;
