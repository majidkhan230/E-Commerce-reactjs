import React from "react";
import { FaXTwitter,FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const About = () => {

    const stats = [
        { id: 1, value: "10.5k", description: "Sellers active on our site" },
        { id: 2, value: "33k", description: "Monthly Product Sale" },
        { id: 3, value: "45.5k", description: "Customers active on our site" },
        { id: 4, value: "25k", description: "Annual gross sale on our site" },
      ];
  return (
    <div>
     


      <section className="container mx-auto mt-8 px-5 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/2 space-y-4">
          
            <h1 className="text-4xl font-bold">Our Story</h1>
            <p>
              Launched in 2015, Exclusive is South Asia's premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p>
              Exclusive has more than 1 million products to offer, growing at a
              very fast rate. Exclusive offers a diverse assortment in
              categories ranging from consumer products.
            </p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <img src="/assets/images/about-side-img.png" alt="Our Story" className="w-full h-auto object-cover rounded-md" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-12">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="text-center border rounded-lg p-4 hover:bg-red-500 hover:text-white transition-colors duration-300"
        >
          <h2 className="text-2xl font-bold">{stat.value}</h2>
          <p>{stat.description}</p>
        </div>
      ))}
    </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <img src="/assets/images/dp1.png" alt="Tom Cruise" className="w-48 h-48 mx-auto rounded-full object-cover" />
            <h3 className="text-xl font-bold mt-4">Tom Cruise</h3>
            <p>Founder & Chairman</p>
            <div className="flex justify-center space-x-3 mt-2">
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
          <div className="text-center">
            <img src="/assets/images/dp2.png" alt="Emma Watson" className="w-48 h-48 mx-auto rounded-full object-cover" />
            <h3 className="text-xl font-bold mt-4">Emma Watson</h3>
            <p>Managing Director</p>
            <div className="flex justify-center space-x-3 mt-2">
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
          <div className="text-center">
            <img src="/assets/images/dp3.png" alt="Will Smith" className="w-48 h-48 mx-auto rounded-full object-cover" />
            <h3 className="text-xl font-bold mt-4">Will Smith</h3>
            <p>Product Designer</p>
            <div className="flex justify-center space-x-3 mt-2">
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-4">
            <img src="/assets/images/Services.png" alt="Free Delivery" className="w-10 h-10 mx-auto" />
            <h4 className="font-bold mt-2">FREE AND FAST DELIVERY</h4>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="text-center p-4">
            <img  src="/assets/images/Services2.png" alt="Customer Service" className="w-10 h-10 mx-auto" />
            <h4 className="font-bold mt-2">24/7 CUSTOMER SERVICE</h4>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="text-center p-4">
            <img src="/assets/images/Services3.png" alt="Money Back" className="w-10 h-10 mx-auto" />
            <h4 className="font-bold mt-2">MONEY BACK GUARANTEE</h4>
            <p>We return money within 30 days</p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;
