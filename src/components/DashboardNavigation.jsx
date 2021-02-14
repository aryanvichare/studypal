import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase/firebase.config";
import { logout } from "../redux/actions/userActions";

const DashboardNavigation = ({ history, title }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const {
    authenticated,
    userInfo: { displayName },
  } = user;

  useEffect(() => {
    if (!authenticated) return <Redirect to='/login' />;
  }, [authenticated]);

  return (
    <nav className='h-16 flex items-center lg:items-stretch justify-between bg-white shadow relative z-10 px-5 sm:px-10'>
      <div className='hidden lg:flex w-full'>
        <div className='w-1/2 h-full hidden lg:flex items-center'>
          <h1 className='text-lg'>{title}</h1>
        </div>
        <div className='w-1/2 hidden lg:flex'>
          <div className='w-full flex items-center pl-8 justify-end'>
            <div className='rounded-full relative'>
              <div className='flex items-center justify-center rounded-full h-10 w-10 object-cover bg-indigo-700'>
                <span className='text-white'>
                  {displayName.substring(0, 1) +
                    displayName.split(" ")[1].substring(0, 1)}
                </span>
              </div>
              <div className='w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto'></div>
            </div>
            <p className='text-gray-800 text-sm mx-3'>{displayName}</p>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className='cursor-pointer text-gray-600 relative'>
              <svg
                aria-haspopup='true'
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-chevron-down'
                width={20}
                height={20}
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' />
                <polyline points='6 9 12 15 18 9' />
              </svg>

              <ul
                className={`p-2 w-40 border-r bg-white absolute rounded left-0 -ml-32 shadow mt-8 ${
                  !dropdownOpen ? "hidden" : ""
                }`}>
                <Link to='/dashboard/profile'>
                  <li className='cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-blue-500 focus:text-blue-500 focus:outline-none'>
                    <div className='flex items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-user'
                        width={20}
                        height={20}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <circle cx={12} cy={7} r={4} />
                        <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
                      </svg>
                      <span className='ml-2'>My Profile</span>
                    </div>
                  </li>
                </Link>
                <li
                  onClick={() => {
                    dispatch(logout());
                  }}
                  className='cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-blue-500 flex items-center focus:text-indigo-700 focus:outline-none'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-settings'
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  <span className='ml-2'>Sign Out</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavigation;
