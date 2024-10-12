import React from "react";

const TopHeader = () => {
  return (
    <header className="topHeader w-full h-10 bg-black text-white flex justify-between items-center px-20 ">
      <div></div>
      <div className="flex gap-2">
        <h3>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h3>
        <a className="underline" href="http://">
          ShopNow
        </a>
      </div>
      <select name="" id="" className="bg-black text-white  outline-none">
        <option value="">English</option>
        <option value="">Urdu</option>
      </select>
    </header>
  );
};

export default TopHeader;
