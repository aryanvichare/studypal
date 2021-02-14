import React, { useState, useEffect } from "react";

const CreateStudyGuideModal = ({ history, setModalOpen }) => {
  const [openGuide, setOpenGuide] = useState(false);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const handleSubmit = (e) => {
    // do async stuff here ==> get db object id and plug in here
    history.push("/dashboard/guide/CNyyz2UtP1rZeCbm1R00");
  };

  return (
    <div>
      <div
        className='fixed inset-0 z-50 overflow-auto h-screen w-full bg-smoke flex flex-row items-center justify-center md:px-0 px-12'
        id='modal'>
        <div
          role='alert'
          className='container mx-auto w-11/12 md:w-2/3 max-w-lg'>
          <div className='relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400'>
            <div className='w-full flex justify-start text-gray-600 mb-3'>
              <svg
                height={52}
                width={52}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                />
              </svg>
            </div>
            <h1 className='text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4'>
              Enter Study Guide Details
            </h1>
            <label
              htmlFor='name'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
              Name
            </label>
            <input
              id='name'
              onChange={handleChange}
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
              placeholder='Chemistry Final Study Guide'
            />
            <div className='flex items-center justify-start w-full'>
              <button
                onClick={handleSubmit}
                className='focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm'>
                Submit
              </button>
              <button
                className='focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm'
                onClick={() => setModalOpen(false)}>
                Cancel
              </button>
            </div>
            <div className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out'>
              <svg
                onClick={() => setModalOpen(false)}
                xmlns='http://www.w3.org/2000/svg'
                aria-label='Close'
                className='icon icon-tabler icon-tabler-x'
                width={20}
                height={20}
                viewBox='0 0 24 24'
                strokeWidth='2.5'
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
      </div>
    </div>
  );
};
export default CreateStudyGuideModal;
