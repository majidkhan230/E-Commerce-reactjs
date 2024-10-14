import React from "react";
import TopHeader from "../components/common/TopHeader";
import Header from "../components/common/Header";
import Line from "../components/common/Line";
import Footer from "../components/common/Footer";
import Banner from "../components/Banner";
import SaleBanner from "../components/SaleBanner";
import Signup from "./Signup";
import Login from "./Login";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import ExploreProducts from "../components/common/ExploreProducts";

const Home = () => {
  return (
    <div>

<Line/>
<Banner/>
<SaleBanner/>
<ExploreProducts/>

    </div>
  );
};

export default Home;
