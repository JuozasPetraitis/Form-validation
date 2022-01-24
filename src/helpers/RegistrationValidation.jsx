import React from 'react';

const RegistrationValidation = ({ render }) => {
  const validationHelper = (input, rule) => {
    if (rule) {
      input.style.border = '2px solid green';
    } else {
      input.style.border = '2px solid red';
    }
  };

  return render(validationHelper);
};

export default RegistrationValidation;
