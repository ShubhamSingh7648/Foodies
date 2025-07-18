// Card2.jsx
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AddItem, RemoveItem } from "../redux/cartSlice";

function Card2({ name, id, price, image, quantity }) {
  let dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(AddItem({ id, name, price, image, quantity: quantity + 1 }));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(AddItem({ id, name, price, image, quantity: quantity - 1 }));
    } else {
      dispatch(RemoveItem(id));
    }
  };

  return (
    <div className="w-full h-[120px] p-2 shadow-lg rounded-[8px] flex justify-between">
      <div className="w-[60%] h-full flex gap-5">
        <div className="h-full w-[60%] overflow-hidden rounded-[8px]">
          <img src={image} alt={name} className="object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-5">
          <div className="text-lg font-semibold text-gray-400">{name}</div>
          <div className="w-[100px] h-[50px] bg-slate-400 flex rounded-[8px] overflow-hidden shadow-lg font-semibold border-2 border-red-400 text-xl">
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center  hover:bg-gray-200"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-red-400">
              {quantity}
            </span>
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-6">
        <span className="text-xl text-red-400 font-semibold">Rs {price * quantity}</span>
        <FaTrashAlt
          className="w-[30px] h-[30px] text-red-400 cursor-pointer"
          onClick={() => dispatch(RemoveItem(id))}
        />
      </div>
    </div>
  );
}

export default Card2;