import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

const EasyloanModal = ({ btnsetter, iterateBtn, loanOffer }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(btnsetter);
	}, [iterateBtn]);

	const handleClose = () => setShow(false);
	// eslint-disable-next-line no-unused-vars
	const handleShow = () => setShow(true);

	// get screen width
	const getWidth = () => {
		const { innerWidth: width } = window;
		return width;
	};
	const [screenWidth, setScreenWidth] = useState(getWidth());
	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(getWidth());
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
			return screenWidth;
		};
	}, []);
	const lefty = () => (getWidth() < 583 ? "30px" : "-5px");

	return (
		<>
			<Modal show={show} onHide={handleClose} className="bg-transparent pt-5">
				<div
					className=" position-absolute bg-transparent d-flex border-0 align-items-end mb-4"
					style={{ top: "-50px", right: `${lefty()}` }}>
					<div
						className=" btn-close bg-light border-0 fs-5 rounded-circle p-2 fw-bold text-secondary"
						style={{ marginRight: "-28px" }}
						onClick={() => setShow(false)}></div>
				</div>
				<div className="bg-red-500">
					<Modal.Header className="justify-content-center border-bottom-0">
						<Modal.Title>Loan Offer</Modal.Title>
					</Modal.Header>
					<Modal.Body className="d-flex justify-content-between">
						<div className="d-flex ">
							<ul className="list-group">
								<li className="list-group-item border-0 py-2">Product Amount</li>
								<li className="list-group-item border-0 py-3">Management Fee</li>
								<li className="list-group-item border-0 py-2" style={{ color: "var(--purple)" }}>
									Total Loan Amount
								</li>
								<li className="list-group-item border-0 py-3">Duration/Tenure (Loan)</li>
								<li className="list-group-item border-0 py-2">Interest Rate / Month</li>
								<li className="list-group-item border-0 py-3">Loan Approved</li>
								<li className="list-group-item border-0 py-2" style={{ color: "var(--purple)" }}>
									Down Payment
								</li>
								<li className="list-group-item border-0 py-3" style={{ color: "var(--purple)" }}>
									Repayment Amount
								</li>
								<li className="list-group-item border-0 py-2">Repayment Plan</li>
							</ul>
						</div>
						<div style={{ height: "auto", width: "1px", backgroundColor: "#DEE2E6" }}></div>
						<div>
							<ul className="list-group">
								<li className="list-group-item border-0 py-2">{`N${new Intl.NumberFormat().format(
									loanOffer.totalLPO,
								)}`}</li>
								<li className="list-group-item border-0 py-3">{`N${new Intl.NumberFormat().format(
									loanOffer.mgtFee,
								)}`}</li>
								<li
									className="list-group-item border-0 py-2"
									style={{ color: "var(--purple)" }}>{`N${new Intl.NumberFormat().format(
									loanOffer.totalLoanAmt,
								)}`}</li>
								<li className="list-group-item border-0 py-3">{`${loanOffer.loanTenure} months`}</li>
								<li className="list-group-item border-0 py-2">{`${loanOffer.interest}%`}</li>
								<li className="list-group-item border-0 py-3">{`N${new Intl.NumberFormat().format(
									loanOffer.loanApproved,
								)}`}</li>

								<li
									className="list-group-item border-0 py-2"
									style={{ color: "var(--purple)" }}>{`N${new Intl.NumberFormat().format(
									loanOffer.downPayment,
								)}`}</li>
								<li
									style={{ color: "var(--purple)" }}
									className="list-group-item border-0 py-3">{`N${new Intl.NumberFormat().format(
									loanOffer.monthlyPayment,
								)}`}</li>
								<li className="list-group-item border-0 py-2">{loanOffer.repaymentPlan}</li>
							</ul>
						</div>
					</Modal.Body>
					<div className="p-4">
						<Modal.Footer className="justify-content-center">
							<p>Additional changes have not been included in this offer</p>
						</Modal.Footer>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default EasyloanModal;
