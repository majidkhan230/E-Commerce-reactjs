import React from "react";
import Line from "../components/common/Line";
import Banner from "../components/Banner";
import SaleBanner from "../components/SaleBanner";
import ExploreProducts from "../components/common/ExploreProducts";


const Home = () => {
  return (
    <div>
      <Line />
      <Banner />
      <SaleBanner />
      <ExploreProducts />
    </div>
  );
};

export default Home;
