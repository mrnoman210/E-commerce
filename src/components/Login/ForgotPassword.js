import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const ForgotPassword = () => {
  return (
    <div className="items-center flex flex-col m-8 my-12">
      <h1 className="font-bold font-serif text-3xl text-orange-400 self-center">
        Forgot your password?
      </h1>
      <h3 className="font-serif mt-4">
        Enter your email address below and we’ll send you a link to reset your
        password
      </h3>
      <div class="form__group field">
        <input
          type="text"
          class="form__field"
          placeholder="Enter Your Password"
          name="name"
          id="name"
          required
        />
        <label for="text" class="form__label">
          Enter Your Email or Phone Number:
        </label>
      </div>
      <div className="mt-8">
        <Link
          to={"/login"}
          className="py-7 px-7 m-4 items-center hover:drop-shadow-lg bg-gray-100 border-0 focus:outline-none text-black hover:bg-red-200 hover:text-amber-900 rounded text-base mt-4 md:mt-0"
        >
          Cancel
        </Link>
        <a
          href="/varification"
          className="py-7 px-7 m-6 max-w-fit items-center hover:text-white hover:drop-shadow-lg bg-gray-100 border-0 focus:outline-none text-black hover:bg-red-400 rounded text-base mt-4 md:mt-0"
        >
          Search
        </a>
      </div>
    </div>
  );
};

export default ForgotPassword;
