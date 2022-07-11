import React from "react";
import PageWrapper from "../layouts/page_wrapper/PageWrapper";
import EasyloanModal from "../components/easyloanmodal/EasyloanModal"

import { Container, Row, Col, Button } from "react-bootstrap";
const LandingPage = () => {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<PageWrapper>
			<Container>
				landing

				<EasyloanModal/>

			</Container>
		</PageWrapper>
	);
};

export default LandingPage;
