import React from "react";
import { useState, useEffect } from "react";
import { Image, Modal } from "react-bootstrap";
import Buttons from "../../components/Buttons";

const SuccessModal = ({
	btnsetter,
	imgs,
	iterateBtn,
	btnOne,
	btnTwo,
	message,
	btnOneClick,
	btnTwoClick,
}) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(btnsetter);
	}, [iterateBtn]);

	const handleClose = () => setShow(false);

	return (
		<div>
			<Modal show={show} onHide={handleClose} className="bg-transparent pt-5">
				<div>
					<Modal.Header
						className="justify-content-center border-bottom-0"
						closeButton></Modal.Header>
					<Modal.Body className="d-flex justify-content-center">
						<div className="d-flex flex-column">
							<Image src={imgs} alt="success screen image" />
							<p className="mt-3 text-center">{message}</p>
							<div className="d-flex flex-column">
								{btnOne[0] && (
									<Buttons variant="purple" className="w-100 my-3" onClick={btnOneClick}>
										{btnOne[1]}
									</Buttons>
								)}
								{btnTwo[0] && (
									<Buttons variant="outline-secondary" className="w-100 my-3" onClick={btnTwoClick}>
										{btnTwo[1]}
									</Buttons>
								)}
							</div>
						</div>
					</Modal.Body>
				</div>
			</Modal>
		</div>
	);
};

export default SuccessModal;
