import React from "react";
import TopHeader from "../components/common/TopHeader";
import Header from "../components/common/Header";
import Line from "../components/common/Line";
import Footer from "../components/common/Footer";

const Login = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Line />
      <div className="flex flex-col md:flex-row my-10">
        {/* Left Section for Image */}
        <div className="left w-full md:w-1/2">
          <img
            src="/assets/images/sideimg.png"
            className="w-full h-auto object-cover"
            alt="Login illustration"
          />
        </div>

        {/* Right Section for Form */}
        <div className="right w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="form-wrapper w-4/5 md:w-4/6">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Login to your account
            </h1>
            <h4 className="mt-2 text-lg">Enter your credentials below</h4>
            <form action="#" className="flex flex-col gap-4 mt-10">
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="bg-transparent outline-none border-b-2 border-gray-300 focus:border-red-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none border-b-2 border-gray-300 focus:border-red-500"
              />
              <div className="flex items-center justify-between px-5">
                <button className="bg-red-500 rounded-xl px-10 tracking-widest hover:bg-red-600 text-white font-semibold py-2  transition duration-300">
                  Login
                </button>
                <a href="#" className="text-red-500">Forgot Password</a>
              </div>
             
            </form>
            <div className="mt-4 text-center">
              <h1>
                <span>Don't have an account? </span>
                <a href="#" className="underline text-red-500">
                  Sign up
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
