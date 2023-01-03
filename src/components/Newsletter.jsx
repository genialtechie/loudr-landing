import React from 'react';

const Newsletter = ({ reference }) => {
  return (
    <div className="flex flex-col text-sm m-2 mb-2 lg:mb-0">
      <p className="mb-1">Suscribe to our newsletter</p>
      <input
        ref={reference}
        type="text"
        placeholder="example@email.com"
        className="w-64 h-10 border-b-[3px] border-gray-400 p-2 bg-inherit placeholder:text-gray-400 outline-none focus:border-[#ffc843] mb-5"
      />
      <button
        className="hover:bg-white transition-all duration-200 ease-in-out bg-[#ffc843] hover:text-[#ffc843] text-black
        text-md font-bold uppercase py-4 px-10 rounded"
      >
        Suscribe
      </button>
    </div>
  );
};

export default Newsletter;
