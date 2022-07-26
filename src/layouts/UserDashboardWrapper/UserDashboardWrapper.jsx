import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import SidebarMenu from "../../components/SidebarMenu";
// import SideBar from "../../components/SideBar";

export default function UserDashboardWrapper({ children }) {
  const [show, setShow] = useState(false);
  const handleMenu = () => setShow(!show);

  return (
    <>
      <div>
        <div className="d-none d-lg-block">
          <div className="dashboard position-fixed top-0 start-0 side-height menu-margin ">
            <SidebarMenu/>
          </div>
        </div>
        <div className="d-lg-none">
          <div className="shadow-sm py-2  top-0 ">
            <Navbar bg="white" variant="light" fixed="top">
              <Container>
                <Nav className="w-100 justify-content-between align-items-center">
                  <Nav.Link>
                    <List
                      className="text-primary"
                      size={30}
                      onClick={handleMenu}
                    />
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
            <div>
              {show ? (
                <div className="dashboard-mobile  btn-blue h-100 overflow-auto position-fixed start-0 top-0">
                  <SidebarMenu />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="main-content space-on-mobile">{children}</div>
    </>
  );
}
