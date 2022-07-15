import React from "react";
import { Header } from "../../components/index";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";

const PageWrapper = ({ children, other }) => {
	return (
		<Container fluid className="p-0">
			<Header other={other} />
			<section>{children}</section>
			<Footer />
		</Container>
	);
};

export default PageWrapper;
