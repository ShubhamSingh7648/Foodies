// Home.jsx
import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import { ImCross } from "react-icons/im";
import Card2 from "../components/Card2";
import categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { useSelector } from "react-redux";
import { toast } from "react-toast";

function Home() {
  let { Cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter((item) => item.food_category === category);
      setCate(newList);
    }
  }

  let items = useSelector((state) => state.cart);
  let subTotal = items.reduce((total, item) => total + item.quantity * item.price, 0);
  let deliveryFee = 20;
  let taxes = subTotal * 0.5 / 100;
  let total = Math.floor(subTotal + deliveryFee + taxes);

  return (
    <div className="bg-slate-100">
      <Nav />
      {!input ? (
        <div className=" flex flex-wrap justify-center items-center gap-5 w-[100%]">
          {categories.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[140px] h-[140px] bg-white flex flex-col items-center gap-5 p-5 justify-start text-[20px] font-semibold text-gray-400 rounded-[8px] hover:bg-red-200 cursor-pointer transition-all duration-300"
                onClick={() => filter(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {Cate.map((item, index) => (
          <Card
            key={index}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>
      <div
        className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl px-6 transition-all duration-500 flex flex-col items-center overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-red-400 text-[18px] font-semibold">Order items</span>
          <ImCross
            className="w-[20px] h-[20px] text-red-400 text-[18px] font-semibold cursor-pointer"
            onClick={() => setShowCart(false)}
          />
        </header>
        <div className="w-full mt-9 flex flex-col gap-8">
          {items.length > 0 ? (
            items.map((item, index) => (
              <Card2
                key={index}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                quantity={item.quantity}
              />
            ))
          ) : (
            <div className="text-center text-red-400 text-2xl font-semibold mt-20">
              Empty Cart
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-4 p-8">
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-gray-400 font-semibold">Subtotal</span>
              <span className="text-red-400 font-semibold text-lg">Rs {subTotal}/-</span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-gray-400 font-semibold">Delivery Fee</span>
              <span className="text-red-400 font-semibold text-lg">Rs {deliveryFee}/-</span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-gray-400 font-semibold">Taxes</span>
              <span className="text-red-400 font-semibold text-lg">Rs {taxes}/-</span>
            </div>
          </div>
        )}
        {items.length > 0 && (
          <div className="w-full flex justify-between items-center p-9">
            <span className="text-2xl text-gray-400 font-semibold">Total</span>
            <span className="text-red-400 font-semibold text-lg">Rs {total}/-</span>
          </div>
        )}
        {items.length > 0 && (
          <button className="w-full p-4 bg-red-400 rounded-lg text-white hover:bg-red-400 transition-all" onClick={()=>{
            toast.success("Order placed")}}>
            Place Order
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;