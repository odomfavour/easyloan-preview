import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import PageWrapperV2 from "../layouts/no_footer_layout/PageWrapperV2";
import PageComponent from "../components/PageComponent";
import LeftPageContainer from "../components/LeftPageContainer";
import RightPageContainer from "../components/RightPageContainer";
import { useDesktop } from "./DesktopContext";
import { useNavigate } from "react-router-dom";

const PersonalDetails = () => {
	const { isDesktop } = useDesktop();
	const [page, setPage] = useState(0);

	const navigate = useNavigate();

	const conditionalComponent = () => {
		switch (page) {
			case 0:
				return <RightPageContainer page={page} setPage={setPage} />;
			case 1:
				return <LeftPageContainer setPage={setPage} page={page} />;

			default:
				return <RightPageContainer page={page} setPage={setPage} />;
		}
	};

	return (
		<PageWrapperV2 other="">
			<Container fluid>
				<PageComponent />

				<div>
					{isDesktop ? (
						<Row>
							<Col xs={5}>
								<LeftPageContainer />
							</Col>
							<Col xs={6}>
								<RightPageContainer />
							</Col>
						</Row>
					) : (
						<Col xs={12}>{conditionalComponent()}</Col>
					)}
				</div>
			</Container>
		</PageWrapperV2>
	);
};

export default PersonalDetails;
