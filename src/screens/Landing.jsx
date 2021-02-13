import React from "react";
import Navbar from "../components/Navbar";
import heroAnimation from "../assets/app-animate.json";
import LottieAnimation from "../components/LottieAnimation";
import "../styles/index.css";

const LandingScreen = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className='overflow-x-hidden	w-full'>
        <div className='overflow-x-hidden container mx-auto lg:pl-30 lg:px-24 px-4 py-12'>
          <div className='overflow-x-hidden	flex flex-col items-center justify-center lg:flex-row lg:pl-24'>
            <div className='max-w-xl mb-6'>
              <div className='mb-10 lg:max-w-lg lg:pr-5 lg:mb-0'>
                <h2 className='leading-8 max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  🎓 Take studying to the next level with{" "}
                  <span className='inline-block text-indigo-700'>StudyPal</span>
                </h2>
                <p className='text-base text-gray-700 md:text-lg'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  assumenda sunt facere fugit corporis eius exercitationem
                  nostrum quo voluptate, nemo odit reprehenderit.
                </p>
                <button className='inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md'>
                  Get Started
                </button>
              </div>
            </div>
            <div className='w-full overflow-hidden lg:w-1/2 cursor-default'>
              <LottieAnimation lotti={heroAnimation} height={500} width={600} />
            </div>
          </div>
        </div>
        <div className='lg:absolute top-1/4 -left-28 overflow-hidden'>
          <div className='h-0 w-0 lg:w-56 lg:h-56 rounded-full bg-indigo-500 '></div>
        </div>
        <div className='lg:absolute top-1/2 -right-28 overflow-hidden'>
          <div className='h-0 w-0 lg:w-56 lg:h-56 rounded-full bg-blue-500 overflow-hidden'></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingScreen;
