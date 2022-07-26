import React, {useState} from 'react';
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
          <img src={logos} alt="logo" style={{height:"50px"}}/>
          </div>
        </div>
        <Nav defaultActiveKey="active" className="flex-column">
            <Nav.Link as={Link} to={"/dashboard/user"} className="side-btn mb-3">
                <div className='border-0 '>
                    <ColumnsGap className="mx-4" /> 
                Home</div>
            </Nav.Link>
            <Nav.Link as={Link} to={"/dashboard/profile"} className="side-btn mb-3">
              <div className='border-0 '>
                <Person className="mx-4" /> 
              Profile</div>
            </Nav.Link>
          <Nav.Link as={Link} to="" className="side-btn mb-3">
            <div className='border-0 '><Check2Square className="mx-4" /> 
            Loan Status</div>
          </Nav.Link>
          <Nav.Link as={Link} to="" className="side-btn mb-3">
            <div className='border-0 '><People className="mx-4" /> 
            Refer a Friend</div>
          </Nav.Link>
          <Nav.Link as={Link} to="" className="side-btn mb-3">
            <div className='border-0 '><QuestionCircle className="mx-4" /> 
            Help</div>
          </Nav.Link>
          <Nav.Link as={Link} to="" className="side-btn mb-3">
            <div className='border-0 '><Gear className="mx-4" /> 
            Settings</div>
          </Nav.Link>
          <Nav.Link as={Link} to="" className="side-btn mb-3">
            <div className='border-0 '><ShieldLock className="mx-4" /> 
            Privacy Policy</div>
          </Nav.Link>
          <Nav.Link as={Link} to=""  className="side-btn">
            <div className='border-0 '><BoxArrowRight className="mx-4" />
            Logout</div>
          </Nav.Link>
        </Nav>
      </div>
    );
  };
  export default SidebarMenu;
  