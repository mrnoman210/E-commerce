import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Varification = () => {
  return (
    <>
      <div className="items-center flex flex-col mb-10">
        <input
          class="varificationInput"
          name="token"
          type="number"
          maxlength="7"
          // value=""
        />
        <div className="m-9 my-10">
          <Link
            to={"/login"}
            className="py-7 px-7 m-4 items-center hover:drop-shadow-lg bg-gray-100 border-0 focus:outline-none text-black hover:bg-red-200 hover:text-amber-900 rounded text-base mt-4 md:mt-0"
          >
            Cancel
          </Link>
          <a
            href="/"
            className="m-6 py-7 px-7 max-w-fit items-center hover:text-white hover:drop-shadow-lg bg-gray-100 border-0 focus:outline-none text-black hover:bg-red-400 rounded text-base mt-4 md:mt-0"
          >
            Confirm
          </a>
        </div>
      </div>
    </>
  );
};

export default Varification;
