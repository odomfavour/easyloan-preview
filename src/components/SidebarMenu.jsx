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
      <>
      <style type="text/css">
        {`
        .btn-bgd {
          background-color: #fdfdfd;
          color: #ae2bff;
        }
        
        .side-btn {
          background-color: #ae2bff;
          color: #FDFDFD;
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
          <img src={logos} alt="logo" style={{height:"50px"}}/>
          </div>
        </div>
        <Nav defaultActiveKey="" className="flex-column">
            <Nav.Link as={Link} to={"/dashboard/user"}>
                <div className='border-0 side-btn '><ColumnsGap className="mx-4" /> 
                Home</div>
            </Nav.Link>
            <Nav.Link as={Link} to={"/dashboard/profile"}>
              <div className='border-0 side-btn '><Person className="mx-4" /> 
              Profile</div>
            </Nav.Link>
          <Nav.Link as={Link} to="">
            <div className='border-0 side-btn '><Check2Square className="mx-4" /> 
            Loan Status</div>
          </Nav.Link>
          <Nav.Link as={Link} to="" className="">
            <div className='border-0 side-btn'><People className="mx-4" /> 
            Refer a Friend</div>
          </Nav.Link>
          <Nav.Link as={Link} to="">
            <div className='border-0 side-btn '><QuestionCircle className="mx-4" /> 
            Help</div>
          </Nav.Link>
          <Nav.Link as={Link} to="">
            <div className='border-0 side-btn '><Gear className="mx-4" /> 
            Settings</div>
          </Nav.Link>
          <Nav.Link as={Link} to="">
            <div className='border-0 side-btn '><ShieldLock className="mx-4" /> 
            Privacy Policy</div>
          </Nav.Link>
          <Nav.Link as={Link} to=""  >
            <div className='border-0 side-btn '><BoxArrowRight className="mx-4" />
            Logout</div>
          </Nav.Link>
        </Nav>
      </div>
      </>
    );
  };
  export default SidebarMenu;
  