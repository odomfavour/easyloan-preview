import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import { LandingPage, LoanCalculator } from "./pages/Index";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/loancalc" element={<LoanCalculator />} />
		</Routes>
	);
}

export default App;
