import { FaSolarPanel, FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import React from "react";

const Star = ({ rating, review }) => {
  // console.log(Array.from("foo"))

 const ratingStar =  Array.from({ length: 5 }, (v, i) => {
    let number = i + 0.5;
    return (
      <span key={i}>
        {rating >= i + 1 ? (
          <FaStar className="text-orange-500" />
        ) : rating >= number ? (
          <FaStarHalfAlt  className="text-orange-500" />
        ) : (
          <FaRegStar  className="text-orange-500" />
        )}
      </span>
    );
  });

  return (
    <span className="flex items-center">
      {ratingStar}
      <p className="pl-2">({review} )</p>
    </span>
  );
};

export default Star;
