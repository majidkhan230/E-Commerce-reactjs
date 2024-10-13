import React from "react";
import TopHeader from "../components/common/TopHeader";
import Header from "../components/common/Header";
import Line from "../components/common/Line";
import Star from "../components/common/Star";
import Button from "../components/common/Button";
import Footer from "../components/common/Footer";

const ProductDetails = () => {
  const { title, price, rating, description, review, quantity } = {
    title: "Havic HV G-92 Gamepad",
    price: "$192.00",
    rating: 4,
    review: 88,
    quantity: 45,
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  };
  return (
    <div className="">
      <TopHeader />
      <Header />
      <Line />

      <div className="detailBanner grid grid-cols-1 lg:grid-cols-6 mt-10 gap-4 lg:gap-6 px-5 lg:px-20 my-10">
      <div className="grid grid-cols-4 lg:grid-cols-1 lg:grid-rows-4 gap-2">
  <img src="/assets/images/gamepaddetail1.png" className="w-full h-full object-cover aspect-[1/1]" alt="Small detail" />
  <img src="/assets/images/gamepaddetail1.png" className="w-full h-full object-cover aspect-[1/1]" alt="Small detail" />
  <img src="/assets/images/gamepaddetail1.png" className="w-full h-full object-cover aspect-[1/1]" alt="Small detail" />
  <img src="/assets/images/gamepaddetail1.png" className="w-full h-full object-cover aspect-[1/1]" alt="Small detail" />
</div>


  <div className="lg:col-span-3">
    <img src="/assets/images/gamepaddetail.png" className="w-full h-full object-cover" alt="Main detail" />
  </div>

  <div className="lg:col-span-2 space-y-4">
    <h1 className="text-xl lg:text-2xl font-bold">{title}</h1>
    <Star rating={rating} review={review} />
    <h1 className="text-lg lg:text-xl">{price}</h1>
    <p className="leading-tight">{description}</p>
    <Line />
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">Size:</span>
      {["XS", "S", "M", "L", "XL"].map((size) => (
        <button key={size} className="px-3 py-1 border rounded hover:bg-red-600 hover:text-white">
          {size}
        </button>
      ))}
    </div>
    <div className="flex items-center space-x-4">
      <button className="w-8 h-8 flex items-center justify-center border">-</button>
      <span>{quantity}</span>
      <button className="w-8 h-8 flex items-center justify-center border">+</button>
      <Button btnTxt={"Buy Now"} />
    </div>
    <div className="flex flex-col border py-4">
      <div className="flex gap-2 items-center">
        <img src="/assets/images/icon-delivery.png" className="w-10 h-10 object-cover" alt="Delivery icon" />
        <div className="flex flex-col py-2">
          <span className="text-sm">Free Delivery</span>
          <span className="text-sm text-gray-500 underline">Enter your postal code for Delivery Availability</span>
        </div>
      </div>
      <div className="flex gap-2 items-center mt-4">
        <img src="/assets/images/Icon-return.png" className="w-10 h-10 object-cover" alt="Return icon" />
        <div className="flex flex-col py-2">
          <span className="text-sm font-bold">Return Delivery</span>
          <span className="text-sm text-gray-500">Free 30 Days Delivery Returns. Details</span>
        </div>
      </div>
    </div>
  </div>
</div>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
