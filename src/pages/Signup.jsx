import React from "react";
import TopHeader from "../components/common/TopHeader";
import Header from "../components/common/Header";
import Line from "../components/common/Line";
import Footer from "../components/common/Footer";
import Button from "../components/common/Button";

const Signup = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Line />
      <div className="flex flex-col md:flex-row my-10">
        <div className="left w-full md:w-1/2">
          <img
            src="/assets/images/sideimg.png"
            className="w-full h-auto object-cover"
            alt="Signup illustration"
          />
        </div>

        <div className="right w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="form-wrapper w-4/5 md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Create an account
            </h1>
            <h4 className="mt-2 text-lg">Enter your details below</h4>
            <form action="#" className="flex flex-col gap-4 mt-10">
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent outline-none border-b-2 border-gray-300 focus:border-red-500"
              />
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
              <Button btnTxt={"Create an Account"}/>
              <button className="border-2 border-red-500 font-semibold py-2 text-red-500 hover:bg-red-500 hover:text-white transition duration-300">
                Sign up with Google
              </button>
            </form>
            <div className="mt-4 text-center">
              <h1>
                <span>Already have an account? </span>
                <a href="#" className="underline text-red-500">
                  Login
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

export default Signup;
