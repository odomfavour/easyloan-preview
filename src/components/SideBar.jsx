import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
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

  const SideBar = () => {
    
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
        .link {
          display: flex;
          color: #FDFDFD;
          padding: 10px, 15px;
          gap: 15px;
          transition: all 0.5s;
        }
        .link:hover{
          background-color: #FDFDFD;
          color: #ae2bff;
          transition: all 0.5s;
        }    
        
        `}
      </style>
      <div className="menu pb-5 ">
        <div className="text-center pt-5 pb-4">
          <div>
          <img src={logos} alt="logo" style={{height:"50px"}}/>
          </div>
        </div>
        <div  className="flex-column">
            <NavLink as={Link} to={"/dashboard/user"} activeClassName="active" className="side-btn  link">
                <div className='border-0 '>
                    <ColumnsGap className="mx-4" /> 
                Home</div>
            </NavLink>
            <NavLink as={Link} to={"/dashboard/profile"} activeClassName="active" className="side-btn link">
              <div className='border-0 '>
                <Person className="mx-4" /> 
              Profile</div>
            </NavLink>
          <NavLink as={Link} to="" activeClassName="active" className="side-btn link">
            <div className='border-0 '><Check2Square className="mx-4" /> 
            Loan Status</div>
          </NavLink>
          <NavLink as={Link} to="" activeClassName="active" className="side-btn link">
            <div className='border-0 '><People className="mx-4" /> 
            Refer a Friend</div>
          </NavLink>
          <NavLink as={Link} to="" activeClassName="active" className="side-btn link">
            <div className='border-0'><QuestionCircle className="mx-4" /> 
            Help</div>
          </NavLink>
          <NavLink as={Link} to="" activeClassName="active" className="side-btn link">
            <div className='border-0'><Gear className="mx-4" /> 
            Settings</div>
          </NavLink>
          <NavLink as={Link} to="" activeClassName="active" className="side-btn link">
            <div className='border-0 '><ShieldLock className="mx-4" /> 
            Privacy Policy</div>
          </NavLink>
          <NavLink as={Link} to=""  activeClassName="active" className="side-btn link">
            <div className='border-0'><BoxArrowRight className="mx-4" />
            Logout</div>
          </NavLink>
        </div>
      </div>
      </>
    );
  };
  export default SideBar;
  

// const App = () => {
//   return (
//     <div className="app">
//       <Router>
//         <div className="nav">
//           <NavLink
//             to="users"
//             className={({ isActive }) => (isActive ? 'active' : 'inactive')}
//           >
//             Users
//           </NavLink>
