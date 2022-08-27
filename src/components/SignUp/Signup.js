import React from "react";
// import "../Login ";
import { useState } from "react";
const Signup = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password } = loginData;
  const handleLogin = (e) => {
    e.prevanteDefault();
  };
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    console.log(loginData);
  };
  const url = "http://localhost:5000/user";
  const jsonLoginData = JSON.stringify(loginData);
  fetch(url, { method: "POST", body: loginData })
    .then(() => {
      console.log("sucess");
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <form
      action="http://localhost:5000/user"
      method="post"
      onSubmit={jsonLoginData}
    >
      <div class="shadow-lg shadow-blue bg-grey-lighter sm:w-96 md:w96 lg:w-full container max-w-lg mx-auto items-center justify-center m-6 p-4">
        <div class="border-solid border-black px-6 py-8 rounded  text-black lg:w-full ">
          <h1 class="font-bold font-serif text-3xl text-orange-400 self-center justify-center flex">
            Sign up
          </h1>
          <div class="form__group field" style={{ width: "100%" }}>
            <input
              type="text"
              class="form__field ="
              placeholder="Enter Your Password"
              name="username"
              id="name"
              required
              onChange={(e) => handleChange(e)}
            />
            <label for="name" class="form__label">
              Full Name:
            </label>
          </div>

          <div class="form__group field" style={{ width: "100%" }}>
            <input
              type="text"
              class="form__field"
              placeholder="Enter Your Password"
              name="email"
              id="email"
              required
              onChange={(e) => handleChange(e)}
            />
            <label for="name" class="form__label">
              Email or Phone Number:
            </label>
          </div>

          <div class="form__group field" style={{ width: "100%" }}>
            <input
              type="password"
              class="form__field"
              placeholder="Enter Your Password"
              name="password"
              id="password"
              required
              onChange={(e) => handleChange(e)}
            />
            <label for="name" class="form__label">
              Password:
            </label>
          </div>
          <div class="form__group field" style={{ width: "100%" }}>
            <input
              type="password"
              class="form__field"
              placeholder="Enter Your Password"
              name="confrim_Password"
              id="confrim_Password"
              required
            />
            <label for="name" class="form__label">
              Confirm Password:
            </label>
          </div>
          <button
            type="submit"
            className="my-10 flex justify-center lg:w-full ml-6 md:m-0 sm:m-0 sm:wx-8"
          >
            {/* <a
              href="/lll"
              className="bg-transparent w-auto lg:py-5 sm:py-6 md:py-0 lg:px-40 sm:px-4 md:px-3 hover:bg-red-400 text-black-700 font-semibold text-black hover:text-white border border-black hover:border-transparent rounded"
            > */}
            Sign Up
            {/* </a> */}
          </button>

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the&nbsp;&nbsp;
            <a
              class="no-underline border-b border-grey-dark text-grey-dark decoration-blue-700 hover:decoration-4 hover:underline"
              href="#"
            >
              Terms of Service
            </a>
            &nbsp;&nbsp;and&nbsp;&nbsp;
            <a
              class="no-underline border-b border-grey-dark text-grey-dark decoration-blue-700 hover:decoration-4 hover:underline"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div class="text-grey-dark mt-6 flex justify-center">
          Already have an account?&nbsp;&nbsp;
          <a
            class="decoration-blue-700 hover:decoration-4 hover:underline border-b border-blue text-blue"
            href="./login"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </form>
  );
};

export default Signup;
