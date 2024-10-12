import React from "react";

const Header = () => {
  return (
    <div className="Header flex items-center justify-between px-20 py-5">
      <h1 className="text-2xl font-bold">Exclusive</h1>
      <ul className="flex gap-8 text-md">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Signup</li>
      </ul>
      <div>
        <div className="flex bg-[#F5F5F5] text-gray-300 px-2 py-1 gap-2 ">
          <input
            type="text"
            placeholder="what are your looking for?"
            className="bg-transparent"
          />
          <img src="/assets/images/search.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
