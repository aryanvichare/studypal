import React, { useRef } from "react";
import { Link } from "react-router-dom";
import globe from "../assets/globe.gif";

const SignUpScreen = () => {
  let form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form_data = new FormData(form.current);
    let payload = {};
    form_data.forEach(function (value, key) {
      payload[key] = value;
    });
    console.log("payload", payload);
  };

  return (
    <div>
      <section className='bg-white h-screen'>
        <div className='mx-auto flex justify-center md:items-center relative md:h-full'>
          <div className='absolute top-0 right-0 pt-2 mr-4'>
            <svg width={207} height={144} xmlns='http://www.w3.org/2000/svg'>
              <g fill='#667EEA' fillRule='evenodd'>
                <rect width={4} height={4} rx={2} />
                <rect x={23} width={4} height={4} rx={2} />
                <rect x={45} width={4} height={4} rx={2} />
                <rect x={68} width={4} height={4} rx={2} />
                <rect x={90} width={4} height={4} rx={2} />
                <rect x={113} width={4} height={4} rx={2} />
                <rect x={135} width={4} height={4} rx={2} />
                <rect x={158} width={4} height={4} rx={2} />
                <rect x={181} width={4} height={4} rx={2} />
                <rect x={203} width={4} height={4} rx={2} />
                <rect y={18} width={4} height={4} rx={2} />
                <rect x={23} y={18} width={4} height={4} rx={2} />
                <rect x={45} y={18} width={4} height={4} rx={2} />
                <rect x={68} y={18} width={4} height={4} rx={2} />
                <rect x={90} y={18} width={4} height={4} rx={2} />
                <rect x={113} y={18} width={4} height={4} rx={2} />
                <rect x={135} y={18} width={4} height={4} rx={2} />
                <rect x={158} y={18} width={4} height={4} rx={2} />
                <rect x={181} y={18} width={4} height={4} rx={2} />
                <rect x={203} y={18} width={4} height={4} rx={2} />
                <rect y={35} width={4} height={4} rx={2} />
                <rect x={23} y={35} width={4} height={4} rx={2} />
                <rect x={45} y={35} width={4} height={4} rx={2} />
                <rect x={68} y={35} width={4} height={4} rx={2} />
                <rect x={90} y={35} width={4} height={4} rx={2} />
                <rect x={113} y={35} width={4} height={4} rx={2} />
                <rect x={135} y={35} width={4} height={4} rx={2} />
                <rect x={158} y={35} width={4} height={4} rx={2} />
                <rect x={181} y={35} width={4} height={4} rx={2} />
                <rect x={203} y={35} width={4} height={4} rx={2} />
                <rect y={53} width={4} height={4} rx={2} />
                <rect x={23} y={53} width={4} height={4} rx={2} />
                <rect x={45} y={53} width={4} height={4} rx={2} />
                <rect x={68} y={53} width={4} height={4} rx={2} />
                <rect x={90} y={53} width={4} height={4} rx={2} />
                <rect x={113} y={53} width={4} height={4} rx={2} />
                <rect x={135} y={53} width={4} height={4} rx={2} />
                <rect x={158} y={53} width={4} height={4} rx={2} />
                <rect x={181} y={53} width={4} height={4} rx={2} />
                <rect x={203} y={53} width={4} height={4} rx={2} />
                <rect y={70} width={4} height={4} rx={2} />
                <rect x={23} y={70} width={4} height={4} rx={2} />
                <rect x={45} y={70} width={4} height={4} rx={2} />
                <rect x={68} y={70} width={4} height={4} rx={2} />
                <rect x={90} y={70} width={4} height={4} rx={2} />
                <rect x={113} y={70} width={4} height={4} rx={2} />
                <rect x={135} y={70} width={4} height={4} rx={2} />
                <rect x={158} y={70} width={4} height={4} rx={2} />
                <rect x={181} y={70} width={4} height={4} rx={2} />
                <rect x={203} y={70} width={4} height={4} rx={2} />
                <rect y={88} width={4} height={4} rx={2} />
                <rect x={23} y={88} width={4} height={4} rx={2} />
                <rect x={45} y={88} width={4} height={4} rx={2} />
                <rect x={68} y={88} width={4} height={4} rx={2} />
                <rect x={90} y={88} width={4} height={4} rx={2} />
                <rect x={113} y={88} width={4} height={4} rx={2} />
                <rect x={135} y={88} width={4} height={4} rx={2} />
                <rect x={158} y={88} width={4} height={4} rx={2} />
                <rect x={181} y={88} width={4} height={4} rx={2} />
                <rect x={203} y={88} width={4} height={4} rx={2} />
                <rect y={105} width={4} height={4} rx={2} />
                <rect x={23} y={105} width={4} height={4} rx={2} />
                <rect x={45} y={105} width={4} height={4} rx={2} />
                <rect x={68} y={105} width={4} height={4} rx={2} />
                <rect x={90} y={105} width={4} height={4} rx={2} />
                <rect x={113} y={105} width={4} height={4} rx={2} />
                <rect x={135} y={105} width={4} height={4} rx={2} />
                <rect x={158} y={105} width={4} height={4} rx={2} />
                <rect x={181} y={105} width={4} height={4} rx={2} />
                <rect x={203} y={105} width={4} height={4} rx={2} />
                <rect y={123} width={4} height={4} rx={2} />
                <rect x={23} y={123} width={4} height={4} rx={2} />
                <rect x={45} y={123} width={4} height={4} rx={2} />
                <rect x={68} y={123} width={4} height={4} rx={2} />
                <rect x={90} y={123} width={4} height={4} rx={2} />
                <rect x={113} y={123} width={4} height={4} rx={2} />
                <rect x={135} y={123} width={4} height={4} rx={2} />
                <rect x={158} y={123} width={4} height={4} rx={2} />
                <rect x={181} y={123} width={4} height={4} rx={2} />
                <rect x={203} y={123} width={4} height={4} rx={2} />
                <rect y={140} width={4} height={4} rx={2} />
                <rect x={23} y={140} width={4} height={4} rx={2} />
                <rect x={45} y={140} width={4} height={4} rx={2} />
                <rect x={68} y={140} width={4} height={4} rx={2} />
                <rect x={90} y={140} width={4} height={4} rx={2} />
                <rect x={113} y={140} width={4} height={4} rx={2} />
                <rect x={135} y={140} width={4} height={4} rx={2} />
                <rect x={158} y={140} width={4} height={4} rx={2} />
                <rect x={181} y={140} width={4} height={4} rx={2} />
                <rect x={203} y={140} width={4} height={4} rx={2} />
              </g>
            </svg>
          </div>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className='w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-gray-800 mb-32 sm:mb-0 my-40 sm:my-12 px-2 sm:px-0'>
            <div className='px-2 flex flex-col items-center justify-center mt-8 sm:mt-0'>
              <img className='h-40 w-40' src={globe} alt='Globe' />
            </div>
            <div className='pt-8 px-2 flex flex-col items-center justify-center'>
              <h3 className='text-2xl sm:text-3xl xl:text-2xl font-bold leading-tight'>
                Create your account today!
              </h3>
            </div>
            <div className='mt-12 w-full px-2 sm:px-6'>
              <div className='flex flex-col mt-5'>
                <label
                  htmlFor='text'
                  className='text-lg font-semibold leading-tight'>
                  Full Name
                </label>
                <input
                  required
                  name='text'
                  id='text'
                  className='h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 border-gray-300 border shadow'
                  type='text'
                />
              </div>
              <div className='flex flex-col mt-5'>
                <label
                  htmlFor='email'
                  className='text-lg font-semibold leading-tight'>
                  Email
                </label>
                <input
                  required
                  name='email'
                  id='email'
                  className='h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 border-gray-300 border shadow'
                  type='email'
                />
              </div>
              <div className='flex flex-col mt-5'>
                <label
                  htmlFor='password'
                  className='text-lg font-semibold fleading-tight'>
                  Password
                </label>
                <input
                  required
                  name='password'
                  id='password'
                  className='h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 border-gray-300 border shadow'
                  type='password'
                />
              </div>
            </div>
            <div className='pt-6 w-full flex justify-between px-2 sm:px-6'>
              <div className='flex items-center'>
                <input
                  id='rememberme'
                  name='rememberme'
                  className='w-3 h-3 mr-2'
                  type='checkbox'
                />
                <label htmlFor='rememberme' className='text-xs'>
                  Remember Me
                </label>
              </div>
            </div>
            <div className='px-2 mb-16 sm:mb-56 md:mb-16 sm:px-6'>
              <button className='focus:outline-none w-full bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-md mt-6'>
                Sign Up
              </button>
              <p className='mt-16 text-xs text-center'>
                Already have an account?{" "}
                <Link to='/login' className='underline text-indigo-600'>
                  Login
                </Link>
              </p>
            </div>
          </form>
          <div className='absolute bottom-0 left-0 pb-2 ml-4'>
            <svg width={207} height={144} xmlns='http://www.w3.org/2000/svg'>
              <g fill='#667EEA' fillRule='evenodd'>
                <rect width={4} height={4} rx={2} />
                <rect x={23} width={4} height={4} rx={2} />
                <rect x={45} width={4} height={4} rx={2} />
                <rect x={68} width={4} height={4} rx={2} />
                <rect x={90} width={4} height={4} rx={2} />
                <rect x={113} width={4} height={4} rx={2} />
                <rect x={135} width={4} height={4} rx={2} />
                <rect x={158} width={4} height={4} rx={2} />
                <rect x={181} width={4} height={4} rx={2} />
                <rect x={203} width={4} height={4} rx={2} />
                <rect y={18} width={4} height={4} rx={2} />
                <rect x={23} y={18} width={4} height={4} rx={2} />
                <rect x={45} y={18} width={4} height={4} rx={2} />
                <rect x={68} y={18} width={4} height={4} rx={2} />
                <rect x={90} y={18} width={4} height={4} rx={2} />
                <rect x={113} y={18} width={4} height={4} rx={2} />
                <rect x={135} y={18} width={4} height={4} rx={2} />
                <rect x={158} y={18} width={4} height={4} rx={2} />
                <rect x={181} y={18} width={4} height={4} rx={2} />
                <rect x={203} y={18} width={4} height={4} rx={2} />
                <rect y={35} width={4} height={4} rx={2} />
                <rect x={23} y={35} width={4} height={4} rx={2} />
                <rect x={45} y={35} width={4} height={4} rx={2} />
                <rect x={68} y={35} width={4} height={4} rx={2} />
                <rect x={90} y={35} width={4} height={4} rx={2} />
                <rect x={113} y={35} width={4} height={4} rx={2} />
                <rect x={135} y={35} width={4} height={4} rx={2} />
                <rect x={158} y={35} width={4} height={4} rx={2} />
                <rect x={181} y={35} width={4} height={4} rx={2} />
                <rect x={203} y={35} width={4} height={4} rx={2} />
                <rect y={53} width={4} height={4} rx={2} />
                <rect x={23} y={53} width={4} height={4} rx={2} />
                <rect x={45} y={53} width={4} height={4} rx={2} />
                <rect x={68} y={53} width={4} height={4} rx={2} />
                <rect x={90} y={53} width={4} height={4} rx={2} />
                <rect x={113} y={53} width={4} height={4} rx={2} />
                <rect x={135} y={53} width={4} height={4} rx={2} />
                <rect x={158} y={53} width={4} height={4} rx={2} />
                <rect x={181} y={53} width={4} height={4} rx={2} />
                <rect x={203} y={53} width={4} height={4} rx={2} />
                <rect y={70} width={4} height={4} rx={2} />
                <rect x={23} y={70} width={4} height={4} rx={2} />
                <rect x={45} y={70} width={4} height={4} rx={2} />
                <rect x={68} y={70} width={4} height={4} rx={2} />
                <rect x={90} y={70} width={4} height={4} rx={2} />
                <rect x={113} y={70} width={4} height={4} rx={2} />
                <rect x={135} y={70} width={4} height={4} rx={2} />
                <rect x={158} y={70} width={4} height={4} rx={2} />
                <rect x={181} y={70} width={4} height={4} rx={2} />
                <rect x={203} y={70} width={4} height={4} rx={2} />
                <rect y={88} width={4} height={4} rx={2} />
                <rect x={23} y={88} width={4} height={4} rx={2} />
                <rect x={45} y={88} width={4} height={4} rx={2} />
                <rect x={68} y={88} width={4} height={4} rx={2} />
                <rect x={90} y={88} width={4} height={4} rx={2} />
                <rect x={113} y={88} width={4} height={4} rx={2} />
                <rect x={135} y={88} width={4} height={4} rx={2} />
                <rect x={158} y={88} width={4} height={4} rx={2} />
                <rect x={181} y={88} width={4} height={4} rx={2} />
                <rect x={203} y={88} width={4} height={4} rx={2} />
                <rect y={105} width={4} height={4} rx={2} />
                <rect x={23} y={105} width={4} height={4} rx={2} />
                <rect x={45} y={105} width={4} height={4} rx={2} />
                <rect x={68} y={105} width={4} height={4} rx={2} />
                <rect x={90} y={105} width={4} height={4} rx={2} />
                <rect x={113} y={105} width={4} height={4} rx={2} />
                <rect x={135} y={105} width={4} height={4} rx={2} />
                <rect x={158} y={105} width={4} height={4} rx={2} />
                <rect x={181} y={105} width={4} height={4} rx={2} />
                <rect x={203} y={105} width={4} height={4} rx={2} />
                <rect y={123} width={4} height={4} rx={2} />
                <rect x={23} y={123} width={4} height={4} rx={2} />
                <rect x={45} y={123} width={4} height={4} rx={2} />
                <rect x={68} y={123} width={4} height={4} rx={2} />
                <rect x={90} y={123} width={4} height={4} rx={2} />
                <rect x={113} y={123} width={4} height={4} rx={2} />
                <rect x={135} y={123} width={4} height={4} rx={2} />
                <rect x={158} y={123} width={4} height={4} rx={2} />
                <rect x={181} y={123} width={4} height={4} rx={2} />
                <rect x={203} y={123} width={4} height={4} rx={2} />
                <rect y={140} width={4} height={4} rx={2} />
                <rect x={23} y={140} width={4} height={4} rx={2} />
                <rect x={45} y={140} width={4} height={4} rx={2} />
                <rect x={68} y={140} width={4} height={4} rx={2} />
                <rect x={90} y={140} width={4} height={4} rx={2} />
                <rect x={113} y={140} width={4} height={4} rx={2} />
                <rect x={135} y={140} width={4} height={4} rx={2} />
                <rect x={158} y={140} width={4} height={4} rx={2} />
                <rect x={181} y={140} width={4} height={4} rx={2} />
                <rect x={203} y={140} width={4} height={4} rx={2} />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SignUpScreen;
