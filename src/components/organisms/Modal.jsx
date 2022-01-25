import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, closeModal }) => {
  return createPortal(
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 bg-white md:bg-black flex">
      <div className="container m-auto flex flex-col justify-center items-center gap-8">
        {children}
        <button
          className="border-2 border-black py-4 px-20 rounded-bl-xl rounded-tr-xl uppercase font-bold font-mono hover:tracking-widest md:border-teal-800 md:hover:border-white md:text-white"
          onClick={() => closeModal()}
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
