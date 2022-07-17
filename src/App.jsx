import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import { LandingPage, LoanCalculatorPage, Faqs } from "./pages/Index";
import UserDashboard from "./pages/UserDashboard";
import UserHome from "./components/UserHome";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/loancalc" element={<LoanCalculatorPage />} />
			<Route path="/faqs" element={<Faqs />} />
			<Route path="/dashboard" element={<UserDashboard />} >
				<Route path="/dashboard/user" element={<UserHome />} />
        	</Route>
		</Routes>
	);
}

export default App;
