import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import UserDashboard from "./components/UserDashboard";
import UserHome from "./pages/UserHome";
import { LandingPage, LoanCalculatorPage, Faqs, Register, Login } from "./pages/Index";
import UserHomeContent2 from "./components/UserHomeContent2";
import UserHomeLoan from "./components/UserHomeLoan";
import UserProfileContent from "./components/UserProfileContent";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/loancalc" element={<LoanCalculatorPage />} />
			<Route path="/faqs" element={<Faqs />} />
			<Route path="/dashboard" element={<UserDashboard />} >
				<Route path="/dashboard/user" element={<UserHome />} />
				<Route path="/dashboard/user2" element={<UserHomeContent2 />} />
				<Route path="/dashboard/user3" element={<UserHomeLoan />} />
				<Route path="/dashboard/profile" element={<UserProfileContent />} />
        	</Route>
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default App;
