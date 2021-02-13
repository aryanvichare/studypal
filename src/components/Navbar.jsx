import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const { authenticated } = user;

  return (
    <nav className='w-full'>
      <div className='container mx-auto px-6 flex items-center justify-between'>
        <div className='flex items-center'>
          <img class='h-24 w-24' src={logo} alt='StudyPal Logo' />
          <h1 class='text-3xl font-bold text-indigo-700'>StudyPal</h1>
        </div>
        <ul className='hidden sm:flex items-center py-8'>
          <li class='text-gray-600 hover:text-indigo-600 cursor-pointer text-base ml-10'>
            About
          </li>
          <li class='text-gray-600 hover:text-indigo-600 cursor-pointer text-base ml-10'>
            Features
          </li>
          {authenticated ? (
            <Link to='/dashboard'>
              <li class='flex items-center text-gray-600 hover:text-indigo-600 cursor-pointer text-base ml-10'>
                <svg
                  class='inline w-5 h-5 mr-1'
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
                My Account
              </li>
            </Link>
          ) : (
            <Link to='/login'>
              <li class='text-gray-600 hover:text-indigo-600 cursor-pointer text-base ml-10'>
                Log In
              </li>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
