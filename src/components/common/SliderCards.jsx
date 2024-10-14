import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { products } from "../../Utils/Constant/productData";
const SliderCards = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="slider-container mt-10">
      <Slider {...settings}>
        {products.map((data, index) => {
          return (
              <Card key={index} data={data} />
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderCards;
