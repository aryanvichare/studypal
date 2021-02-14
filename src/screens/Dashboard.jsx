import React from "react";
import CreateStudyGuide from "../components/CreateStudyGuide";
import Sidebar from "../components/Sidebar";

const DashboardScreen = () => {
  return (
    <div className='bg-gray-100'>
      <div className='relative flex flex-no-wrap'>
        <Sidebar index={1} />
        <CreateStudyGuide />
      </div>
    </div>
  );
};

export default DashboardScreen;
