import React, { useEffect, useRef } from 'react';

const Modal = ({ children, open, setOpen, setModalContent }) => {
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      event.stopPropagation();
      if (ref.current && !ref.current.contains(event.target)) {
        setModalContent(null);
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [ref]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {open && (
        <div className="h-screen w-screen flex items-center bg-black/70 fixed inset-x-0 inset-y-0 z-50">
          <div
            ref={ref}
            className="w-10/12 mx-auto p-5 bg-[#1d2023]"
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
