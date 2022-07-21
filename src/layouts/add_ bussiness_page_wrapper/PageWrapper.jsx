import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Header } from "../../components/index";

const PageWrapper = ({ children, other, title, desc, page }) => {
	return (
		<>
			<style type="text/css">
				{`

        `}
			</style>
			<Container className="p-0">
				<Header other={other} />
				<div className="px-3 px-md-0 mx-md-0">
					<Row className="px-lg-4">
						<Col className="pt-3 pt-md-5 pt-lg-2">
							<h1 className="fw-bold heading text-md-center  text-lg-start">{title}</h1>
						</Col>
					</Row>
					<Row className=" px-lg-4 fw-bold muted-text flex-md-column flex-lg-row">
						<Col>
							<p className="text-md-center text-lg-start ">{desc}</p>
						</Col>
						<Col className="d-none d-md-block pt-md-4 pt-lg-0">
							<p className="text-end">{`${page} of 2`}</p>
							<hr />
						</Col>
					</Row>
				</div>
			</Container>
			<section>{children}</section>
		</>
	);
};

export default PageWrapper;
