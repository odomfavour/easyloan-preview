import React from 'react';
import SearchBar from './SearchBar';
import UserHomeContent from "./UserHomeContent"

const UserHome = () => {
  return (
    <div >
      <SearchBar placeholder="Search" data=""/>
      <UserHomeContent /> 
    </div>
  )
}

export default UserHome