// Card.jsx
import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toast";

function Card({ name, image, id, price, type }) {
  let dispatch = useDispatch();
  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-[7px] flex flex-col gap-3  hover:shadow-2xl ">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-[6px]">
        <img src={image} alt="" className="object-cover" />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-red-400">Rs {price}</div>
        <div className="flex justify-center items-center gap-2 text-red-400 text-lg font-semibold">
          {type == "veg" ? <LuLeafyGreen /> : <GiChickenOven />} <span>{type}</span>
        </div>
      </div>
      <button
        className="w-full p-4 bg-red-400 rounded-[6px] text-white cursor-pointer hover:bg-red-500 transition-all"
        onClick={() => {dispatch(AddItem({ id, name, price, image, quantity: 1 }));toast.success("item added")}}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;