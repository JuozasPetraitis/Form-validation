import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, closeModal }) => {
  return createPortal(
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 bg-white md:bg-black flex">
      <div className="container m-auto flex flex-col justify-center items-center gap-8">
        {children}
        <button
          onClick={() => closeModal()}
          className="text-center py-2 px-28 font-bold bg-gradient-to-r from-[#84fab0] to-[#8fd3f4] hover:from-[#8fd3f4] hover:to-[#84fab0] hover:text-white hover:border rounded-sm cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
