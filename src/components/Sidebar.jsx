import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Sidebar = ({ index }) => {
  return (
    <div class='absolute z-20 sm:relative md:w-4/12 lg:w-72 pl-4 sm:pl-2 md:pl-4 bg-white md:shadow h-screen'>
      <Link to='/' className='flex items-center cursor-pointer'>
        <img class='h-16 w-16' src={logo} alt='StudyPal Logo' />
        <h1 class='text-xl font-bold text-indigo-700'>StudyPal</h1>
      </Link>
      <ul aria-orientation='vertical' class='rounded py-8 hidden sm:block'>
        <li
          className={`cursor-pointer text-indigo-400 ${
            index === 1 ? "font-bold text-indigo-800" : ""
          } text-xs xl:text-sm leading-3 tracking-normal pl-2 py-2 hover:text-indigo-800 focus:outline-none`}>
          <div className='flex items-center'>
            <svg
              width='20'
              height='20'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
              />
            </svg>
            <Link to='/dashboard'>
              <span className='ml-2'>Create Study Guide</span>
            </Link>
          </div>
        </li>
        <li
          className={`cursor-pointer text-indigo-400 ${
            index === 2 ? "font-bold text-indigo-800" : ""
          } text-xs xl:text-sm leading-3 tracking-normal mt-6 pl-2 py-2 hover:text-indigo-800 focus:outline-none`}>
          <div className='flex items-center'>
            <svg
              width='20'
              height='20'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
              />
            </svg>
            <Link to='/dashboard/community'>
              <span className='ml-2'>Community Study Guides</span>
            </Link>
          </div>
        </li>
        <li
          className={`cursor-pointer text-indigo-400 ${
            index === 3 ? "font-bold text-indigo-800" : ""
          } text-xs xl:text-sm leading-3 tracking-normal mt-6 pl-2 py-2 hover:text-indigo-800 focus:outline-none`}>
          <div className='flex items-center'>
            <svg
              width='20'
              height='20'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <Link to='/dashboard/profile'>
              <span class='ml-2'>My Profile</span>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
