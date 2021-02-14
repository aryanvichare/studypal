import React from "react";
import { useSelector } from "react-redux";

const DashboardNavigation = ({ title }) => {
  const user = useSelector((state) => state.user);
  const {
    userInfo: { displayName },
  } = user;
  return (
    <nav className='h-16 flex items-center lg:items-stretch justify-between bg-white shadow relative z-10 px-5 sm:px-10'>
      <div className='hidden lg:flex w-full'>
        <div className='w-1/2 h-full hidden lg:flex items-center'>
          <h1 class='text-lg'>{title}</h1>
        </div>
        <div className='w-1/2 hidden lg:flex'>
          <div className='w-full flex items-center pl-8 justify-end'>
            <div className='rounded-full relative'>
              <div className='flex items-center justify-center rounded-full h-10 w-10 object-cover bg-indigo-700'>
                <span class='text-white'>
                  {displayName.substring(0, 1) +
                    displayName.split(" ")[1].substring(0, 1)}
                </span>
              </div>
              <div className='w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto' />
            </div>
            <p className='text-gray-800 text-sm mx-3'>{displayName}</p>
            <div
              className='cursor-pointer text-gray-600 relative'
              onclick='dropdownHandler(this)'>
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
              <ul className='p-2 w-40 border-r bg-white absolute rounded left-0 -ml-32 shadow mt-8 hidden'>
                <li className='cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-green-500 focus:text-green-500 focus:outline-none'>
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
                <li className='cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-green-500 focus:text-green-500 focus:outline-none flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-help'
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <circle cx={12} cy={12} r={9} />
                    <line x1={12} y1={17} x2={12} y2='17.01' />
                    <path d='M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4' />
                  </svg>
                  <span className='ml-2'>Help Center</span>
                </li>
                <li className='cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-green-500 flex items-center focus:text-indigo-700 focus:outline-none'>
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
                  <span className='ml-2'>Account Settings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden cursor-pointer text-gray-700 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out'>
        <ul className='top-0 z-40 p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-16 md:mt-16 hidden'>
          <li className='flex lg:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-green-500 focus:text-green-500 focus:outline-none'>
            <div className='flex items-center'>
              <span className='ml-2 font-bold text-green-500'>
                <a href='index.html'>Overview Dashboard</a>
              </span>
            </div>
          </li>
          <li
            className='flex lg:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-green-500 focus:text-green-500 focus:outline-none flex justify-center'
            onclick='dropdownHandler(this)'>
            <div className='flex items-center'>
              <span className='ml-2 font-bold'>
                <a href='analytics-customer.html'>Customer Management</a>
              </span>
            </div>
          </li>
          <li className='flex lg:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-green-500 flex items-center focus:text-indigo-700 focus:outline-none'>
            <span className='ml-2 font-bold'>
              <a href='analytics-performance.html'>Executive Performance</a>
            </span>
          </li>
          <li className='flex lg:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-green-500 flex items-center focus:text-indigo-700 focus:outline-none'>
            <span className='ml-2 font-bold'>
              <a href='analytics-employee.html'>Employee Performance</a>
            </span>
          </li>
          <li className='flex lg:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-green-500 flex items-center focus:text-indigo-700 focus:outline-none'>
            <span className='ml-2 font-bold'>
              <a href='analytics-product-listing.html'>Product Listing</a>
            </span>
          </li>
          <li className='flex lg:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-green-500 flex items-center focus:text-indigo-700 focus:outline-none'>
            <span className='ml-2 font-bold'>
              <a href='analytics-meeting.html'>Meeting Report</a>
            </span>
          </li>
          <li className='flex lg:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-green-500 flex items-center focus:text-indigo-700 focus:outline-none'>
            <span className='ml-2 font-bold'>
              <a href='analytics-customer-record.html'>Customer Record</a>
            </span>
          </li>
          <li className='ml-2'>
            <input
              className='w-full border-b border-gray-300 py-2 mr-4 focus:outline-none text-gray-800'
              placeholder='Search'
            />
          </li>
          <li className='ml-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-green-500 flex items-center focus:text-indigo-700 focus:outline-none'>
            <div className='flex items-center'>
              <div className='w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out'>
                <img
                  className='rounded h-10 w-10 object-cover'
                  src='https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png'
                  alt='logo'
                />
              </div>
              <p className='leading-6 text-base ml-1 cursor-pointer'>
                Jane Doe
              </p>
              <div className='sm:ml-2 text-white relative'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-chevron-down cursor-pointer'
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
              </div>
            </div>
          </li>
        </ul>
        <div className='absolute right-0 top-0 mt-4 mr-4'>
          <div
            className='show-m-menu sm:hidden'
            onclick='MenuHandler(this,true)'>
            <svg
              aria-haspopup='true'
              aria-label='Main Menu'
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-menu'
              width={32}
              height={32}
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#2C3E50'
              fill='none'
              strokeLinecap='round'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <line x1={4} y1={8} x2={20} y2={8} />
              <line x1={4} y1={16} x2={20} y2={16} />
            </svg>
          </div>
          <div
            onclick='MenuHandler(this,false)'
            className='hidden close-m-menu'>
            <svg
              aria-label='Close'
              xmlns='http://www.w3.org/2000/svg'
              width={32}
              height={32}
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavigation;
