import React from 'react';
import Device from '../assets/device.png';

const Main = () => {
  return (
    <main className="h-fit w-10/12 mx-auto lg:w-full flex flex-col lg:flex-row justify-around items-center">
      <div className="w-full lg:w-2/5 h-fit">
        <h1 className="text-4xl lg:text-6xl text-[#ffc843] font-bold text-left mb-4">
          Propagating <br />
          Style & Culture
        </h1>
        <p className="text-md text-left leading-8 mb-4">
          Dedicated to a new generation of young and influential creators. We
          discover and propagate the best of what culture has to offer and
          connect a community through a shared appreciation for these stories
          and provide a platform to a community of emerging creators.
        </p>
        <div className="w-full h-fit flex flex-col md:flex-row">
          <button className="bg-white font-bold hover:bg-[#ffc843] hover:text-white text-black text-md uppercase w-full py-4 md:w-3/5 rounded mb-4 mx-2">
            Suscribe to newsletter
          </button>
          <button className="bg-[#24272a] font-bold hover:bg-slate-500 hover:text-black text-white text-md uppercase w-full py-4 md:w-2/5 rounded mb-4 mx-2">
            Go to full site
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/5 h-fit">
        <img
          src={Device}
          alt="Loudr's Page on a Mobile Device"
          className="scale-75 mx-auto"
        />
      </div>
    </main>
  );
};

export default Main;
