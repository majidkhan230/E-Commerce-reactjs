import React from "react";
import SimpleSlider from "./common/SimpleSlider";
import Line from "./common/Line";

const Banner = () => {
  return (
    <div className="topBanner w-full px-20 h-96 flex">
      <div className="aside w-1/4">
        <ul className="space-y-3 p-6 text-md">
          <li className="hover:text-red-500"> <a href="#">Woman's Fashion </a></li>
          <li className="hover:text-red-500"> <a href="#">Men's Fashion </a></li>
          <li className="hover:text-red-500"> <a href="#">Electronics </a></li>
          <li className="hover:text-red-500"> <a href="#">Home & Lifestyle </a></li>
          <li className="hover:text-red-500"> <a href="#">Medicine </a></li>
          <li className="hover:text-red-500"> <a href="#">Sports & Outdoor </a></li>
          <li className="hover:text-red-500"> <a href="#">Baby's & Toys </a></li>
          <li className="hover:text-red-500"> <a href="#">Groceries & Pets </a></li>
          <li className="hover:text-red-500"> <a href="#">Health & Beauty </a></li>
        </ul>
      </div>
      <Line/>
      <div className="content w-3/4 overflow-hidden">
      <SimpleSlider/>
      </div>
    </div>
  );
};

export default Banner;
