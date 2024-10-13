import React from "react";
import TopHeader from "../components/common/TopHeader";
import Header from "../components/common/Header";
import Line from "../components/common/Line";
import Button from "../components/common/Button";

const Cart = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Line />
      <div className="cart mt-10 px-20">
        <table className="w-full  text-center">
          <tr className=" border  drop-shadow-sm">
            <th className="border">Product</th>
            <th className="border">Price</th>
            <th className="border">Quantity</th>
            <th className="border">Subtotal</th>
          </tr>
          <br />
          <tr className=" border">
            <td className="border flex items-center gap-2 ">
              <img
                src="/assets/images/gamepaddetail1.png"
                className="w-12 rounded-md h-12 object-cover"
                alt=""
              />
              <h1>LCD Monitor</h1>
            </td>
            <td className="border">$640 </td>
            <td>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </td>
            <td className="border">
              <h1>$650</h1>
            </td>
          </tr>
        </table>
        <div className="btn flex justify-between mt-5">
          <Button btnTxt={"Return to Shop"} />
          <Button btnTxt={"Update Cart"} />
        </div>
        <div className="flex justify-between  mt-10">
          <div className="space-x-2">
          <input
            type="text"
            placeholder="Coupon Code"
            className="bg-transparent border-2 border-black p-1  focus:text-black"
          />
            <Button btnTxt={"Apply Coupon"} />
          </div>
          <div className="cartTotal w-72 h-6w-64 border-2 rounded-md p-4 leading-10">
            <h1 className="font-bold">Cart Total</h1>
            <div className=" flex justify-between">
              <h3>Sub total:</h3>
              <span>$1750</span>
            </div>
            <Line />
            <div className="flex justify-between">
              <h3>Shipping:</h3>
              <span>$1750</span>
            </div>
            <Line />
            <div className="flex justify-between">
              <h3>Total:</h3>
              <span>$1750</span>
            </div>
            <Line />
            <div className="text-center mt-2 ">
              <Button btnTxt={"Proceed to Check out"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
