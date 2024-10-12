import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CartWithFlatDiscount = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const products = [
    { title: "HAVIT HV-G92 Gamepad", price: 120, cutPrice: 160, review: 88 },
    { title: "Logitech G502 HERO", price: 150, cutPrice: 200, review: 92 },
    { title: "Razer DeathAdder V2", price: 130, cutPrice: 170, review: 90 },
    { title: "SteelSeries Rival 600", price: 140, cutPrice: 180, review: 85 },
    {
      title: "Corsair K95 RGB Platinum",
      price: 200,
      cutPrice: 250,
      review: 95,
    },
    { title: "HyperX Cloud II", price: 100, cutPrice: 130, review: 89 },
    {
      title: "ASUS ROG Strix Fusion 500",
      price: 160,
      cutPrice: 210,
      review: 91,
    },
    {
      title: "Redragon S101 Wired Gaming Keyboard",
      price: 45,
      cutPrice: 60,
      review: 84,
    },
    { title: "Turtle Beach Recon 200", price: 70, cutPrice: 90, review: 86 },
    { title: "Cooler Master MM710", price: 60, cutPrice: 80, review: 87 },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((item, index) => {
          const { title, price, cutPrice, review } = item;
          return (
            <div key={index} className="card w-56 h-56 ">
           <div className="bg-[#F5F5F5]  mr-6  ">
           <img
                src="/assets/images/gamepad.png"
                className="w-full h-32 object-contain "
                alt={title}
              />
           </div>
              <h2 className="text-center">{title}</h2>
              <h3 className="text-red-500 text-center">
                ${price}
                <span>
                  <s>${cutPrice}</s>
                </span>
              </h3>
              <h3 className="text-center">
                stars <span>({review})</span>
              </h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CartWithFlatDiscount;
