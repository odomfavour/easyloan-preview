import React from 'react';
import { Outlet } from "react-router-dom";
import UserDashboardWrapper from "../layouts/UserDashboardWrapper/UserDashboardWrapper"

const UserDashboard = () => {
  return (
    <div>
        <UserDashboardWrapper />
        <div className='layout-outlet'>
          <Outlet/>
        </div>
    </div>
  )
}

export default UserDashboard