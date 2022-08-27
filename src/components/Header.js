import React from "react";
import "./Header.css";
import { FaLock, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";

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

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <header
        className="bg-red-400 sticky top-0 mx-auto px-4 sm:px-6 lg:px-8 sm:max-h-14 md:max-h-24"
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
            <span className="ml-3 text-xl hover:text-red-400 text-black">
              E-commerce
            </span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center md:block sm:hidden lg:block xl:block 2xl:block">
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
        </div>
        <div className="flex flex-row md:absolute md:right-0 -top-2 m-0 sm:mb-6">
          <Button to={"/signup"} Name={"Sign Up"} SVG={<FaSignInAlt />} />

          <Button to={"/login"} Name={"Log In"} SVG={<FaLock />} />
        </div>
        <div className="md:hidden" id="mobile-menu">
          <input
            class="menu-icon"
            type="checkbox"
            id="menu-icon"
            name="menu-icon"
          />
          <label for="menu-icon"></label>
          <nav class="nav">
            <ul class="pt-5">
              <li>
                <Link
                  to={"/shop"}
                  className="mr-5 text-black hover:text-red-400"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to={"/blog"}
                  className="mr-5 text-black hover:text-red-400"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to={"/pages"}
                  className="mr-5 text-black hover:text-red-400"
                >
                  Pages
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="mr-5 text-black hover:text-red-400"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
