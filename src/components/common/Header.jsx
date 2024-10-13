import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header flex items-center justify-between px-20 py-5">
      <h1 className="text-2xl font-bold">Exclusive</h1>
      <ul className="flex gap-8 text-md">
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/contact"}><li>Contact</li></Link>
        <Link to={"/about"}><li>About</li></Link>
        <Link to={"/signup"}><li>Signup</li></Link>
      </ul>
      <div>
        <div className="flex bg-[#F5F5F5] text-gray-300 px-2 py-1 gap-2 ">
          <input
            type="text"
            placeholder="what are your looking for?"
            className="bg-transparent outline-none focus:text-black"
          />
          <img src="/assets/images/search.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
