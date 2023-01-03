import React, { useEffect, useRef } from 'react';

const Dropdown = ({ children, open, setOpen }) => {
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    open
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  }, [open]);

  return (
    <>
      {open && (
        <div
          ref={ref}
          className="h-fit w-96 p-7 absolute right-16 top-24 bg-[#141818] z-50 rounded-lg"
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Dropdown;
