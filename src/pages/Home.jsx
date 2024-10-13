import React from "react";
import TopHeader from "../components/common/TopHeader";
import Header from "../components/common/Header";
import Line from "../components/common/Line";
import Footer from "../components/common/Footer";
import Banner from "../components/Banner";
import SaleBanner from "../components/SaleBanner";
import Signup from "./Signup";
import Login from "./Login";

const Home = () => {
  return (
    <div>
<TopHeader/>
<Header/>
<Line/>
<Banner/>
<SaleBanner/>
<Footer/>

{/* <Signup/> */}

{/* <Login/> */}
    </div>
  );
};

export default Home;
