import React from "react";
import { useSelector } from "react-redux";
import OrangeCube from "../assets/Orange.png";
import GreenCube from "../assets/Green.png";
import PurpleCube from "../assets/Purple.png";
import DashboardNavigation from "./DashboardNavigation";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const {
    userInfo: { displayName, email },
  } = user;

  return (
    <div class='w-full'>
      <DashboardNavigation title='My Profile' />
      <div className='md:px-10 px-5 py-10'>
        <div className='container mx-auto'>
          <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
            <div className='bg-white rounded shadow p-6'>
              <div className='flex items-center justify-between w-full sm:w-full mb-8'>
                <div className='flex items-center'>
                  <img class='w-12' src={PurpleCube} alt='' />
                  <div className='ml-6'>
                    <h3 className='mb-1 leading-5 text-gray-800 font-bold text-2xl'>
                      500
                    </h3>
                    <p className='text-gray-600 text-sm tracking-normal font-normal leading-5'>
                      Searches
                    </p>
                  </div>
                </div>
                <div>
                  <div className='flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='ml-3 text-green-400 icon icon-tabler icon-tabler-trending-up'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <polyline points='3 17 9 11 13 15 21 7' />
                      <polyline points='14 7 21 7 21 14' />
                    </svg>
                    <p className='text-green-400 text-xs tracking-wide font-bold leading-normal pl-1'>
                      7.2%
                    </p>
                  </div>
                  <p className='font-normal text-xs text-right leading-4 text-green-400 tracking-normal'>
                    Increase
                  </p>
                </div>
              </div>
              <div className='relative mb-3'>
                <hr className='h-1 rounded-sm bg-gray-200' />
                <hr className='absolute top-0 h-1 w-7/12 rounded-sm bg-green-400' />
              </div>
              <h4 className='text-base text-gray-600 font-normal tracking-normal leading-5'>
                Yearly Goal
              </h4>
            </div>
            <div className='bg-white rounded shadow p-6'>
              <div className='flex items-center justify-between w-full sm:w-full mb-8'>
                <div className='flex items-center'>
                  <img class='w-12' src={GreenCube} alt='' />
                  <div className='ml-6'>
                    <h3 className='mb-1 leading-5 text-gray-800 font-bold text-2xl'>
                      150
                    </h3>
                    <p className='text-gray-600 text-sm tracking-normal font-normal leading-5'>
                      Minutes Spent
                    </p>
                  </div>
                </div>
                <div>
                  <div className='flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='ml-3 text-green-400 icon icon-tabler icon-tabler-trending-up'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <polyline points='3 17 9 11 13 15 21 7' />
                      <polyline points='14 7 21 7 21 14' />
                    </svg>
                    <p className='text-green-400 text-xs tracking-wide font-bold leading-normal pl-1'>
                      4%
                    </p>
                  </div>
                  <p className='font-normal text-xs text-right leading-4 text-green-400 tracking-normal pb-1'>
                    Increase
                  </p>
                </div>
              </div>
              <div className='relative mb-3'>
                <hr className='h-1 rounded-sm bg-gray-200' />
                <hr className='absolute top-0 h-1 w-7/12 rounded-sm bg-green-400' />
              </div>
              <h4 className='text-base text-gray-600 font-normal tracking-normal leading-5'>
                Yearly Goal
              </h4>
            </div>
            <div className='bg-white rounded shadow p-6'>
              <div className='flex items-center justify-between w-full sm:w-full mb-8'>
                <div className='flex items-center'>
                  <img class='w-12' src={OrangeCube} alt='' />
                  <div className='ml-6'>
                    <h3 className='mb-1 leading-5 text-gray-800 font-bold text-2xl'>
                      30
                    </h3>
                    <p className='text-gray-600 text-sm tracking-normal font-normal leading-5'>
                      Study Guides
                    </p>
                  </div>
                </div>
                <div>
                  <div className='flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='ml-3 text-green-400 icon icon-tabler icon-tabler-trending-up'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <polyline points='3 17 9 11 13 15 21 7' />
                      <polyline points='14 7 21 7 21 14' />
                    </svg>
                    <p className='text-green-400 text-xs tracking-wide font-bold leading-normal pl-1'>
                      12%
                    </p>
                  </div>
                  <p className='font-normal text-xs text-right leading-4 text-green-400 tracking-normal pb-1'>
                    Increase
                  </p>
                </div>
              </div>
              <div className='relative mb-3'>
                <hr className='h-1 rounded-sm bg-gray-200' />
                <hr className='absolute top-0 h-1 w-7/12 rounded-sm bg-green-400' />
              </div>
              <h4 className='text-base text-gray-600 font-normal tracking-normal leading-5'>
                Yearly Goal
              </h4>
            </div>
          </div>
        </div>
        <div className='container pt-6 mx-auto'>
          <div className='rounded shadow-sm bg-white p-8'>
            <div className='flex flex-row items-center space-x-4'>
              <div className='flex items-center justify-center rounded-full h-12 w-12 object-cover bg-indigo-700'>
                <span class='text-white'>
                  {displayName.substring(0, 1) +
                    displayName.split(" ")[1].substring(0, 1)}
                </span>
              </div>
              <div className='flex flex-col justify-center text-left'>
                <p class='text-gray-800 font-bold'>{displayName}</p>
                <p>{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
