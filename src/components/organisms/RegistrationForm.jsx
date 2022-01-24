import React, { useState, useRef } from 'react';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const RegistrationForm = ({ helpers }) => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isValid, setIsValid] = useState(false);

  const [nameValidMessage, setNameValidMessage] = useState('');
  const [emailValidMessage, setEmailValidMessage] = useState('');
  const [passwordValidMessage, setPasswordValidMessage] = useState('');

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const submitInputRef = useRef();
  const formRef = useRef();

  const { validationHelper } = helpers;

  const nameInputHandler = (e) => {
    const input = nameInputRef.current;
    const rule = input.value === '' ? false : true;

    if (rule) {
      setNameValidMessage('');
    } else {
      setNameValidMessage('Username is not valid');
    }

    validationHelper(input, rule);

    setNameInput(nameInputRef.current.value);

    if (rule) {
      return true;
    } else {
      return false;
    }
  };

  const emailInputHandler = (e) => {
    const input = emailInputRef.current;
    const rule = input.value.split('').includes('@') ? true : false;

    if (rule) {
      setEmailValidMessage('');
    } else {
      setEmailValidMessage('Email address missing @');
    }

    validationHelper(input, rule);

    setEmailInput(emailInputRef.current.value);

    if (rule) {
      return true;
    } else {
      return false;
    }
  };

  const passwordInputHandler = (e) => {
    const input = passwordInputRef.current;
    const rule = input.value.length < 4 ? false : true;

    if (rule) {
      setPasswordValidMessage('');
    } else {
      setPasswordValidMessage('Pasword must be longer than 4 characters');
    }

    validationHelper(input, rule);
    setPasswordInput(passwordInputRef.current.value);

    if (rule) {
      return setIsValid(true);
    } else {
      return setIsValid(false);
    }
  };

  const formHandler = (e) => {
    e.preventDefault();

    nameInputHandler();
    emailInputHandler();
    passwordInputHandler();

    Swal.fire({
      icon: 'success',
      title: 'Thank you!',
    });
  };

  return (
    <div className="container m-auto">
      <div className="flex flex-col px-1 md:flex-row md:justify-center">
        <div className="relative">
          <img
            src="https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg"
            alt=""
            className="bg-[#F2877D] w-full h-full py-20 object-cover"
          />
          <img
            src="https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/logo.svg"
            alt=""
            className="absolute top-0 left-0 pt-2 pl-2"
          />
          <p className="absolute bottom-3 lg:bottom-7 text-center w-full text-lg text-white">
            Start for free & Get Attractive offers today
          </p>
        </div>

        <div className="bg-white flex flex-col justify-center items-center gap-8 py-10">
          <p className="font-bold uppercase text-2xl">Sign up</p>
          <form className="flex flex-col gap-4 md:px-10" onSubmit={formHandler} ref={formRef}>
            <div className="flex items-center justify-around">
              <label htmlFor="name" className="font-semibold inline-block w-[80px]">
                Name
              </label>
              <input
                type="text"
                placeholder="Joy Shafweb"
                className="border border-black rounded-sm py-2 px-4"
                ref={nameInputRef}
                value={nameInput}
                onChange={nameInputHandler}
              />
            </div>
            {nameValidMessage && <p className="text-red-400">{nameValidMessage}</p>}

            <div className="flex items-center justify-around">
              <label htmlFor="" className="font-semibold inline-block w-[80px]">
                Email
              </label>
              <input
                type="text"
                placeholder="ShafShaf@mail.com"
                className="border border-black rounded-sm py-2 px-4"
                ref={emailInputRef}
                value={emailInput}
                onChange={emailInputHandler}
              />
            </div>
            {emailValidMessage && <p className="text-red-400">{emailValidMessage}</p>}
            <div className="flex items-center justify-around">
              <label htmlFor="" className="font-semibold inline-block w-[80px]">
                Password
              </label>
              <input
                type="password"
                placeholder="*******"
                className="border border-black rounded-sm py-2 px-4"
                ref={passwordInputRef}
                value={passwordInput}
                onChange={passwordInputHandler}
              />
            </div>
            {passwordValidMessage && <p className="text-red-400">{passwordValidMessage}</p>}
            <input
              type="submit"
              value="Submit"
              className={`text-white cursor-pointer bg-[#F2877D] rounded-sm py-2 mt-8  ${
                isValid ? '' : 'opacity-20 cursor-not-allowed pointer-events-none'
              }`}
              ref={submitInputRef}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
