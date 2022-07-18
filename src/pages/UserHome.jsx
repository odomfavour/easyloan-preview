import React from 'react';
import SearchBar from '../components/SearchBar';
import UserHomeContent from "../components/UserHomeContent"

const UserHome = () => {
  return (
    <div >
      <SearchBar placeholder="Search" data=""/>
      <UserHomeContent /> 
    </div>
  )
}

export default UserHome