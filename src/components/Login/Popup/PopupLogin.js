import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Popup.css";
const PopupLogin = () => {
  const [popup, setPopup] = React.useState(false);
  let timer;

  function popuponce() {
    timer = setTimeout(() => {
      setPopup(true);
      return () => clearTimeout(timer);
    }, 10000);
  }

  useEffect(() => {
    popuponce();
  }, []);

  function popuphide() {
    setPopup(false);
  }

  return (
    <>
      <div
        className="overflow-hidden fixed md:w-auto sm:w-auto overflow-y-auto overflow-x-hidden w-full md:inset-0 h-modal md:h-full py-12 backdrop-blur-sm transition duration-150 ease-in-out z-10 top-0 right-0 bottom-0 left-0 h-36"
        // id="static-modal"
        style={{
          display: popup ? "block" : "none",
        }}
      >
        <div class="form-popup sm:h-auto" id="myForm">
          <form action="/action_page.php" class="form-container">
            <h1
              className="float-right cursor-pointer text-xl font-bold"
              onClick={() => {
                popuphide();
              }}
              style={{
                display: popup ? "block" : "none",
              }}
            >
              X
            </h1>
            <h1 className="font-bold font-serif text-3xl text-orange-400 self-center sm:h-auto">
              Login?
            </h1>

            {/* <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            /> */}

            {/* <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            /> */}
            <div className="flex flex-col gap-4 ">
              <a
                href="/login"
                type="submit"
                class="testing justify-center flex bg-transparent py-5 md:py-3 lg:px-40 sm:py-7 md:px-40 hover:bg-red-400 text-black-700 font-semibold text-black hover:text-white border border-black hover:border-transparent rounded"
              >
                Login
              </a>
              <button
                class="lg:py-4  justify-center flex bg-transparent py-5 md:py-3 lg:px-40 sm:py-7 md:px-40 hover:gray-400 text-black-700 font-semibold hover:bg-gray-300 bg-gray-200 text-black border border-black hover:border-transparent rounded"
                onClick={() => {
                  popuphide();
                }}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PopupLogin;
