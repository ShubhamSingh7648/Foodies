import React, { useContext, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

import logoLarge from "../assets/logo-large.png";
import logoSmall from "../assets/logo-small.png"; 

function Nav() {
  let { input, setInput, Cate, setCate, showCart, setShowCart } = useContext(dataContext);
  
  useEffect(() => {
    let newList = food_items.filter(
      (item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input)
    );
    setCate(newList);
  }, [input]);
  
  let items = useSelector((state) => state.cart);
  
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-8 md:px-8 bg-sky-50">
      <div className="flex items-center">
     
        <img 
          src={logoLarge} 
          alt="Logo"
          className=" h-16 object-contain hidden sm:block  transition-all duration-500 ease-in-out opacity-0 sm:opacity-100" 
        />
        
  
        <img 
          src={logoSmall} 
          alt="Logo" 
          className=" h-13 object-contain block sm:hidden transition-all duration-500 ease-in-out opacity-100 sm:opacity-0" 
        />
      </div>
      
      <form
        className="w-[47%] h-[60px] items-center bg-white flex px-5 gap-5 rounded-2xl shadow-md md:w-[70%] sm:w-[60%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="text-red-400 w-[20px] h-[20px]" />
        <input
          type="text"
          placeholder="Search item..."
          className="w-[100%] outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      
      <div
        className="w-[60px] h-[60px] relative bg-white flex justify-center items-center rounded-[10px] shadow-2xl cursor-pointer"
        onClick={() => {
          console.log("clicked");
          setShowCart(true);
        }}
      >
        <span className="absolute top-0 right-2 text-[17px] text-red-500 font-bold">
          {items.length}
        </span>
        <LuShoppingBag className="w-[30px] h-[30px] text-red-400" />
      </div>
    </div>
  );
}

export default Nav;