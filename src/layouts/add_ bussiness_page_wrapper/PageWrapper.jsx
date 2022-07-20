import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { Header } from "../../components/index";

const PageWrapper = ({ children, other, title, desc, page }) => {
	return (
		<>
			<Stack>
				<Header other={other} />
				<Container>
					<Row>
						<Col>
							<h1>{title}</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<p className="text-muted">{desc}</p>
						</Col>
						<Col>
							<p className="text-muted text-end">{`${page} of 2`}</p>
							<hr />
						</Col>
					</Row>
				</Container>
			</Stack>
			<section>{children}</section>
		</>
	);
};

export default PageWrapper;
