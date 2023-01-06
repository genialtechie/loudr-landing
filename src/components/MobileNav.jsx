import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/logo.svg';
import { ReactComponent as Close } from '../assets/close.svg';
import Modal from './Modal';
import About from './About';
import Share from './Share';

const MobileNav = ({ open, setOpen }) => {
  const ref = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    open
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  }, [open]);

  function handleMenuClick(e) {
    const text = e.target.innerText.toLowerCase();
    setModalContent(text);
    setOpenModal(true);
  }

  return (
    <>
      {open && (
        <div className="h-screen w-screen container bg-black/70 fixed inset-x-0 inset-y-0 z-50">
          <div
            ref={ref}
            className="w-full bg-[#1d2023]"
          >
            <div className="w-11/12 mx-auto h-fit p-4 flex flex-row items-center">
              <a href="/">
                <img
                  src={Logo}
                  alt="Loudr Logo"
                  className="inline-block h-16 w-56 cursor-pointer"
                />
              </a>

              <div className="ml-auto">
                <Close
                  className="hover:fill-[#ffc843]"
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            <ul className="w-full">
              <li
                onClick={handleMenuClick}
                className="text-white hover:text-[#ffc843] hover:bg-[#24272a] text-lg uppercase p-5 border-t-2 border-black"
              >
                About
              </li>
              <li
                onClick={handleMenuClick}
                className="text-white hover:text-[#ffc843] hover:bg-[#24272a] text-lg uppercase p-5 border-t-2 border-black"
              >
                Share
              </li>
            </ul>
          </div>
        </div>
      )}
      {openModal && (
        <Modal
          open={openModal}
          setOpen={setOpenModal}
          setModalContent={setModalContent}
        >
          {modalContent === 'about' && <About />}
          {modalContent === 'share' && <Share />}
        </Modal>
      )}
    </>
  );
};

export default MobileNav;
