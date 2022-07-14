import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import { LandingPage, LoanCalculatorPage, Faqs, Register, PersonalDetails } from "./pages/Index";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/loancalc" element={<LoanCalculatorPage />} />
			<Route path="/faqs" element={<Faqs />} />
			<Route path="/register" element={<Register />} />
			<Route path="/register" element={<Register />} />
			<Route path="/personal" element={<PersonalDetails />} />
		</Routes>
	);
}

export default App;
