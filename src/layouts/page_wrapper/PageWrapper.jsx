import React from "react";
import { Header } from "../../components/index";

const PageWrapper = ({ children }) => {
	return (
		<>
			<Header />
			<section>{children}</section>
			{/* footer */}
		</>
	);
};

export default PageWrapper;
