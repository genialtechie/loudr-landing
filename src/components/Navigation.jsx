import React from 'react';
import Logo from '../assets/logo.png';

const Navigation = () => {
  return (
    <nav className="w-11/12 mx-auto h-fit p-4 px-8 flex flex-row items-center mb-8 lg:mb-0">
      <img
        src={Logo}
        alt="Loudr Logo"
        className="inline-block h-14 w-14"
      />
      <span className="text-[#FFC843] text-3xl font-extrabold ml-4 tracking-wide">
        loudronline
      </span>

      <ul className="hidden w-72 h-fit md:flex flex-row justify-around items-center ml-auto">
        <li className="text-white text-md border border-white uppercase py-4 px-8 bg-[#24272a] rounded-full font-bold transition duration-200 ease-in-out hover:bg-slate-400 hover:text-[#FFC843] hover:cursor-pointer">
          <a
            target="blank"
            href="https://loudr-cms.vercel.app"
          >
            About
          </a>
        </li>
        <li className="text-white text-md border border-white uppercase py-4 px-8 bg-[#24272a] rounded-full font-bold transition duration-200 ease-in-out hover:bg-slate-400 hover:text-[#FFC843] hover:cursor-pointer">
          <a
            target="blank"
            href="https://loudr-cms.vercel.app"
          >
            Explore
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
