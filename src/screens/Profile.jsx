import React from "react";
import ProfilePage from "../components/ProfilePage";
import Sidebar from "../components/Sidebar";

const ProfileScreen = () => {
  return (
    <div className='bg-gray-100'>
      <div className='relative flex flex-no-wrap'>
        <Sidebar index={3} />
        <ProfilePage />
      </div>
    </div>
  );
};

export default ProfileScreen;
