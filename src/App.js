import React, { useState } from 'react';

//! Helpers
import RegistrationValidation from './helpers/RegistrationValidation';

//! Components
import Modal from './components/organisms/Modal';
import RegistrationForm from './components/organisms/RegistrationForm';

//! Main Component
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#6b2331] to-[#ba0d30] h-screen flex justify-center items-center">
        <button
          className="border-2 border-white text-white py-4 px-20 rounded-bl-xl rounded-tr-xl uppercase font-bold font-mono hover:tracking-widest"
          onClick={openModal}
        >
          Sign Up
        </button>
      </div>
      {isOpen && (
        <Modal closeModal={() => setIsOpen(false)}>
          <RegistrationValidation render={(validationHelper) => <RegistrationForm helpers={{ validationHelper }} />} />
        </Modal>
      )}
    </>
  );
};

export default App;
