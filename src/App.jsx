import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import styled from "styled-components";

import { LoanStatus, UserDashboard} from "./components/index";
import {
	LandingPage,
	LoanCalculatorPage,
	Faqs,
	Register,
	VerifyEmail,
	Login,
	PersonalDetails,
	HowItWorks,
	AboutUs,
	AddBusiness,
	UploadDocs,
	LoanApplication,
	BusinessDetails,
	ReviewApplication,
	UploadDocuments,
	UserHome,
	ProfilePage,
  ContactPage,
  DashboardContactPage,
} from "./pages/Index";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/loan-calculator" element={<LoanCalculatorPage />} />
			<Route path="/faqs" element={<Faqs />} />
			<Route path="/dashboard" element={<UserDashboard />}>
				<Route path="/dashboard/user" element={<UserHome />} />
				<Route path="/dashboard/profile" element={<ProfilePage />} />
				<Route path="/dashboard/status" element={<LoanStatus />} />
				<Route path="/dashboard/contact" element={<DashboardContactPage />} />
			</Route>
			<Route path="/application" element={<LoanApplication />} />
			<Route path="/businessDetails" element={<BusinessDetails />} />
			<Route path="/register" element={<Register />} />
			<Route path="/verify" element={<VerifyEmail />} />
			<Route path="/login" element={<Login />} />
			<Route path="/how" element={<HowItWorks />} />
			<Route path="/About" element={<AboutUs />} />
			<Route path="/detail" element={<PersonalDetails />} />
			<Route path="/add-business" element={<AddBusiness />} />
			{/*Uploading CAC documents for ADDING A BUSINESS */}
			<Route path="/upload-documents" element={<UploadDocs />} />
			<Route path="/review-application" element={<ReviewApplication />} />
			{/*Uploading documents for LOAN APPLICATION */}
			<Route path="/upload-business-docs" element={<UploadDocuments />} />
      <Route path="/contact" element={<ContactPage />} />
			<Route
				path="*"
				element={
					<Div>
						<h1> Sorry Page Not Found</h1>
					</Div>
				}
			/>
		</Routes>
	);
}

const Div = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 40px;
	font-weight: 700;
`;
export default App;
