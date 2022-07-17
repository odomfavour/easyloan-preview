import React from 'react';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
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

  const SidebarMenu = () => {
    return (
      <div className="menu pb-5 ">
        <div className="text-center pt-5 pb-4">
          <div>
          <img src={logos} alt="logo" />
          </div>
        </div>
        <Nav defaultActiveKey="" className="flex-column">
            <Nav.Link as={Link} to={"/dashboard/user"}>
                <div className='user-btn pt-2'><ColumnsGap className="mx-4" /> Home</div>
            </Nav.Link>
            <Nav.Link as={Link} to="">
                <Person className="mx-4" /> Profile
            </Nav.Link>
          <Nav.Link as={Link} to="">
            <Check2Square className="mx-4" /> Loan Status
          </Nav.Link>
          <Nav.Link as={Link} to="">
            <People className="mx-4" /> Refer a Friend
          </Nav.Link>
          <Nav.Link as={Link} to="">
            <QuestionCircle className="mx-4" /> Help
          </Nav.Link>
          <Nav.Link as={Link} to="">
            <Gear className="mx-4" /> Settings
          </Nav.Link>
          <Nav.Link as={Link} to="">
            <ShieldLock className="mx-4" /> Privacy Policy
          </Nav.Link>
          <div className="py-3"></div>
          <Nav.Link as={Link} to="">
            <BoxArrowRight className="mx-4" />
            Logout
          </Nav.Link>
        </Nav>
      </div>
    );
  };
  export default SidebarMenu;
  