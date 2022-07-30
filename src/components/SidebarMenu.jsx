import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Nav, Modal, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import {
	BoxArrowRight,
	ColumnsGap,
	People,
	Check2Square,
	QuestionCircle,
	ShieldLock,
	Person,
	Gear,
} from "react-bootstrap-icons";
import logos from "../assets/eazylogo.svg";

const LogoutModal = ({ btnsetter, iterateBtn, handleLogOut }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(btnsetter);
	}, [iterateBtn]);

	const handleClose = () => setShow(false);

	return (
		<div className="mymodal">
			<Modal
				show={show}
				onHide={handleClose}
				className="bg-transparent d-flex justify-content-center align-items-center w-100">
				<div className="px-4 py-3">
					<Modal.Body className="d-flex justify-content-center">
						<div className="d-flex flex-column">
							<p className="mt-3 text-center fw-bold">
								Are you sure you want to log out of Eazyloan?
							</p>
							<div className="d-flex justify-content-evenly">
								<div className="col-5">
									<Buttons variant="purple" className="w-100 my-3" onClick={handleClose}>
										Cancel
									</Buttons>
								</div>
								<div className="col-5">
									<Buttons
										variant="outline-secondary"
										className="w-100 my-3"
										onClick={handleLogOut}>
										Log Out
									</Buttons>
								</div>
							</div>
						</div>
					</Modal.Body>
				</div>
			</Modal>
		</div>
	);
};

const SidebarMenu = () => {
	const [toggleModal, setToggleModal] = useState(false);
	const [iterator, setIterator] = useState(false);
	const navigate = useNavigate();

	const handleLogOut = () => {
		navigate("/");
	};

	const handleClickLogout = () => {
		setToggleModal(true);
		setIterator(!iterator);
	};

	return (
		<>
			<style type="text/css">
				{`
					.side-btn {
						background-color: #ae2bff;
						color: #fdfdfd;
						border-radius: 5px;
						padding-top: 8px;
						padding-bottom: 8px;
						width: 180px;
					}
				`}
			</style>
		<div className="menu pb-5 ">
			<div className="text-center pt-5 pb-4">
				<div>
					<img src={logos} alt="logo" style={{ height: "50px" }} />
				</div>
			</div>
			<Nav defaultActiveKey="active" className="flex-column">
				<Nav.Link as={Link} to={"/dashboard/user"} className="side-btn mb-3">
					<div className="border-0 ">
						<ColumnsGap className="mx-4" />
						Home
					</div>
				</Nav.Link>
				<Nav.Link as={Link} to={"/dashboard/profile"} className="side-btn mb-3">
					<div className="border-0 ">
						<Person className="mx-4" />
						Profile
					</div>
				</Nav.Link>
				<Nav.Link as={Link} to={"/dashboard/status"} className="side-btn mb-3">
					<div className="border-0 ">
						<Check2Square className="mx-4" />
						Loan Status
					</div>
				</Nav.Link>
				<Nav.Link className="side-btn mb-3">
					<div className="border-0 ">
						<People className="mx-4" />
						Refer a Friend
					</div>
				</Nav.Link>
				<Nav.Link className="side-btn mb-3">
					<div className="border-0 ">
						<QuestionCircle className="mx-4" />
						Help
					</div>
				</Nav.Link>
				<Nav.Link className="side-btn mb-3">
					<div className="border-0 ">
						<Gear className="mx-4" />
						Settings
					</div>
				</Nav.Link>
				<Nav.Link className="side-btn mb-3">
					<div className="border-0 ">
						<ShieldLock className="mx-4" />
						Privacy Policy
					</div>
				</Nav.Link>
				<Nav.Link onClick={handleClickLogout} className="side-btn">
					<div className="border-0 ">
						<BoxArrowRight className="mx-4" />
						Logout
					</div>
				</Nav.Link>
			</Nav>
			<LogoutModal btnsetter={toggleModal} iterateBtn={iterator} handleLogOut={handleLogOut} />
		</div>
		</>
	);
};
export default SidebarMenu;
