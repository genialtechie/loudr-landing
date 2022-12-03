import React from 'react';
import Device from '../assets/device.png';
import { ReactComponent as Bag } from '../assets/shopping-bag.svg';
import Carousel from './Carousel';

const Main = () => {
  return (
    <main className="h-fit w-10/12 mt-10 mx-auto lg:w-full flex flex-col lg:flex-row justify-evenly items-center">
      <div className="w-full lg:w-2/5 h-fit">
        <h1 className="text-4xl lg:text-6xl text-white font-extrabold text-left mb-6">
          <p className="mb-2">Propagating</p>
          <p className="mb-2">Culture</p>
          <p className="text-[#ffc843]">& Creators</p>
        </h1>
        <p className="text-md text-left leading-8 mb-6">
          We discover and propagate the best of what culture has to offer and
          connect a community of emerging creators.
        </p>
        <button className="hover:bg-slate-400 font-bold bg-[#ffc843] transition duration-200 ease-in-out hover:text-[#ffc843] text-black text-md uppercase w-full py-4 md:w-3/5 rounded mb-4 mx-2">
          Suscribe to newsletter
        </button>
        <div className="my-7">
          <Bag className="inline-block mr-2" />
          <span className="text-[#ffc843] font-bold">Shop coming soon</span>
        </div>
      </div>
      <div className="w-full lg:w-1/5 h-fit">
        <img
          src={Device}
          alt="Loudr's Page on a Mobile Device"
          className="scale-75 mx-auto lg:hidden"
        />
        <Carousel className="hidden lg:block" />
      </div>
    </main>
  );
};

export default Main;
