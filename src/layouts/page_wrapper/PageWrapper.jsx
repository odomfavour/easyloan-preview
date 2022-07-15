import React from "react";
import { Header } from "../../components/index";
import Footer from "../../components/Footer";

const PageWrapper = ({ children, other }) => {
	return (
		<>
			<Header other={other} />
			<section>{children}</section>
			<Footer />
		</>
	);
};

export default PageWrapper;
