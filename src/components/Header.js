import React from "react";
import { FaCentos } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({ color }) {
  const [bgColor, setBgColor] = React.useState(false);
  const listenScrollEvent = (event) => {
    if (window.scrollY < 500) {
      return setBgColor(true);
    } else {
      return setBgColor(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <header
        className="text-gray-600 body-font bg-red-100 sticky top-0"
        style={{
          background: bgColor
            ? "rgb(255 237 213 / var(--tw-bg-opacity))"
            : "#f1bd74",
          opacity: bgColor ? "100%" : "90%",
          minHeight: bgColor ? "100%" : "0vh",
        }}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center dark:text-black mb-4 md:mb-0 cursor-pointer  "
          >
            {/* <svg
              xmlns="file:///C:/Users/Reaper%20Ashura/Downloads/scroll-svgrepo-com.svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-red-400 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <span className="ml-3 text-xl hover:text-red-400 text-black">
              E-commerce
            </span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center ">
            <Link to={"/"} className="mr-5 text-black hover:text-red-400">
              Home
            </Link>
            <Link to={"/shop"} className="mr-5 text-black hover:text-red-400">
              Shop
            </Link>
            <Link to={"/blog"} className="mr-5 text-black hover:text-red-400">
              Blogs
            </Link>
            <Link to={"/pages"} className="mr-5 text-black hover:text-red-400">
              Pages
            </Link>
            <Link
              to={"/contact"}
              className="mr-5 text-black hover:text-red-400"
            >
              Contact
            </Link>
          </nav>
          <a
            href="../signup"
            className="flex max-w-fit py-3 items-center hover:text-white hover:drop-shadow-lg bg-gray-100 border-0 mr-3 px-3 focus:outline-none text-black hover:bg-red-400 rounded text-base mt-4 md:mt-0"
          >
            Sign in
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <a
            href="../login"
            className="flex max-w-fit px-4 items-center hover:text-white hover:drop-shadow-lg bg-gray-100 border-0 py-3 focus:outline-none text-black hover:bg-red-400 rounded text-base mt-4 md:mt-0"
          >
            Log in
          </a>
        </div>
        <hr style={{ hight: "10.5rem", color: "blue" }} />
      </header>
    </>
  );
}

export default Header;
