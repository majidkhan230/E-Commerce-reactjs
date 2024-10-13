import React from "react";
import Card from "./common/Card";

const SaleBanner = () => {
  return (
    <div className="px-20">
      <div className="flex items-center">
        <img src="/assets/images/CategoryRectangle.png" alt="" />
        <h2 className="ml-2 text-red-500">Today's</h2>
      </div>
      <div className="font-bold text-2xl m-4">
        <h1>Flash Sales</h1>
      </div>
      <Card/>
    </div>
  );
};

export default SaleBanner;
