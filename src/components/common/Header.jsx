import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { BiLogIn, BiLogOut, BiUser } from "react-icons/bi";

const Header = () => {
  const location = useLocation();

const isDashboardRoute = location.pathname ==="/dashboard"
  

  return (
    <div className="Header flex items-center justify-between px-20 py-5">
      <h1 className="text-2xl font-bold">Exclusive</h1>
      <ul className="flex gap-8 text-md">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/signup"}>
          <li>Signup</li>
        </Link>
      </ul>
      <div>
        <div className="flex">
          <div className="flex bg-[#F5F5F5] text-gray-300 px-2 py-1 gap-2 ">
            <input
              type="text"
              placeholder="what are your looking for?"
              className="bg-transparent outline-none focus:text-black"
            />
            <img src="/assets/images/search.png" alt="" />
          </div>
          {
            isDashboardRoute && <div className="flex items-center ml-6">
              <div className="logout text-xl rounded-full bg-red-600 p-2 flex items-center  text-white"><BiUser/></div>
          <h1 className="font-semibold text-2xl ml-2">Majid</h1>
<div className="logout text-xl rounded-full bg-red-600 p-2 flex items-center ml-2 text-white"><BiLogOut/></div>

            </div>
          }
        </div>
        
      </div>
    </div>
  );
};

export default Header;
