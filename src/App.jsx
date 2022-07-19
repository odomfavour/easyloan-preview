import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import UserDashboard from "./components/UserDashboard";
import UserHome from "./pages/UserHome";
import {
	LandingPage,
	LoanCalculatorPage,
	Faqs,
	Register,
	VerifyEmail,
	Login,
	PersonalDetails,
	HowItWorks,
	AboutUs
} from "./pages/Index";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/loan-calculator" element={<LoanCalculatorPage />} />
			<Route path="/faqs" element={<Faqs />} />
			<Route path="/dashboard" element={<UserDashboard />} />
			<Route path="/dashboard/user" element={<UserHome />}/>
			<Route path="/register" element={<Register />} />
			<Route path="/verify" element={<VerifyEmail />} />
			<Route path="/login" element={<Login />} />
			<Route path="/how" element={<HowItWorks />} />
			<Route path="/About" element={<AboutUs />} />
		</Routes>
	);
}

export default App;
