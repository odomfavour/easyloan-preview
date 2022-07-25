import React from "react";
import { Bell, ChevronDown } from "react-bootstrap-icons";
import img from "../../assets/img.jpg";
import { Container, Form, InputGroup, Navbar } from "react-bootstrap";
import { Footer, SearchBar } from "../../components/index";
import { useDesktop } from "../../pages/DesktopContext";

const PageWrapper = ({ children }) => {
	const { isDesktop } = useDesktop();

	return (
		<>
			<style>
				{`
        .user-searchbar .input-group-text {
          border-left: none;
          background-color: #fff;
          cursor: pointer;
        }
        .user-searchbar .form-control{
          border-right: none;
        }
        .rounded{
          border-radius: 8px;
        }
        `}
			</style>
			<SearchBar placeholder="Search" data="" />

			<div>
				{/* <Navbar className="user-searchbar p-4">
					<Container fluid className="px-0">
						<Navbar.Brand href="#" className="w-100 m-0">
							<Form className="d-flex ">
								<InputGroup>
									<Form.Control
										type="search"
										placeholder="Search"
										className="shadow-none px-4 py-3"
										aria-label="Search"
										style={{ maxWidth: "500px" }}
									/>
									<InputGroup.Text className=" bi bi-search px-4 py-3" />
								</InputGroup>
							</Form>
						</Navbar.Brand>
						<Form className="d-none d-md-flex">
							<div className="d-none d-sm-block">
								<Bell />
							</div>
							<div className="user-img-icon bg-secondary ms-4 me-1 ">
								<img src={img} alt="img" className="user-img-icon" />
							</div>
							<div className="d-none d-sm-block">
								<ChevronDown />
							</div>
						</Form>
					</Container>
				</Navbar> */}
				{children}
			</div>
			{!isDesktop && <Footer />}
		</>
	);
};

export default PageWrapper;
