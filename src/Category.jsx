import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { PiBowlFood } from "react-icons/pi";

import React  from "react";

const categories=[
    {
        id:1,
        name:"All",
        icon:<BiCategoryAlt className="w-[70%] h-[70%] text-red-400" />
    },
    {
        id:2,
        name:"breakfast",
        icon:<MdOutlineFreeBreakfast  className="w-[70%] h-[70%] text-red-400" />
    },
    {
        id:3,
        name:"soups",
        icon:<MdEmojiFoodBeverage  className="w-[70%] h-[70%] text-red-400"  />
    },
    {
        id:4,
        name:"pizza",
        icon:<FaPizzaSlice  className="w-[70%] h-[70%] text-red-400" />
    }, 
    {
        id:5,
        name:"main_course",
        icon:<IoFastFoodSharp className="w-[70%] h-[70%] text-red-400"/>  
    },
    {
        id:6,
        name:"pasta",
        icon:<PiBowlFood className="w-[70%] h-[70%] text-red-400" />
    },
    
    {
        id:7,
        name:"burger",
        icon:<FaHamburger  className="w-[70%] h-[70%] text-red-400" />
    }

]

export default categories