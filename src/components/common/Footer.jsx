import React from "react";
import { TiArrowRightThick } from "react-icons/ti";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <h3 className="font-bold text-lg mb-4">Exclusive</h3>
          <p className="mb-2">Get 10% off your first order</p>
          <div className="flex items-center border-b border-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none placeholder-gray-400 text-white flex-grow"
            />
            <button className="text-white px-2"><TiArrowRightThick className="" /></button>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Support</h3>
          <p className="mb-2">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="mb-2">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Account</h3>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Download App</h3>
          <p className="mb-2">Save $3 with App New User Only</p>
          <div className="flex space-x-2 mb-4">
            <img
              src="/assets/images/GooglePlay.png"
              alt="Google Play"
              className="w-28"
            />
            <img
              src="/assets/images/AppStore.png"
              alt="App Store"
              className="w-24"
            />
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
