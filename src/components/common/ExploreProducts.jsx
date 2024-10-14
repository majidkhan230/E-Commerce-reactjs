import React from "react";
import { products } from "../../Utils/Constant/productData";
import Card from "./Card";
import Button from "./Button";

const ExploreProducts = () => {
  return (
    <div className="px-20">
      <div className="flex items-center">
        <img src="/assets/images/CategoryRectangle.png" alt="" />
        <h2 className="ml-2 text-red-500 font-semibold">Our Prodcuts</h2>
      </div>
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl mt-2 ">Explore Our Products</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-8 w-full mt-10 mx-auto">
        {products.map((data, index) => {
          return <Card key={index} data={data} />;
        })}
      </div>

      <div className="text-center my-6">
        <Button btnTxt={"View All Products"} />
      </div>
    </div>
  );
};

export default ExploreProducts;
