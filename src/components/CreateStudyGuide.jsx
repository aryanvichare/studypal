import React from "react";
import InsertFiles, { Uploader } from "../screens/InsertFiles";
import DashboardNavigation from "./DashboardNavigation";
import { useSelector } from "react-redux";

const SupportedFileFormatList = () => {
  return (
    <ul class='inline-flex flex-row space-x-2'>
      <li class='text-red-700 bg-red-300 text-sm px-2 rounded-full'>.png</li>
      <li class='text-green-700 bg-green-300 text-sm px-2 rounded-full'>
        .jpg
      </li>
      <li class='text-blue-700 bg-blue-300 text-sm px-2 rounded-full'>.jpeg</li>
      <li class='text-purple-700 bg-purple-300 text-sm px-2 rounded-full'>
        .pdf
      </li>
    </ul>
  );
};

const CreateStudyGuide = () => {
  const user = useSelector((state) => state.user);
  const {
    userInfo: { files },
  } = user;

  return (
    <div class='w-full'>
      <DashboardNavigation title='Create Study Guide' />
      <div className='px-6 py-6'>
        <div class='rounded shadow bg-white px-6 py-8'>
          <h1 className='text-2xl font-semibold mb-2'>
            Upload Images from your Textbook
          </h1>
          <p className='text-base text-gray-700 md:text-md'>
            Please upload an image of your textbook or study material
          </p>
          <div className='mt-2'>
            <span class='font-semibold text-md text-gray-400 mr-2'>
              * Supported Formats:
            </span>
            <SupportedFileFormatList />
          </div>
          <div className='my-8'>
            <InsertFiles />
          </div>
          {files.length > 0 && (
            <button className='ml-2 inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md'>
              Create Study Guide
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateStudyGuide;
