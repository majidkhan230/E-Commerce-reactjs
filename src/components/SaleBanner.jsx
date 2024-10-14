import React from "react";
import FlashSaleTimer from "./common/FlashSaleTimer";
import SliderCards from "./common/SliderCards";

const SaleBanner = () => {
  return (
    <div className="px-20">
      <div className="flex items-center">
        <img src="/assets/images/CategoryRectangle.png" alt="" />
        <h2 className="ml-2 text-red-500 font-semibold">Today's</h2>
      </div>
      <div className=" my-1 flex items-end gap-10">
        <h1 className="font-bold text-3xl ">Flash Sales</h1>
        <FlashSaleTimer/>
      </div>
      <SliderCards/>
    </div>
  );
};

export default SaleBanner;
