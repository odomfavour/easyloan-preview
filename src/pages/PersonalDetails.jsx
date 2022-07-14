import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import PageWrapperV2 from "../layouts/no_footer_layout/PageWrapperV2";
import PageComponent from "../components/PageComponent";
import LeftPageContainer from "../components/LeftPageContainer";
import RightPageContainer from "../components/RightPageContainer";
const PersonalDetails = () => {
	return (
		<PageWrapperV2 other="">
			<Container>
				<PageComponent />

				<div>
					<Row>
						<Col>
							<LeftPageContainer />
						</Col>
						<Col>
							<RightPageContainer />
						</Col>
					</Row>
				</div>
			</Container>
		</PageWrapperV2>
	);
};

export default PersonalDetails;
