import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Dropdown from './Dropdown';
import About from './About';
import Share from './Share';

const Navigation = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  function handleAbout() {
    setOpenAbout(!openAbout);
  }
  function handleShare() {
    setOpenShare(!openShare);
  }

  return (
    <>
      <nav className="w-11/12 mx-auto h-fit p-4 px-8 flex flex-row items-center justify-center lg:justify-between mb-8 lg:mb-0">
        <a href="/">
          <img
            src={Logo}
            alt="Loudr Logo"
            className="inline-block h-16 w-56 cursor-pointer"
          />
        </a>

        <ul className="hidden w-72 h-fit md:flex flex-row justify-around items-center ml-auto">
          <li
            onClick={handleAbout}
            className={`${
              openAbout ? 'bg-white text-black' : 'bg-[#24272a] text-white'
            } text-md border border-white uppercase py-4 px-8 bg-[#24272a] rounded-full font-bold transition duration-200 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer`}
          >
            About
          </li>
          <li
            onClick={handleShare}
            className={`${
              openShare ? 'bg-white text-black' : 'bg-[#24272a] text-white'
            } text-md border border-white uppercase py-4 px-8 bg-[#24272a] rounded-full font-bold transition duration-200 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer`}
          >
            Share
          </li>
        </ul>
      </nav>
      <Dropdown
        open={openAbout}
        setOpen={setOpenAbout}
      >
        <About />
      </Dropdown>
      <Dropdown
        open={openShare}
        setOpen={setOpenShare}
      >
        <Share />
      </Dropdown>
    </>
  );
};

export default Navigation;
