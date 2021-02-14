import React from "react";
import CommunityPage from "../components/CommunityPage";
import Sidebar from "../components/Sidebar";

const CommunityScreen = () => {
  return (
    <div className='bg-gray-100'>
      <div className='relative flex flex-no-wrap'>
        <Sidebar index={2} />
        <CommunityPage />
      </div>
    </div>
  );
};

export default CommunityScreen;
