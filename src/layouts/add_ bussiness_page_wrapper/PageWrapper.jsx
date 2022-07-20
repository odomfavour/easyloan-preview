import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { Header } from "../../components/index";

const PageWrapper = ({ children, other, title, desc, page }) => {
	return (
		<>
      <style  type="text/css">
        {`

        `}
      </style>
			<Stack>
				<Header other={other} />
				<Container>
					<Row>
						<Col className="pt-3">
							<h1 className="fw-bold heading">{title}</h1>
						</Col>
					</Row>
					<Row className="fw-bold muted-text">
						<Col>
							<p className="">{desc}</p>
						</Col>
						<Col className="d-none">
							<p className="text-end">{`${page} of 2`}</p>
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
