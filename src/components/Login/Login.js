import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <form action="/">
      <div className=" flex flex-col m-10 p-11">
        <h1 className="font-bold font-serif text-3xl text-orange-400 self-center">
          Welcome to E-commerce! Plaese Login.
        </h1>
        <div className="items-center flex flex-col">
          <div class="form__group field ">
            <input
              type="email"
              class="form__field"
              placeholder="Enter Your Phone Number or E-mail"
              name="name"
              id="name"
              required
            />
            <label for="name" class="form__label">
              Enter Your Phone Number or E-mail:
            </label>
          </div>
          <div class="form__group field">
            <input
              type="password"
              class="form__field"
              placeholder="Enter Your Password"
              name="name"
              id="name"
              required=""
            />
            <label for="name" class="form__label">
              Enter Your Password:
            </label>
          </div>
          <a
            href="/forgot-password"
            className="hover:underline flex-wrap-reverse hover:text-blue-400"
          >
            forgot password?
          </a>
          <button type="submit" className="m-8">
            <a
              href="/"
              className="bg-transparent py-5 md:py-3 lg:px-40 sm:py-7 md:px-40 hover:bg-red-400 text-black-700 font-semibold text-black hover:text-white border border-black hover:border-transparent rounded"
            >
              Log in
            </a>
          </button>
          <div className="flex">
            Not yet member?&nbsp;
            <a
              href="/signup"
              className="inline hover:underline flex-wrap-reverse"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
