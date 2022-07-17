import React from 'react';
import { Outlet } from "react-router-dom";
import UserDashboardWrapper from "../layouts/UserDashboardWrapper/UserDashboardWrapper"
import UserHome from "../components/UserHome";

const UserDashboard = () => {
  return (
    <div>
        <UserDashboardWrapper />
        <div className='layout-outlet'>
          <Outlet/>
          <UserHome />
        </div>
    </div>
  )
}

export default UserDashboard