import React, { useEffect, useState } from "react";
// import { products } from "../../Utils/Constant/productData";
import Card from "./Card";
import Button from "./Button";
import axios from "axios";


const ExploreProducts = () => {
const [products,setProducts] = useState([])
const [displayProducts,setDisplayProducts] = useState(8)

const getProducts = async()=>{
try {
  const data = await axios.get("https://fakestoreapi.com/products/")
  console.log(data?.data);
  const res = data?.data
  setProducts(res)
} catch (error) {
  console.log(error.message)
}
}

useEffect(()=>{
  getProducts();
},[])

const handleViewAll = ()=>{
  setDisplayProducts(products.length)
}

  return (
    <div className="px-20">
      <div className="flex items-center">
        <img src="/assets/images/CategoryRectangle.png" alt="" />
        <h2 className="ml-2 text-red-500 font-semibold">Our Prodcuts</h2>
      </div>
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl mt-2 ">Explore Our Products</h1>
      </div>
      <div className="flex items-center flex-wrap gap-8 w-full mt-10 mx-auto">
        {products.slice(0,displayProducts).map((data, index) => {
          return <Card key={index} data={data} />;
        })}
      </div>

      <div  className="text-center my-6">
        <Button  btnTxt={"View All Products"} onClick ={handleViewAll} />
      </div>
    </div>
  );
};

export default ExploreProducts;
