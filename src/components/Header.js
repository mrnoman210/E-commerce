import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-500 mb-4 md:mb-0 cursor-pointer  ">
            <svg
              xmlns="file:///C:/Users/Reaper%20Ashura/Downloads/scroll-svgrepo-com.svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-red-400 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl hover:text-red-400">E-commerce</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center ">
            <a href="#" className="mr-5 hover:text-red-400">
              Home
            </a>
            <a href="#" className="mr-5 hover:text-red-400">
              Shop
            </a>
            <a href="#" className="mr-5 hover:text-red-400">
              Blogs
            </a>
            <a href="#" className="mr-5 hover:text-red-400">
              Pages
            </a>

            <a href="#" className="mr-5 hover:text-red-400">
              Contact
            </a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-400 rounded text-base mt-4 md:mt-0">
            Sign in
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <button className="inline-flex items-center left-1 bg-gray-100 border-0 py-1 px-3 focus:outline-none left-10 hover:bg-red-400 rounded text-base mt-4 md:mt-0">
            Log in
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
