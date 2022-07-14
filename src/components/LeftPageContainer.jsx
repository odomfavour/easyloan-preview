import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import insertImg from "../assets/insert-img.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
const LeftPageContainer = () => {
	return (
		<>
			<Row className="mb-4">
				<Col>
					<img src={insertImg} alt="" className="w-75" />
				</Col>
			</Row>

			<Row className="mb-3">
				<Col>
					<span>
						<Button variant="outline-primary" className="w-75">
							Upload Profile Image
						</Button>
					</span>
				</Col>
			</Row>
			<Row className="mb-3">
				<Col>
					<span>
						<img src={frame1} alt="" className="w-75" />
					</span>
				</Col>
			</Row>
			<Row className="mb-3">
				<Col>
					<img src={frame2} alt="" className="w-75" />
				</Col>
			</Row>
		</>
	);
};

export default LeftPageContainer;
