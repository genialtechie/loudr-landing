import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import Dropdown from './Dropdown';
import About from './About';
import Share from './Share';
import { ReactComponent as Menu } from '../assets/menu.svg';
import MobileNav from './MobileNav';

const Navigation = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  function handleAbout() {
    setOpenAbout(!openAbout);
  }
  function handleShare() {
    setOpenShare(!openShare);
  }
  function handleMenu() {
    setOpenMenu(!openMenu);
  }
  return (
    <>
      <nav className="w-11/12 mx-auto h-fit p-4 lg:px-8 flex flex-row items-center">
        <a href="/">
          <img
            src={Logo}
            alt="Loudr Logo"
            className="inline-block h-16 w-56 cursor-pointer"
          />
        </a>
        <div className="ml-auto md:hidden">
          <Menu
            className="hover:fill-[#ffc843]"
            onClick={handleMenu}
          />
        </div>
        <ul className="hidden w-72 h-fit md:flex flex-row justify-around items-center ml-auto">
          <li
            onClick={handleAbout}
            className={`${
              openAbout && 'bg-white text-black'
            } text-md border border-white uppercase py-4 px-8 bg-[#24272a] rounded-full font-bold transition duration-200 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer`}
          >
            About
          </li>
          <li
            onClick={handleShare}
            className={`${
              openShare && 'bg-white text-black'
            } text-md border border-white uppercase py-4 px-8 bg-[#24272a] rounded-full font-bold transition duration-200 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer`}
          >
            Share
          </li>
        </ul>
      </nav>
      <MobileNav
        open={openMenu}
        setOpen={setOpenMenu}
      />
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
