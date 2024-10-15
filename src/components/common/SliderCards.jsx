import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import axios from "axios";
// import { products } from "../../Utils/Constant/productData";
const SliderCards = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products/");
      console.log(data?.data);
      const res = data?.data;
      setProducts(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
        {products.reverse().map((data, index) => {
          return <Card key={index} data={data} />;
        })}
      </Slider>
    </div>
  );
};

export default SliderCards;
