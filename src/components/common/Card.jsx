import React from "react";
import Star from "./Star";
import { useNavigate } from "react-router-dom";
const Card = ({data}) => {
    const {id, title, price, cutPrice, review, rating,image } = data;
const navigate = useNavigate();

  const hanldeClickCard = ()=>{
      console.log("clicked on card",id)
      navigate(`/product/${id}`)
  }
    
  return (
    <div onClick={()=>{
      hanldeClickCard();
    }}  className="card w-56 h-56 relative group hover:scale-105">
    <div className="bg-[#F5F5F5] relative">
      <img
        src={image ||`/assets/images/gamepad.png` }
        className="w-full h-32 object-contain"
        alt={title}
      />
      <div className="absolute inset-0 flex items-end justify-center ">
        <div className="text-center text-white font-semibold bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
          Add To Cart
        </div>
      </div>
    </div>
    <h2 className="text-sm mt-2">{title}</h2>
    <h3 className="text-red-500">
      ${price}
      <span className="pl-2">
        <s>${cutPrice}</s>
      </span>
    </h3>
    <h3>
      <Star rating={rating.rate} review={rating.count} />
    </h3>
  </div>
  );
};

export default Card;
