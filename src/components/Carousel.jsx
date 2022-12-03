import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { ReactComponent as Trend } from '../assets/trending-up.svg';
import { ReactComponent as RightArrow } from '../assets/chevron-right.svg';
import { ReactComponent as LeftArrow } from '../assets/chevron-left.svg';

const Carousel = () => {
  // Use the useState() hook to store the data from the Firestore collection in a local state variable
  const [creators, setCreators] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const handlePrevious = () => {
    if (currentItem === 0) {
      setCurrentItem(creators.length - 1);
    } else {
      setCurrentItem(currentItem - 1);
    }
  };

  const handleNext = () => {
    if (currentItem === creators.length - 1) {
      setCurrentItem(0);
    } else {
      setCurrentItem(currentItem + 1);
    }
  };

  useEffect(() => {
    // change the value of the currentItem state variable every 3 seconds
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentItem]); // eslint-disable-line react-hooks/exhaustive-deps

  // Use the useEffect() hook to fetch the data from the Firestore collection when the component is initially rendered
  useEffect(() => {
    // Initialize Firebase and the Cloud Firestore database
    const app = initializeApp({
      apiKey: 'AIzaSyDR4PRk6BEZ91UxvTLdcMyJ5coBe-2G_ds',
      authDomain: 'loudr-featured-artistes.firebaseapp.com',
      projectId: 'loudr-featured-artistes',
      storageBucket: 'loudr-featured-artistes.appspot.com',
      messagingSenderId: '82666456788',
      appId: '1:82666456788:web:b08509f8573fd805825d41',
      measurementId: 'G-QDZ4E5BC84',
    });
    const db = getFirestore(app);

    // Fetch the data from the Firestore collection
    const fetchCreators = async (db) => {
      const creatorCollection = collection(db, 'featured-creators');
      const creatorSnapshot = await getDocs(creatorCollection);
      const creatorList = creatorSnapshot.docs.map((doc) => doc.data());
      return creatorList;
    };

    // Set the data from the Firestore collection to the local state variable

    fetchCreators(db).then((creatorList) => {
      setCreators(creatorList);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="h-fit w-fit text-white ">
      <div className="w-fit h-[430px] transition-all duration-500 ease-in-out transform hover:scale-105 relative">
        {creators.map((creator, index) => (
          <div
            key={creator.name}
            className={`relative h-fit w-fit mx-5 transition-all duration-500 ease-in-out transform -translate-y-[${
              currentItem * 410
            }px] ${
              index === currentItem
                ? 'transition-all duration-500 ease-in-out block'
                : 'hidden'
            }`}
          >
            <div className="flex flex-row items-center justify-start bg-[#141818] rounded-full p-3 w-72 mb-5">
              <span className="rounded-full p-5 inline-block bg-[#24272A] mr-3">
                <Trend className="inline-block scale-75" />
              </span>
              <p className="inline-block">
                <span className="text-slate-500 text-sm">Popularity</span>
                <br />
                {creator.popularity}
              </p>
            </div>
            <div className="h-72 w-72 mx-auto mb-5 rounded-xl relative">
              <img
                src={creator.images[0]}
                alt={creator.name}
                className="h-full w-full object-cover rounded-xl object-top"
              />
              <div className="absolute top-9 -right-24 z-30 h-fit w-fit rounded-lg">
                <div className="relative h-36 w-36 rounded-t-lg">
                  <img
                    src={creator.featuredImage[0]}
                    alt={creator.featuredWork}
                    className="h-full w-full rounded-t-lg object-cover object-center"
                  />
                  <div className="absolute bottom-2 left-2">
                    <span className="inline-block bg-slate-300/10 rounded-full px-2 py-1 text-xs uppercase">
                      {creator.featuredTag}
                    </span>
                  </div>
                </div>
                <div className="rounded-b-lg text-xs w-36 h-fit p-3 bg-[#141818]">
                  <p className="text-slate-500 mb-2">Featured work</p>
                  <p className="text-white font-bold">{creator.featuredWork}</p>
                </div>
              </div>
              <div className="absolute bottom-6 left-4">
                <p className="font-bold">{creator.name}</p>
                <p>
                  {creator.tags.map((tag) => (
                    <span
                      key={creator.name + tag}
                      className="inline-block bg-slate-300/30 rounded-full px-2 py-1 text-xs mr-2 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-72 flex flex-row items-center justify-around bg-[#141818] rounded-full py-5 mb-16 mx-auto">
        <LeftArrow
          className="inline-block scale-75 transition duration-300 ease-in-out hover:scale-100 hover:cursor-pointer"
          onClick={handlePrevious}
        />
        <div className="flex flex-row items-center justify-between">
          <div className="h-10 w-10 mx-2 rounded-full">
            <img
              src={
                creators[
                  currentItem - 1 < 0 ? creators.length - 1 : currentItem - 1
                ]?.featuredImage[0]
              }
              alt={
                creators[
                  currentItem - 1 < 0 ? creators.length - 1 : currentItem - 1
                ]?.featuredWork
              }
              className="h-full w-full rounded-full object-cover object-center"
            />
          </div>
          <div className="h-12 w-12 mx-2 rounded-full ring-1 ring-offset-8 ring-[#ffc843] ring-offset-[#141818]">
            <img
              src={creators[currentItem]?.featuredImage[0]}
              alt={creators[currentItem]?.featuredWork}
              className="h-full w-full rounded-full object-cover object-center"
            />
          </div>
          {creators.length > 2 && (
            <div className="h-10 w-10 mx-2 rounded-full">
              <img
                src={
                  creators[
                    currentItem + 1 > creators.length - 1 ? 0 : currentItem + 1
                  ]?.featuredImage[0]
                }
                alt={
                  creators[
                    currentItem + 1 > creators.length - 1 ? 0 : currentItem + 1
                  ]?.featuredWork
                }
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
          )}
        </div>

        <RightArrow
          className="inline-block scale-75 transition duration-300 ease-in-out hover:scale-100 hover:cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Carousel;
