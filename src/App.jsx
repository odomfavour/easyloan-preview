import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import UserDashboard from "./pages/UserDashboard";
import UserHome from "./components/UserHome";
import { LandingPage, LoanCalculatorPage, Faqs, Register, Login } from "./pages/Index";


function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/loancalc" element={<LoanCalculatorPage />} />
			<Route path="/faqs" element={<Faqs />} />
			<Route path="/dashboard" element={<UserDashboard />} >
				<Route path="/dashboard/user" element={<UserHome />} />
        	</Route>
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default App;
