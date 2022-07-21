import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import UserDashboard from "./components/UserDashboard";
import UserHome from "./pages/UserHome";
import UserHomeContent2 from "./components/UserHomeContent2";
import UserHomeLoan from "./components/UserHomeLoan";
import UserProfileContent from "./components/UserProfileContent";
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
	AddBussiness,
	UploadDocs,
	ReviewApplication,
} from "./pages/Index";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/loan-calculator" element={<LoanCalculatorPage />} />
			<Route path="/faqs" element={<Faqs />} />
			<Route path="/dashboard" element={<UserDashboard />}>
				<Route path="/dashboard/user" element={<UserHome />} />
				<Route path="/dashboard/user2" element={<UserHomeContent2 />} />
				<Route path="/dashboard/user3" element={<UserHomeLoan />} />
				<Route path="/dashboard/profile" element={<UserProfileContent />} />
        	</Route>
			<Route path="/register" element={<Register />} />
			<Route path="/verify" element={<VerifyEmail />} />
			<Route path="/login" element={<Login />} />
			<Route path="/how" element={<HowItWorks />} />
			<Route path="/About" element={<AboutUs />} />
			<Route path="/detail" element={<PersonalDetails />} />
			<Route path="/add-bussiness" element={<AddBussiness />} />
			<Route path="/upload-documents" element={<UploadDocs />} />
			<Route path="/review-application" element={<ReviewApplication />} />
		</Routes>
	);
}

export default App;
