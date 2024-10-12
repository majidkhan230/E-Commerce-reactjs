import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Fade() {
  const baseUrl  ="/assets/images/bannerimg1.png"
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div className="slider-container p-6">
      <Slider {...settings}>
        <div>
          <img src={baseUrl} />
        </div>
        <div>
          <img src={baseUrl} />
        </div>
        <div>
          <img src={baseUrl} />
        </div>
        <div>
          <img src={baseUrl} />
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
