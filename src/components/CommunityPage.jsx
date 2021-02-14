import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardNavigation from "./DashboardNavigation";
import { firestore } from "../firebase/firebase.config";

const CommunityPage = () => {
  const [guides, setGuides] = useState([]);
  const colors = ["blue", "green", "indigo", "orange", "yellow", "pink", "red"];
  const generateRandomColor = () => colors[Math.random() * colors.length];

  useEffect(() => {
    try {
      const fetchGuides = async () => {
        const fetchedGuides = [];
        const collectionRef = firestore.collection("guides");
        const snapshot = await collectionRef.get();

        snapshot.forEach((doc) => {
          fetchedGuides.push({ ...doc.data(), id: doc.id });
        });

        console.log(fetchedGuides);

        setGuides(fetchedGuides);
      };

      fetchGuides();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className='w-full'>
      <DashboardNavigation title='Community Study Guides' />
      <div className='px-6 py-6'>
        {guides.map((guide) => (
          <Link to={`/dashboard/guide/${guide.id}`}>
            <div
              key={guide.id}
              class='flex flex-row items-center justify-between space-x-2 rounded shadow bg-white px-6 py-4'>
              <div class='flex items-center space-x-2'>
                <div
                  class={`h-6 w-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-2`}
                />
                <div className='flex flex-col space-y-px'>
                  <p className='font-medium'>{guide.name}</p>
                  <p className='italic'>by {guide.author}</p>
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
                    {(2 + Math.random() * 10).toFixed(2)}
                  </p>
                </div>
                <p className='font-normal text-xs text-right leading-4 text-green-400 tracking-normal'>
                  Upvotes
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
