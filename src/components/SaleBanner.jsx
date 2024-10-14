import React from "react";
import Card from "./common/Card";
import FlashSaleTimer from "./common/FlashSaleTimer";

const SaleBanner = () => {
  return (
    <div className="px-20">
      <div className="flex items-center">
        <img src="/assets/images/CategoryRectangle.png" alt="" />
        <h2 className="ml-2 text-red-500">Today's</h2>
      </div>
      <div className=" m-4 flex items-end gap-10">
        <h1 className="font-bold text-3xl ">Flash Sales</h1>
        <FlashSaleTimer/>
      </div>
      <Card/>
    </div>
  );
};

export default SaleBanner;
