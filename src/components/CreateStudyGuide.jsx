import React, { useState } from "react";
import InsertFiles, { Uploader } from "../screens/InsertFiles";
import DashboardNavigation from "./DashboardNavigation";
import { useSelector } from "react-redux";
import CreateStudyGuideModal from "../components/CreateStudyGuideModal";

const SupportedFileFormatList = () => {
  return (
    <ul className='inline-flex flex-row space-x-2'>
      <li className='text-red-700 bg-red-300 text-sm px-2 rounded-full'>
        .png
      </li>
      <li className='text-green-700 bg-green-300 text-sm px-2 rounded-full'>
        .jpg
      </li>
      <li className='text-blue-700 bg-blue-300 text-sm px-2 rounded-full'>
        .jpeg
      </li>
      <li className='text-purple-700 bg-purple-300 text-sm px-2 rounded-full'>
        .pdf
      </li>
      <li className='text-yellow-700 bg-yellow-300 text-sm px-2 rounded-full'>
        .wav
      </li>
    </ul>
  );
};

const CreateStudyGuide = ({ history }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const user = useSelector((state) => state.user);
  const {
    userInfo: { files },
  } = user;

  return (
    <div className='w-full'>
      <DashboardNavigation title='Create Study Guide' />
      <div className='px-6 py-6'>
        <div className='rounded shadow bg-white px-6 py-8'>
          <h1 className='text-2xl font-semibold mb-2'>
            Upload Images from your Textbook
          </h1>
          <p className='text-base text-gray-700 md:text-md'>
            Please upload an image of your textbook or study material
          </p>
          <div className='mt-2'>
            <span className='font-semibold text-md text-gray-400 mr-2'>
              * Supported Formats:
            </span>
            <SupportedFileFormatList />
          </div>
          <div className='my-8'>
            <InsertFiles />
          </div>
          {files && files.length > 0 && (
            <button
              onClick={() => setModalOpen(true)}
              className='ml-2 inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md'>
              Create Study Guide
            </button>
          )}
        </div>
      </div>
      {modalOpen && (
        <CreateStudyGuideModal history={history} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default CreateStudyGuide;
