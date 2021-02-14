import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroAnimation from "../assets/app-animate.json";
import LottieAnimation from "../components/LottieAnimation";
import MockOne from "../assets/mock1.png";
import MockTwo from "../assets/mock2.png";
import MockThree from "../assets/mock3.png";
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
                  StudyPal helps you create custom study guides built with
                  natural language processing to give your brain the relief from
                  repetitive material.
                </p>
                <Link to='/dashboard'>
                  <button className='inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md'>
                    Get Started
                  </button>
                </Link>
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
      <div class='bg-gray-100 mt-32'>
        <section className='max-w-8xl mx-auto container pt-16'>
          <p className='pb-2 text-center text-gray-800 text-4xl font-bold'>
            Custom AI Generated Study Guides
          </p>
          <p className='pb-4 text-center text-gray-400'>
            Claim your study guide in a couple clicks away
          </p>
          <div className='flex flex-col md:flex-row md:items-center mt-8'>
            <div className='w-full md:w-1/2 mt-8 md:mt-0  mr-4'>
              <div className='px-4 md:px-12 py-10 rounded'>
                <div className='flex pb-10 items-center'>
                  <div className='mr-2 h-16 w-16 rounded-full flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#ed8936'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-bold leading-tight text-gray-800'>
                      Intuitive and Efficient Study Guides
                    </h4>
                    <p className='text-base text-gray-600 leading-normal '>
                      Create study guides that are concise, yet effective.
                      Skyrocket your studying with our AI-Powered Guides.
                    </p>
                  </div>
                </div>
                <div className='flex pb-10 items-center'>
                  <div className='mr-2 h-16 w-16 rounded-full flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#ed8936'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <line x1={4} y1={21} x2={4} y2={14} />
                      <line x1={4} y1={10} x2={4} y2={3} />
                      <line x1={12} y1={21} x2={12} y2={12} />
                      <line x1={12} y1={8} x2={12} y2={3} />
                      <line x1={20} y1={21} x2={20} y2={16} />
                      <line x1={20} y1={12} x2={20} y2={3} />
                      <line x1={1} y1={14} x2={7} y2={14} />
                      <line x1={9} y1={8} x2={15} y2={8} />
                      <line x1={17} y1={16} x2={23} y2={16} />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-bold leading-tight text-gray-800'>
                      Tailored to Student's needs
                    </h4>
                    <p className='text-base text-gray-600 leading-normal '>
                      Get Study Guides tailored to exactly what you want to
                      study. All you have to do is upload you textbooks images
                      or teacher lecture.
                    </p>
                  </div>
                </div>
                <div className='flex pb-10 items-center'>
                  <div className='mr-2 h-16 w-16 rounded-full flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#ed8936'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                      <polyline points='22 4 12 14.01 9 11.01' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-bold leading-tight text-gray-800'>
                      Share your study guides with friends
                    </h4>
                    <p className='text-base text-gray-600 leading-normal '>
                      With a click of a button, you can share your study guide
                      with all your friends!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex w-full md:w-1/2 px-4 md:pr-12'>
              <img src={MockOne} alt='' className='h-auto ' />
            </div>
          </div>
        </section>
        <section className='max-w-8xl mx-auto container pt-36'>
          <p className='pb-2 text-center text-gray-800 text-4xl font-bold'>
            Simple Interface
          </p>
          <p className='pb-4 text-center text-gray-400'>
            Grab your study guides within seconds
          </p>
          <div className='flex flex-col md:flex-row md:items-center mt-8'>
            <div className='flex w-full md:w-1/2 px-4 md:pr-12'>
              <img class='floating' src={MockTwo} alt='' className='h-auto ' />
            </div>
            <div className='w-full md:w-1/2 mt-8 md:mt-0  mr-4'>
              <div className='px-4 md:px-12 py-10 rounded'>
                <div className='flex pb-10 items-center'>
                  <div className='mr-2 h-16 w-16 rounded-full flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#ed8936'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-bold leading-tight text-gray-800'>
                      Easy to use Drag & Drop Interface
                    </h4>
                    <p className='text-base text-gray-600 leading-normal '>
                      Drop your textbook images and let the app generate a
                      custom study guide for you
                    </p>
                  </div>
                </div>
                <div className='flex pb-10 items-center'>
                  <div className='mr-2 h-16 w-16 rounded-full flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#ed8936'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <line x1={4} y1={21} x2={4} y2={14} />
                      <line x1={4} y1={10} x2={4} y2={3} />
                      <line x1={12} y1={21} x2={12} y2={12} />
                      <line x1={12} y1={8} x2={12} y2={3} />
                      <line x1={20} y1={21} x2={20} y2={16} />
                      <line x1={20} y1={12} x2={20} y2={3} />
                      <line x1={1} y1={14} x2={7} y2={14} />
                      <line x1={9} y1={8} x2={15} y2={8} />
                      <line x1={17} y1={16} x2={23} y2={16} />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-bold leading-tight text-gray-800'>
                      Track your stats on StudyPal
                    </h4>
                    <p className='text-base text-gray-600 leading-normal '>
                      View your stats on StudyPal real time – how many study
                      guides you created, how many minutes you spent, etc
                    </p>
                  </div>
                </div>
                <div className='flex pb-10 items-center'>
                  <div className='mr-2 h-16 w-16 rounded-full flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#ed8936'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                      <polyline points='22 4 12 14.01 9 11.01' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-bold leading-tight text-gray-800'>
                      Harness the power of study collaboration
                    </h4>
                    <p className='text-base text-gray-600 leading-normal '>
                      View study guides created by millions of users around the
                      world. Everything is free and free to download.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='max-w-8xl mx-auto container py-36'>
          <p className='pb-2 text-center text-gray-800 text-4xl font-bold'>
            Boost your productivity & learning
          </p>
          <p className='pb-4 text-center text-gray-400'>
            Spend less time studying harder and more time studying smarter
          </p>
          <div className='flex flex-col md:flex-row md:items-center mt-8'>
            <div className='w-full md:w-1/2 mt-8 md:mt-0  mr-4'>
              <div className='px-4 md:px-12 py-10 rounded'>
                <div className='flex pb-10 items-center'>
                  <div className='mr-2 h-16 w-16 rounded-full flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#ed8936'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-bold leading-tight text-gray-800'>
                      Blazingly Fast & Efficient
                    </h4>
                    <p className='text-base text-gray-600 leading-normal '>
                      Focus on scoring high in school rather than cramming for
                      tests
                    </p>
                  </div>
                </div>
                <div className='flex pb-10 items-center'>
                  <div className='mr-2 h-16 w-16 rounded-full flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#ed8936'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <line x1={4} y1={21} x2={4} y2={14} />
                      <line x1={4} y1={10} x2={4} y2={3} />
                      <line x1={12} y1={21} x2={12} y2={12} />
                      <line x1={12} y1={8} x2={12} y2={3} />
                      <line x1={20} y1={21} x2={20} y2={16} />
                      <line x1={20} y1={12} x2={20} y2={3} />
                      <line x1={1} y1={14} x2={7} y2={14} />
                      <line x1={9} y1={8} x2={15} y2={8} />
                      <line x1={17} y1={16} x2={23} y2={16} />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-bold leading-tight text-gray-800'>
                      Textbooks = Curated Study Guides
                    </h4>
                    <p className='text-base text-gray-600 leading-normal '>
                      Instead of mindlessly reading through textbooks, study
                      efficiently with our AI study guides
                    </p>
                  </div>
                </div>
                <div className='flex pb-10 items-center'>
                  <div className='mr-2 h-16 w-16 rounded-full flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#ed8936'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                      <polyline points='22 4 12 14.01 9 11.01' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-bold leading-tight text-gray-800'>
                      Less School, More Fun Time
                    </h4>
                    <p className='text-base text-gray-600 leading-normal '>
                      Allow yourself to spend more time focusing on what you
                      like rather than studying for tests
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex w-full md:w-1/2 px-4 md:pr-12'>
              <img
                className='floating'
                src={MockThree}
                alt=''
                className='h-auto '
              />
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default LandingScreen;
