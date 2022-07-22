import React from 'react';
import UserProfileContent from "../components/UserProfileContent"
import SearchBar from "../components/SearchBar";

const ProfilePage = () => {
  return (
    <div>
      <SearchBar placeholder="Search" data=""/>
      <UserProfileContent />
    </div>
  )
}

export default ProfilePage